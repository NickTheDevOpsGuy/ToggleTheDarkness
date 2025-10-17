type Props = {
  active: number; // 0 or 1
  row: number;
  col: number;
  onClick: (row: number, col: number) => void;
};

export function Cell({ active, row, col, onClick }: Props) {
  const handleClick = () => onClick(row, col);

  const base =
    "h-14 w-14 rounded-lg border transition-colors focus:outline-none " +
    "focus:ring-2 focus:ring-cyan-500 flex items-center justify-center select-none " +
    "border-zinc-800";
  const onClasses = "bg-yellow-400 shadow shadow-yellow-400/30";
  const offClasses = "bg-zinc-900 hover:bg-zinc-800";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${active ? onClasses : offClasses}`}
      aria-label={`cell ${row + 1},${col + 1}`}
    />
  );
}
