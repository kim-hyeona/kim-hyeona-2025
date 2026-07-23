const BADGES = [
  { label: "HTML5", bg: "bg-orange-500" },
  { label: "CSS3", bg: "bg-blue-500" },
  { label: "Sass", bg: "bg-pink-500" },
  { label: "Tailwind", bg: "bg-sky-400" },
  { label: "JS", bg: "bg-yellow-400 text-black" },
  { label: "TS", bg: "bg-blue-600" },
  { label: "React", bg: "bg-cyan-500" },
  { label: "Vue", bg: "bg-emerald-500" },
  { label: "Git", bg: "bg-red-500" },
  { label: "Next", bg: "bg-black" },
];

export default function SkillDetail() {
  return (
    <section className="px-4 pb-24 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap justify-center gap-3 pb-8">
          {BADGES.map((b) => (
            <span
              key={b.label}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-[11px] font-bold text-white shadow-[2px_2px_0_0_#111] ${b.bg}`}
            >
              {b.label}
            </span>
          ))}
        </div>

        <div className="relative mx-auto w-full max-w-2xl rounded-2xl border-2 border-ink bg-cream p-3 shadow-[4px_4px_0_0_#111]">
          <div className="sketch-box overflow-hidden">
            <div className="border-b-2 border-ink px-4 py-2 text-sm font-semibold">
              skill
            </div>
            <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-100 px-3 pt-2">
              <span className="flex items-center gap-1 rounded-t-md bg-white px-3 py-1.5 text-xs font-medium">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">
                  TS
                </span>
                TypeScript
              </span>
            </div>
            <div className="bg-gray-100 px-3 py-2">
              <div className="rounded-full bg-white px-3 py-1 text-xs text-gray-500">
                https://www.kha.com
              </div>
            </div>
            <p className="px-4 py-6 text-sm leading-relaxed sm:text-[15px]">
              타입스크립트를 사용하는 이유를 이해하고 타입을 적절하게 지정하며
              개발할 수 있어요.
            </p>
          </div>

          {/* 모니터 받침대 */}
          <div className="mx-auto mt-1 h-6 w-4 border-x-2 border-ink bg-cream" />
          <div className="mx-auto -mt-1 h-6 w-40 rounded-t-full border-2 border-ink bg-cream" />
        </div>
      </div>
    </section>
  );
}
