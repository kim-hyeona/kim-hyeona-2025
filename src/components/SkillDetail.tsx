import Image from "next/image";

const ICONS = [
  { src: "/images/skill-icon-html.png", alt: "HTML5" },
  { src: "/images/skill-icon-css.png", alt: "CSS3" },
  { src: "/images/skill-icon-sass.png", alt: "Sass" },
  { src: "/images/skill-icon-tailwind.png", alt: "Tailwind CSS" },
  { src: "/images/skill-icon-js.png", alt: "JavaScript" },
  { src: "/images/skill-icon-ts.png", alt: "TypeScript" },
  { src: "/images/skill-icon-react.png", alt: "React" },
  { src: "/images/skill-icon-unknown1.png", alt: "기술 아이콘(미확인)" },
  { src: "/images/skill-icon-unknown2.png", alt: "기술 아이콘(미확인)" },
  { src: "/images/skill-icon-nextjs.png", alt: "Next.js" },
];

export default function SkillDetail() {
  return (
    <section id="skill" className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
        {/* 모니터 프레임 */}
        <div className="sketch-box w-full overflow-hidden shadow-[4px_4px_0_0_#111]">
          {/* 타이틀 바 */}
          <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2.5">
            <span className="text-lg font-bold">skill</span>
            <span className="sketch-box flex h-6 w-6 items-center justify-center text-xs">
              ♡
            </span>
          </div>

          <div className="bg-white p-4 sm:p-6">
            {/* 기술 아이콘 한 줄 배치 */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              {ICONS.map((icon) => (
                <div key={icon.alt + icon.src} className="h-9 w-9 sm:h-11 sm:w-11">
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* 브라우저 탭 */}
            <div className="flex items-end gap-1">
              <div className="flex items-center gap-1.5 rounded-t-lg border-2 border-b-0 border-ink bg-white px-3 py-1.5">
                <Image
                  src="/images/skill-icon-ts.png"
                  alt="TypeScript"
                  width={38}
                  height={38}
                  className="h-4 w-4"
                />
                <span className="text-xs font-medium">TypeScript</span>
              </div>
              <div className="h-7 w-16 rounded-t-lg border-2 border-b-0 border-ink bg-[#f4efd8]" />
            </div>

            {/* 주소창 */}
            <div className="border-2 border-ink bg-[#e9e2c7] px-3 py-2">
              <span className="inline-block rounded-full border-2 border-ink bg-white px-4 py-1 text-xs text-gray-600 sm:text-sm">
                https://www.kha.com
              </span>
            </div>

            {/* 콘텐츠 영역 */}
            <div className="min-h-[110px] border-2 border-t-0 border-ink px-4 py-4 sm:min-h-[140px]">
              <p className="text-sm leading-relaxed sm:text-[15px]">
                타입스크립트를 사용하는 이유를 이해하고 타입을 적절하게 지정하며 개발할 수 있어요.
              </p>
            </div>
          </div>
        </div>

        {/* 모니터 받침대 */}
        <div className="relative -mt-[2px] h-8 w-40 border-2 border-t-0 border-ink bg-[#f4efd8] [clip-path:polygon(35%_0,65%_0,90%_100%,10%_100%)] sm:h-10 sm:w-48" />
        <div className="-mt-[2px] h-3 w-64 rounded-full border-2 border-ink bg-[#f4efd8] sm:h-4 sm:w-80" />

        {/* 픽셀 캐릭터 */}
        <div className="relative -mt-6 w-28 self-start sm:-ml-2 sm:w-36">
          <Image
            src="/images/piskel-tired.png"
            alt="헤드폰을 쓰고 지친 표정의 픽셀 캐릭터"
            width={367}
            height={440}
            className="h-auto w-full select-none"
          />
        </div>
      </div>
    </section>
  );
}
