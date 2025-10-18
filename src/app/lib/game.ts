// Flip clicked cell + its orthogonal neighbors
export function flip(board: number[][], r: number, c: number): number[][] {
  const dirs = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  return board.map((row, ri) =>
    row.map((val, ci) => {
      const hit = dirs.some(([dr, dc]) => ri === r + dr && ci === c + dc);
      return hit ? val ^ 1 : val; // XOR toggles 0 <-> 1
    })
  );
}

export function isWin(grid: number[][]): boolean {
  return grid.every((row) => row.every((cell) => cell === 0));
}

export function makeEmpty(rows: number, cols: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

// Flip N random cells to seed a puzzle (re-uses same flip logic)
export function randomize(grid: number[][], count: number): number[][] {
  let next = grid;
  const rows = grid.length,
    cols = grid[0]?.length ?? 0;
  for (let i = 0; i < Math.max(1, count); i++) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    next = flip(next, r, c);
  }
  if (isWin(next) && rows && cols) {
    // guarantee not all-off
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    next = flip(next, r, c);
  }
  return next;
}

export type CellValue = 0 | 1;
export type Grid = CellValue[][];
