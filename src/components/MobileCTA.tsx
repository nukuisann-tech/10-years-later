"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div
      className="no-print fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t hairline bg-base/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <Link
        href="/works"
        className="flex items-center justify-center border-r hairline py-4 text-[13px] tracking-wide text-ink"
      >
        施工事例を見る
      </Link>
      <Link
        href="/contact"
        className="flex items-center justify-center bg-forest py-4 text-[13px] tracking-wide text-base"
      >
        相談する
      </Link>
    </div>
  );
}
