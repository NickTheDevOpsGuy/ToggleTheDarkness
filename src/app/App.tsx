import Board from "@/components/Board";
import "./styles/global.css";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black text-center">
      {/* Neon Title */}
      <h1 className="neon neon-flicker text-5xl md:text-6xl">
        <span className="neon-orange">TOGGLE</span>
        <br />
        <span className="neon-cyan neon-warmup -ml-1 md:-ml-2">
          THE DARKNESS
        </span>
      </h1>

      <Board />
    </main>
  );
}
