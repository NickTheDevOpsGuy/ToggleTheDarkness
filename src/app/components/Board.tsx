import { useState } from 'react';
import { Cell } from '@/components/Cell';
import { flip, isWin, randomize } from '@/lib/game';
import { useBeep } from '@/lib/sound';

type BoardProps = { rows: number; cols: number; startShuffled?: boolean };

export default function Board({
  rows,
  cols,
  startShuffled = false,
}: BoardProps) {
  const flips = Math.max(3, Math.round(rows * cols * 0.3));

  // Initialize grid once (conditionally shuffled)
  const [grid, setGrid] = useState<number[][]>(() => {
    const allOn = Array.from({ length: rows }, () => Array(cols).fill(1));
    return startShuffled ? randomize(allOn, flips) : allOn;
  });

  const [moves, setMoves] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const { clickBeep, winFanfare } = useBeep();

  const handleClick = (r: number, c: number) => {
    if (hasWon) return; // ignore after win
    setGrid((prev) => {
      const next = flip(prev, r, c);
      if (isWin(next)) {
        setHasWon(true);
        setTimeout(winFanfare, 120);
      } else {
        clickBeep();
      }
      return next;
    });
    setMoves((m) => m + 1);
  };

  const resetBoard = () => {
    // all lights on again
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(1)));
    setHasWon(false);
    setMoves(0);
  };

  const shuffleBoard = () => {
    const flips = Math.max(3, Math.round(rows * cols * 0.3));
    setGrid((prev) => randomize(prev, flips));
    setHasWon(false);
    setMoves(0);
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      {/* Toolbar */}
      <div className='flex items-center justify-center gap-3'>
        <button
          type='button'
          onClick={resetBoard}
          className='rounded-md bg-zinc-800 px-4 py-2 text-zinc-100 hover:bg-zinc-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
        >
          Reset
        </button>
        <button
          type='button'
          onClick={shuffleBoard}
          className='rounded-md bg-zinc-800 px-4 py-2 text-zinc-100 hover:bg-zinc-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
        >
          Shuffle
        </button>
        <span className='ml-2 text-zinc-400'>Moves: {moves}</span>
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

      {/* Win banner (a11y polite announcement) */}
      <div role='status' aria-live='polite' className='min-h-[1.5rem]'>
        {hasWon && (
          <div className='mt-2 animate-pulse text-lg font-semibold text-cyan-400'>
            🎉 You win!
          </div>
        )}
      </div>
    </div>
  );
}
