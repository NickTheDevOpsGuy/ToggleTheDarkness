import { useState } from "react";
import { flip, isWin, makeEmpty } from "@/lib/game";
import { Cell } from "@/components/Cell";

const ROWS = 5;
const COLS = 5;

export default function Board() {
  const [hasWon, setHasWon] = useState(false);

  const [grid, setGrid] = useState<number[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(0)),
  );

  const handleClick = (r: number, c: number) => {
    setGrid((prev) => {
      const next = flip(prev, r, c);
      if (isWin(next)) {
        setHasWon(true);
      }
      return next; 
    });
  };

  const resetBoard = () => {
    setGrid((prev) => {
      const rows = prev.length;
      const cols = prev[0]?.length ?? 0;
      return Array.from({ length: rows }, () => Array(cols).fill(0));
    });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={resetBoard}
        className="rounded-md bg-zinc-800 px-4 py-2 text-zinc-100 hover:bg-zinc-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
      >
        Reset
      </button>

      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${COLS}, 56px)` }}
      >
        {grid.map((row, r) =>
          row.map((val, c) => (
            <Cell
              key={`${r}-${c}`}
              active={val}
              row={r}
              col={c}
              onClick={handleClick}
            />
          )),
        )}
      </div>
    </div>
  );
}
