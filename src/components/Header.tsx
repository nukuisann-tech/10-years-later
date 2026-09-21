"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { ConceptBadgeInline } from "@/components/ConceptBadge";

const navItems = [
  { href: "/works", label: "施工事例", en: "Works" },
  { href: "/philosophy", label: "私たちについて", en: "Philosophy" },
  { href: "/performance", label: "性能", en: "Performance" },
  { href: "/journal", label: "ジャーナル", en: "Journal" },
  { href: "/contact", label: "お問い合わせ", en: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [renderedPathname, setRenderedPathname] = useState(pathname);

  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/*
        The blurred/tinted bar lives on this inner div, not <header> itself.
        backdrop-filter establishes a new containing block for fixed-position
        descendants, which would otherwise shrink the fullscreen mobile menu
        below to the height of this bar instead of the viewport.
      */}
      <div className="border-b hairline bg-[color:var(--color-base)]/85 backdrop-blur-md">
        <div className="wide flex h-[72px] items-center justify-between md:h-[88px]">
          <Link href="/" className="flex flex-col leading-none" aria-label={`${site.nameJa} ホーム`}>
            <span className="font-serif-jp text-[17px] tracking-wide text-[color:var(--color-ink)] md:text-[19px]">
              {site.nameJa}
            </span>
            <span className="font-en-serif mt-1 text-[10px] italic tracking-[0.22em] text-[color:var(--color-secondary)] md:text-[11px]">
              {site.nameEn}
            </span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[13px] tracking-wide text-[color:var(--color-ink)]"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[color:var(--color-wood)] transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-0 flex flex-col justify-center bg-[color:var(--color-base)] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="content flex flex-col gap-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b hairline pb-5"
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
            >
              <span className="font-en-serif block text-xs italic tracking-[0.2em] text-[color:var(--color-wood)]">
                {item.en}
              </span>
              <span className="font-serif-jp mt-1 block text-2xl text-[color:var(--color-ink)]">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="content mt-10">
          <ConceptBadgeInline />
        </div>
      </div>
    </header>
  );
}
