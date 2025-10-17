
  const ROWS = 5, COLS = 5;
  const cells = Array.from({ length: ROWS * COLS });

  export default function Board() {


    return (
    <main className="min-h-screen grid place-items-center">
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${COLS}, 56px)` }}
      >
        {cells.map((_, i) => (
          <button
            key={i}
            className="h-14 w-14 rounded-md border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label={`cell ${i + 1}`}
          />
        ))}
      </div>
    </main>
  );

  }