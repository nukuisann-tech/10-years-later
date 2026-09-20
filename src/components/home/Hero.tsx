"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { image, heroImage } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-72px)] items-end overflow-hidden md:min-h-[calc(100dvh-88px)]">
      <Image
        src={image(heroImage.key, 2000)}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />

      <div className="wide relative z-10 w-full pb-16 pt-24 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="font-en-serif text-[12px] italic tracking-[0.14em] text-base/90 uppercase md:text-[13px]"
        >
          {"10 Years Later"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          className="mt-5 max-w-2xl text-[34px] leading-[1.45] text-base md:text-[46px] md:leading-[1.4] lg:text-[56px]"
        >
          完成日ではなく、
          <br />
          10年後を設計する。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          className="mt-7 max-w-md text-[14px] leading-loose text-base/90 md:text-[15px]"
        >
          家は、完成した瞬間がいちばん新しい。
          <br />
          でも、本当に大切なのはその先です。
          <br />
          家族の時間とともに、少しずつ好きになっていく家を。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link
            href="/works"
            className="inline-flex items-center border border-base/70 px-7 py-3.5 text-[13px] tracking-wide text-base transition-colors hover:bg-base hover:text-ink"
          >
            施工事例を見る
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-[13px] tracking-wide text-base/90 underline decoration-base/40 underline-offset-8 transition-colors hover:text-base"
          >
            家づくりの話をしてみる
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <span className="block h-10 w-px animate-pulse bg-base/50" />
      </motion.div>
    </section>
  );
}
