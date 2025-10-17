// utils/flip.ts
export function flip(board: number[][], r: number, c: number) {
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
      return hit ? val ^ 1 : val; // XOR to flip 0/1
    }),
  );
}

export function isWin(grid: number[][]): boolean {
  return grid.every((row) => row.every((cell) => cell === 0));
}

export function makeEmpty(grid: number[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}
