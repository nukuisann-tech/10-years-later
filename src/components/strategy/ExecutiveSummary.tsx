import { Reveal } from "@/components/Reveal";

const items = [
  {
    no: "01",
    title: "The Problem",
    text: "一度サイトを訪れた検討初期のユーザーとの接点が、そこで切れてしまう。",
  },
  {
    no: "02",
    title: "The Strategy",
    text: "Webサイトを中心に、Search・Social・Content・Lead Magnet・Nurture・Consultationを一本の線としてつなぐ。",
  },
  {
    no: "03",
    title: "The Growth Loop",
    text: "完成した住宅とOB顧客の暮らしが次のContentとなり、次の見込み客を呼ぶ。",
  },
];

export function ExecutiveSummary() {
  return (
    <div className="section py-20 md:py-24">
      <div className="wide">
        <Reveal>
          <p className="label text-[12px]">Executive Summary</p>
        </Reveal>

        <div className="mt-10 border-t hairline">
          {items.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-4 border-b hairline py-10 md:grid-cols-[140px_1fr] md:items-center md:gap-12 md:py-12">
                <p className="font-en-display text-[56px] italic leading-none text-wood md:text-[72px]">
                  {item.no}
                </p>
                <div>
                  <p className="font-serif-jp text-[19px] md:text-[22px]">{item.title}</p>
                  <p className="mt-2 max-w-[52ch] text-[14px] leading-relaxed text-secondary md:text-[15px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
