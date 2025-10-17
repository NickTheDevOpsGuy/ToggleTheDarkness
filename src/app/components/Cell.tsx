import type { flip } from '@/lib/game';

type Props = {
  active: number;
  row: number;
  col: number;
  onClick: (row: number, col: number) => void;
};

export function Cell({ active, row, col, onClick }: Props) {
  const base =
    'h-14 w-14 rounded-md border border-zinc-700 transition-colors ' +
    'focus:outline-none focus:ring-2 focus:ring-cyan-500';
  const on = 'bg-yellow-400 shadow-md shadow-yellow-400/40';
  const off = 'bg-zinc-900 hover:bg-zinc-800';

  const handleClick = () => {
    onClick(row, col); // tell Board which cell was clicked
    console.log(`Clicked on row ${row}, col ${col}`);
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`${base} ${active ? on : off}`}
      aria-label={`cell ${row},${col}`}
    >
      {/* maybe a span or empty space here */}
    </button>
  );
}
