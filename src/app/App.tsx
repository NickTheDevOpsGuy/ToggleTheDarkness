import { useState } from "react";
import Board from "@/components/Board";
import "./styles/global.css";

type Difficulty = "easy" | "medium" | "hard";
const sizes: Record<Difficulty, number> = { easy: 3, medium: 5, hard: 7 };

export default function App() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const size = sizes[difficulty];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black text-center">
      {/* Neon Title */}
      <h1 className="neon neon-flicker text-5xl md:text-6xl">
        <span className="neon-orange">TOGGLE</span> <br />
        <span className="neon-cyan neon-warmup -ml-1 md:-ml-2">
          THE DARKNESS
        </span>
      </h1>

      {/* Difficulty selector */}
      <label className="flex items-center gap-3 text-zinc-300">
        <span className="text-sm">Difficulty</span>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        >
          <option value="easy">Easy (3×3)</option>
          <option value="medium">Medium (5×5)</option>
          <option value="hard">Hard (7×7)</option>
        </select>
      </label>

      {/* Board remounts on difficulty change via key */}
      <Board key={difficulty} rows={size} cols={size} />
    </main>
  );
}
