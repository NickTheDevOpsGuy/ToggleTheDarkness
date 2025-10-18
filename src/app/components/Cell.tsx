type Props = {
  active: number; // 0 or 1
  row: number;
  col: number;
  onClick: (row: number, col: number) => void;
  disabled?: boolean;
};

export function Cell({ active, row, col, onClick, disabled }: Props) {
  const handleClick = () => {
    if (disabled) return;
    onClick(row, col);
  };

  const base =
    'h-14 w-14 rounded-lg border transition-colors focus:outline-none ' +
    'focus:ring-2 focus:ring-cyan-500 flex items-center justify-center select-none ' +
    'border-zinc-800';
  const onClasses = 'bg-yellow-400 shadow shadow-yellow-400/30';
  const offClasses = 'bg-zinc-900 hover:bg-zinc-800';
  const disabledClasses = disabled ? 'opacity-60 cursor-not-allowed' : '';

  return (
    <button
      type='button'
      onClick={handleClick}
      aria-disabled={disabled}
      aria-label={`row ${row + 1}, col ${col + 1}`}
      className={`${base} ${active ? onClasses : offClasses} ${disabledClasses}`}
    />
  );
}
