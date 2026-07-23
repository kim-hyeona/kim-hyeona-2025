import Image from "next/image";

const SKILLS = [
  { name: "JavaScript", src: "/images/skill-icon-js.png" },
  { name: "TypeScript", src: "/images/skill-icon-ts.png" },
  { name: "React", src: "/images/skill-icon-react.png" },
  { name: "Vue", src: "/images/skill-icon-vue.png" },
  { name: "HTML5", src: "/images/skill-icon-html.png" },
  { name: "CSS3", src: "/images/skill-icon-css.png" },
  { name: "Sass", src: "/images/skill-icon-scss.png" },
  { name: "Tailwind CSS", src: "/images/skill-icon-tailwind.png" },
  { name: "Git", src: "/images/skill-icon-git.png" },
  { name: "GitHub", src: "/images/skill-icon-github.png" },
];

export default function SkillDetail() {
  return (
    <section id="skill" className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
        skill
        <Image
          src="/images/icon-coffee.png"
          alt=""
          width={200}
          height={200}
          className="h-9 w-9"
          aria-hidden
        />
      </h2>

      <div className="relative flex flex-col items-center">
        {/* 모니터 프레임 */}
        <div className="sketch-box w-full max-w-2xl overflow-hidden shadow-[4px_4px_0_0_#111]">
          {/* 브라우저 탭 + 주소창 */}
          <div className="border-b-2 border-ink bg-[#f4efd8]">
            <div className="flex items-end px-4 pt-3">
              <div className="h-6 w-16 rounded-t-lg border-2 border-b-0 border-ink bg-[#f4efd8]" />
              <div className="-ml-1 h-6 w-16 rounded-t-lg border-2 border-b-0 border-ink bg-[#f4efd8]" />
            </div>
            <div className="flex items-center border-t-2 border-ink bg-[#e9e2c7] px-4 py-2">
              <span className="rounded-full border-2 border-ink bg-white px-4 py-1 text-xs text-gray-600 sm:text-sm">
                https://www.kha.com
              </span>
            </div>
          </div>

          {/* 아이콘 그리드 */}
          <div className="grid grid-cols-3 gap-4 bg-white p-6 sm:grid-cols-5 sm:gap-5 sm:p-8">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="sketch-box flex h-14 w-14 items-center justify-center p-2 shadow-[2px_2px_0_0_#111] sm:h-16 sm:w-16">
                  <Image
                    src={s.src}
                    alt={s.name}
                    width={64}
                    height={64}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-medium text-gray-700 sm:text-xs">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 모니터 받침대 */}
        <div className="relative -mt-[2px] h-8 w-40 border-2 border-t-0 border-ink bg-[#f4efd8] [clip-path:polygon(35%_0,65%_0,90%_100%,10%_100%)] sm:h-10 sm:w-48" />
        <div className="-mt-[2px] h-3 w-64 rounded-full border-2 border-ink bg-[#f4efd8] sm:h-4 sm:w-80" />

        {/* 픽셀 캐릭터 */}
        <div className="pointer-events-none absolute -bottom-4 left-0 w-28 sm:-left-4 sm:w-36">
          <Image
            src="/images/piskel-tired.png"
            alt="헤드폰을 쓰고 지친 표정의 픽셀 캐릭터"
            width={367}
            height={440}
            className="h-auto w-full select-none"
          />
        </div>
      </div>

      <p className="sr-only">
        Language: JavaScript, TypeScript / Framework·Library: React, Vue /
        MarkUp: HTML, CSS, SCSS, tailwindCSS / Tool: git, github
      </p>
    </section>
  );
}
