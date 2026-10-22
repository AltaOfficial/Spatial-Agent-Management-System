function Button({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}): React.JSX.Element {
  return (
    <button className={`${className} p-2 text-white rounded bg-[#2F6FED] hover: `}>
      {children}
    </button>
  );
}

export { Button };
