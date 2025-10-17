import { useState } from "react";
import { flip } from "@/lib/game";
import { Cell } from "@/components/Cell";

const ROWS = 5;
const COLS = 5;

export default function Board() {
  const [grid, setGrid] = useState<number[][]>(
    Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  );

  const handleClick = (r: number, c: number) => {
    setGrid(prev => flip(prev, r, c));
  };

  return (
  <main className="min-h-screen grid place-items-center bg-black">
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 56px)`,
      }}
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
        ))
      )}
    </div>
  </main>
);
}