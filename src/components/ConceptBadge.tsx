"use client";

import { useState } from "react";

const explanation =
  "本サイトはWeb制作・ブランド設計のポートフォリオとして制作された架空プロジェクトです。企業名、人物、施工事例、数値等はコンセプト設計上のものです。";

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 px-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-w-sm border border-line bg-base p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-en-serif text-[12px] italic tracking-[0.16em] text-wood">
          Concept Project / Portfolio Study
        </p>
        <p className="mt-4 text-[14px] leading-loose text-ink">{explanation}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 text-[13px] tracking-wide text-secondary underline decoration-line underline-offset-8 hover:text-ink"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}

export function ConceptBadgeFixed() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden border border-line bg-base/90 px-3 py-2 text-[10px] tracking-[0.12em] text-secondary backdrop-blur-md transition-colors hover:text-ink lg:block"
      >
        CONCEPT PROJECT
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function ConceptBadgeInline() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-left text-[11px] tracking-[0.12em] text-secondary underline decoration-line underline-offset-4"
      >
        CONCEPT PROJECT — このサイトについて
      </button>
      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
