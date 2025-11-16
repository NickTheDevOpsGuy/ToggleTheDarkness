// src/app/components/Board.tsx
import { useEffect, useState } from 'react';
import { Cell } from '@/components/Cell';
import { flip, isWin, randomize } from '@/lib/game';
import { useBeep } from '@/lib/sound';

type BoardProps = {
  rows: number;
  cols: number;
  startShuffled?: boolean;
};

export default function Board({
  rows,
  cols,
  startShuffled = false,
}: BoardProps) {
  const flips = Math.max(3, Math.round(rows * cols * 0.3));

  // grid state
  const [grid, setGrid] = useState<number[][]>(() => {
    const allOn = Array.from({ length: rows }, () => Array(cols).fill(1));
    return startShuffled ? randomize(allOn, flips) : allOn;
  });

  const [moves, setMoves] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [bestMoves, setBestMoves] = useState<number | null>(null);
  const [isNewBest, setIsNewBest] = useState(false);

  const { clickBeep, winFanfare } = useBeep();

  // load best moves for this board size from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const key = `ttd-best-${rows}x${cols}`;
    const raw = window.localStorage.getItem(key);

    if (raw !== null) {
      const parsed = Number.parseInt(raw, 10);
      if (!Number.isNaN(parsed)) {
        setBestMoves(parsed);
      } else {
        setBestMoves(null);
      }
    } else {
      setBestMoves(null);
    }

    // reset per-size “new best” indicator
    setIsNewBest(false);
  }, [rows, cols]);

  // when the player wins, update best moves if improved
  useEffect(() => {
    if (!hasWon || moves === 0 || typeof window === 'undefined') return;

    const key = `ttd-best-${rows}x${cols}`;
    const raw = window.localStorage.getItem(key);
    const prevBest = raw !== null ? Number.parseInt(raw, 10) : NaN;

    let newBest = false;

    if (Number.isNaN(prevBest) || moves < prevBest) {
      window.localStorage.setItem(key, String(moves));
      setBestMoves(moves);
      newBest = true;
    }

    setIsNewBest(newBest);
  }, [hasWon, moves, rows, cols]);

  const handleClick = (r: number, c: number) => {
    if (hasWon) return; // ignore clicks after win

    setGrid((prev) => {
      const next = flip(prev, r, c);

      if (isWin(next)) {
        setHasWon(true);
        // slight delay so the final toggle “lands” before fanfare
        setTimeout(winFanfare, 120);
      } else {
        clickBeep();
      }

      return next;
    });

    setMoves((m) => m + 1);
  };

  const resetBoard = () => {
    const allOn = Array.from({ length: rows }, () => Array(cols).fill(1));
    setGrid(allOn);
    setHasWon(false);
    setMoves(0);
    setIsNewBest(false);
  };

  const shuffleBoard = () => {
    const localFlips = Math.max(3, Math.round(rows * cols * 0.3));
    setGrid((prev) => randomize(prev, localFlips));
    setHasWon(false);
    setMoves(0);
    setIsNewBest(false);
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      {/* Toolbar */}
      <div className='flex flex-wrap items-center justify-center gap-3'>
        <button
          type='button'
          onClick={resetBoard}
          className='rounded-md bg-zinc-800 px-4 py-2 text-zinc-100 shadow-sm transition hover:bg-zinc-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
        >
          Reset
        </button>
        <button
          type='button'
          onClick={shuffleBoard}
          className='rounded-md bg-zinc-800 px-4 py-2 text-zinc-100 shadow-sm transition hover:bg-zinc-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
        >
          Shuffle
        </button>
      </div>

      {/* Stats row */}
      <div className='text-center text-sm text-zinc-400 md:text-base'>
        <span>Moves: {moves}</span>
        {typeof bestMoves === 'number' && (
          <>
            <span className='mx-3 text-xs font-semibold text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)] md:text-sm'>
              Best: {bestMoves}
            </span>
            {isNewBest && hasWon && (
              <span className='inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-0.5 text-[0.7rem] font-semibold tracking-wide text-cyan-400 uppercase'>
                New best
              </span>
            )}
          </>
        )}
      </div>
      {/* Grid */}
      <div
        className='grid gap-2'
        style={{ gridTemplateColumns: `repeat(${cols}, 56px)` }}
      >
        {grid.map((row, r) =>
          row.map((val, c) => (
            <Cell
              key={`${r}-${c}`}
              active={val}
              row={r}
              col={c}
              onClick={handleClick}
              disabled={hasWon}
            />
          ))
        )}
      </div>

      {/* Win banner / a11y status */}
      <div role='status' aria-live='polite' className='min-h-[1.5rem]'>
        {hasWon && (
          <div className='mt-2 animate-pulse text-lg font-semibold text-cyan-400'>
            🎉 You win in {moves} moves!
          </div>
        )}
      </div>
    </div>
  );
}
