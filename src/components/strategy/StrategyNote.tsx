export function StrategyNote({ children }: { children: string }) {
  return (
    <p className="mt-6 border-l-2 border-wood pl-4 text-[13px] leading-relaxed text-ink md:text-[14px]">
      <span className="font-en-serif mr-2 italic text-wood">Strategy Note —</span>
      {children}
    </p>
  );
}
