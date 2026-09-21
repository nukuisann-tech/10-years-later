"use client";

import { useState, type FormEvent } from "react";

const planningStages = [
  "まだ何も決まっていない",
  "土地を探している",
  "土地が決まっている",
  "建替えを考えている",
  "リノベーションを考えている",
];

const fieldClass =
  "w-full border-0 border-b hairline bg-transparent py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-secondary/60 focus:border-wood";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t hairline py-16 text-center">
        <p className="font-serif-jp text-[22px] text-ink md:text-[24px]">
          お問い合わせ、ありがとうございます。
        </p>
        <p className="mt-5 text-[14px] leading-loose text-secondary">
          内容を確認のうえ、2〜3営業日以内に担当者よりご連絡いたします。
          <br />
          ※本サイトは架空の工務店のコンセプトサイトのため、実際の送信は行われません。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="border border-line bg-surface px-5 py-4">
        <p className="font-en-serif text-[11px] italic tracking-[0.14em] text-wood">
          DEMO FORM
        </p>
        <p className="mt-1.5 text-[12px] leading-relaxed text-secondary">
          本フォームはポートフォリオ用のデモフォームです。実際の企業へのお問い合わせには送信されません。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-secondary">
            お名前 <span className="text-wood">必須</span>
          </span>
          <input required type="text" name="name" placeholder="山田 太郎" className={fieldClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-secondary">
            メールアドレス <span className="text-wood">必須</span>
          </span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-secondary">
            電話番号 <span className="text-secondary/60">任意</span>
          </span>
          <input type="tel" name="phone" placeholder="00-0000-0000" className={fieldClass} />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] tracking-wide text-secondary">
            ご検討エリア <span className="text-wood">必須</span>
          </span>
          <input
            required
            type="text"
            name="area"
            placeholder="例）架空県 架空市"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[12px] tracking-wide text-secondary">
          現在の検討状況 <span className="text-wood">必須</span>
        </span>
        <select required name="stage" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            選択してください
          </option>
          {planningStages.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[12px] tracking-wide text-secondary">
          メッセージ <span className="text-secondary/60">任意</span>
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="今の暮らしで感じていること、気になっていることなど、お気軽にお書きください。"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="mt-4 flex flex-col gap-6">
        <p className="text-[12px] leading-relaxed text-secondary">
          いただいた内容をもとに、こちらからお電話で無理な営業を行うことはありません。
          まずはメールにて、ゆっくりお返事いたします。
        </p>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center bg-forest px-8 py-4 text-[13px] tracking-wide text-base transition-opacity hover:opacity-90 md:w-auto"
        >
          この内容で送信する
        </button>
      </div>
    </form>
  );
}
