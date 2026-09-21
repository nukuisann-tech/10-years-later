import { Reveal } from "@/components/Reveal";

export function PartDivider({ no, label }: { no: string; label: string }) {
  return (
    <div className="wide pt-16 md:pt-20">
      <Reveal className="flex items-center gap-5 border-t hairline pt-6">
        <span className="font-en-display text-[40px] italic leading-none text-wood md:text-[52px]">
          {no}
        </span>
        <span className="font-en-serif text-[13px] tracking-[0.2em] text-secondary md:text-[14px]">
          {label}
        </span>
      </Reveal>
    </div>
  );
}
