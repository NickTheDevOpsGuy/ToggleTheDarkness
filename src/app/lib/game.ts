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
    })
  );
}
