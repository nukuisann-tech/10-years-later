import { SectionLabel } from "@/components/SectionLabel";
import { Reveal, ImageReveal } from "@/components/Reveal";

const steps = [
  { stage: "Attract", ja: "見つけてもらう", via: "SEO / Instagram" },
  { stage: "Educate", ja: "学んでもらう", via: "Journal" },
  { stage: "Imagine", ja: "暮らしを想像", via: "施工事例" },
  { stage: "Trust", ja: "任せられると思う", via: "People / Philosophy" },
  { stage: "Identify", ja: "見込み客化", via: "診断 → 相談CTA", emphasis: "wood" as const },
  { stage: "Consult", ja: "相談", via: "定期点検" },
  { stage: "Support", ja: "契約後も継続", via: "OB取材" },
  { stage: "Refer", ja: "紹介", via: "", emphasis: "forest" as const },
];

export function GrowthEngine() {
  return (
    <div id="engine" className="section scroll-mt-24 bg-surface">
      <div className="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>02 — The Growth Engine</SectionLabel>
          <h2 className="text-[24px] leading-[1.5] md:text-[32px]">
            サイトを中心に置いた、8段階の循環。
          </h2>
        </Reveal>

        {/* Mobile: vertical step flow — a shrunk circular diagram stops being
            legible under ~430px, so the structure changes instead of the type size. */}
        <div className="mt-12 flex flex-col items-center md:hidden">
          {steps.map((s, i) => (
            <Reveal key={s.stage} delay={i * 0.03} className="flex w-full flex-col items-center">
              <div
                className={`w-full max-w-xs border px-5 py-4 text-center ${
                  s.emphasis === "wood"
                    ? "border-wood"
                    : s.emphasis === "forest"
                      ? "border-forest"
                      : "border-line-strong"
                }`}
              >
                <p className="font-en-serif text-[14px] italic text-ink">{s.stage}</p>
                <p className="mt-1 text-[12px] text-secondary">{s.ja}</p>
              </div>
              {i < steps.length - 1 ? (
                <div className="flex flex-col items-center py-2.5">
                  <span className="text-secondary">↓</span>
                  <span className="font-en-serif text-[10px] italic text-secondary">{s.via}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center py-2.5">
                  <span className="text-forest">↓</span>
                  <span className="font-en-serif text-[10px] italic text-forest">
                    新しい Content → Attract
                  </span>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Desktop: circular loop diagram */}
        <ImageReveal delay={0.1} className="mt-14 hidden md:block">
          <figure>
            <svg
              viewBox="0 0 1040 460"
              role="img"
              aria-label="Attract, Educate, Imagine, Trust, Identify, Consult, Support, Refer の8段階が円環状につながり、Referが新しいContentを生み、再びAttractへ戻る成長エンジンの図"
              style={{ width: "100%", height: "auto" }}
            >
              <defs>
                <marker id="geArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
                </marker>
              </defs>

              <g>
                <circle cx="120" cy="230" r="46" fill="none" stroke="currentColor" />
                <text x="120" y="226" textAnchor="middle" fontSize="12" fill="currentColor">Attract</text>
                <text x="120" y="242" textAnchor="middle" fontSize="10" fill="#6D695F">見つけてもらう</text>

                <circle cx="270" cy="90" r="46" fill="none" stroke="currentColor" />
                <text x="270" y="86" textAnchor="middle" fontSize="12" fill="currentColor">Educate</text>
                <text x="270" y="102" textAnchor="middle" fontSize="10" fill="#6D695F">学んでもらう</text>

                <circle cx="470" cy="45" r="46" fill="none" stroke="currentColor" />
                <text x="470" y="41" textAnchor="middle" fontSize="12" fill="currentColor">Imagine</text>
                <text x="470" y="57" textAnchor="middle" fontSize="10" fill="#6D695F">暮らしを想像</text>

                <circle cx="670" cy="90" r="46" fill="none" stroke="currentColor" />
                <text x="670" y="86" textAnchor="middle" fontSize="12" fill="currentColor">Trust</text>
                <text x="670" y="102" textAnchor="middle" fontSize="10" fill="#6D695F">任せられると思う</text>

                <circle cx="820" cy="230" r="46" fill="none" stroke="#92775D" strokeWidth="2" />
                <text x="820" y="226" textAnchor="middle" fontSize="12" fill="#92775D" fontWeight="700">Identify</text>
                <text x="820" y="242" textAnchor="middle" fontSize="10" fill="#6D695F">見込み客化</text>

                <circle cx="670" cy="370" r="46" fill="none" stroke="currentColor" />
                <text x="670" y="366" textAnchor="middle" fontSize="12" fill="currentColor">Consult</text>
                <text x="670" y="382" textAnchor="middle" fontSize="10" fill="#6D695F">相談</text>

                <circle cx="470" cy="415" r="46" fill="none" stroke="currentColor" />
                <text x="470" y="411" textAnchor="middle" fontSize="12" fill="currentColor">Support</text>
                <text x="470" y="427" textAnchor="middle" fontSize="10" fill="#6D695F">契約後も継続</text>

                <circle cx="270" cy="370" r="46" fill="none" stroke="#4F5947" strokeWidth="2" />
                <text x="270" y="366" textAnchor="middle" fontSize="12" fill="#4F5947" fontWeight="700">Refer</text>
                <text x="270" y="382" textAnchor="middle" fontSize="10" fill="#6D695F">紹介</text>
              </g>

              <g stroke="currentColor" strokeOpacity=".6" fill="none">
                <line x1="163" y1="205" x2="235" y2="115" markerEnd="url(#geArrow)" />
                <line x1="313" y1="70" x2="430" y2="48" markerEnd="url(#geArrow)" />
                <line x1="513" y1="50" x2="628" y2="80" markerEnd="url(#geArrow)" />
                <line x1="710" y1="115" x2="785" y2="200" markerEnd="url(#geArrow)" />
                <line x1="820" y1="276" x2="710" y2="340" markerEnd="url(#geArrow)" />
                <line x1="628" y1="392" x2="515" y2="408" markerEnd="url(#geArrow)" />
                <line x1="428" y1="408" x2="313" y2="392" markerEnd="url(#geArrow)" />
              </g>
              <g stroke="#4F5947" strokeOpacity=".8" fill="none">
                <line x1="235" y1="340" x2="163" y2="255" markerEnd="url(#geArrow)" />
              </g>
              <text x="125" y="300" textAnchor="middle" fontSize="10" fill="#4F5947" fontStyle="italic">
                Refer → 新しい Content → Attract
              </text>

              <g fontSize="10" fill="#6D695F">
                <text x="200" y="145" textAnchor="middle">SEO / Instagram</text>
                <text x="375" y="45" textAnchor="middle">Journal</text>
                <text x="575" y="45" textAnchor="middle">施工事例</text>
                <text x="765" y="145" textAnchor="middle">People / Philosophy</text>
                <text x="765" y="315" textAnchor="middle">診断→相談CTA</text>
                <text x="575" y="415" textAnchor="middle">定期点検</text>
                <text x="375" y="415" textAnchor="middle">OB取材</text>
              </g>
            </svg>
          </figure>
        </ImageReveal>

        <p className="font-en-serif mt-8 text-center text-[13px] italic text-secondary md:mt-5 md:text-left">
          Webサイトは Identify（見込み客化）の一点ではなく、Attract から Refer までの全8段階を貫く軸として機能する。
        </p>
      </div>
    </div>
  );
}
