import Link from "next/link";
import { site } from "@/lib/site";

const columns = [
  {
    heading: "Site",
    links: [
      { href: "/works", label: "施工事例" },
      { href: "/philosophy", label: "私たちについて" },
      { href: "/performance", label: "性能" },
    ],
  },
  {
    heading: "More",
    links: [
      { href: "/journal", label: "ジャーナル" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t hairline bg-base pb-10 pt-20 text-ink md:pt-28">
      <div className="wide">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif-jp text-2xl">{site.nameJa}</p>
            <p className="font-en-serif mt-1 text-xs italic tracking-[0.22em] text-secondary">
              {site.nameEn}
            </p>
            <p className="mt-6 max-w-xs text-[13px] leading-loose text-secondary">
              {site.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="label text-[11px]">{col.heading}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-secondary transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t hairline pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-secondary">
            © {new Date().getFullYear()} {site.nameJa}
          </p>
          <p className="max-w-md text-[11px] leading-relaxed text-secondary/80">
            <span className="font-en-serif italic tracking-[0.1em]">CONCEPT PROJECT</span>
            <br />
            本サイトはポートフォリオのために制作した架空の工務店サイトです。
          </p>
        </div>
      </div>
    </footer>
  );
}
