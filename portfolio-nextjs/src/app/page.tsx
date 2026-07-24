import Image from "next/image";
import { PixelWindow } from "@/components/PixelWindow";
import { SkillPanel } from "@/components/SkillPanel";
import { ToiletCard } from "@/components/ToiletCard";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`twinkle text-[var(--ink)] ${className}`}
    >
      <path
        d="M12 2l1.8 6.6L20 10l-6.2 1.4L12 18l-1.8-6.6L4 10l6.2-1.4L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeadphoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 26v-3a16 16 0 0 1 32 0v3"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect x="5" y="24" width="9" height="14" rx="3" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="34" y="24" width="9" height="14" rx="3" stroke="var(--ink)" strokeWidth="2.5" />
    </svg>
  );
}

const PROJECTS = [
  {
    id: "topstar",
    title: "topstar",
    label: "#리팩토링",
    caption: "뮤직이즈마이라이프",
    image: "/assets/project-topstar.png",
    href: "#",
  },
  {
    id: "tarot",
    title: "tarot",
    label: "#타로 운세",
    image: "/assets/project-tarot.png",
    href: "#",
  },
];

const WORK_HISTORY = [
  {
    company: "MEVER",
    role: "AI 번역 사이트 프로젝트 (프리랜서)",
    period: "23.03.01 ~ 23.04.20",
  },
  {
    company: "SNC 정보기술",
    role: "AI 스마트 정수장 프로젝트 ( ~ 24. 03. 14)",
    period: "23.09.01 ~ 24.04.30",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-32 pt-14 sm:px-8">
      {/* HERO */}
      <section id="top" className="relative">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end">
          <div className="float-anim shrink-0">
            <Image
              src="/assets/bunny-hero.gif"
              alt="헤드폰을 쓴 픽셀 토끼 캐릭터"
              width={190}
              height={238}
              unoptimized
              priority
            />
          </div>

          <div className="flex w-full flex-col gap-4">
            <PixelWindow title="">
              <div className="px-5 py-4">
                <p className="text-base font-bold leading-relaxed sm:text-lg">
                  클릭해주셔서 감사합니다. 👋
                </p>
                <p className="text-base font-bold leading-relaxed sm:text-lg">
                  자바스크립트를 좋아하는 프론트엔드 개발자 김현아입니다
                </p>
              </div>
            </PixelWindow>

            <PixelWindow title="" className="self-end sm:w-[92%]">
              <ul className="space-y-1.5 px-5 py-4 text-sm leading-relaxed sm:text-[15px]">
                <li>• 늘 성능을 고려한 개발을 위해 고민합니다</li>
                <li>• 최적의 UI/UX를 위해 항상 공부하고 노력합니다</li>
                <li>• 팀워크를 위해 정확한 의사전달과 친절한 소통방식을 지향합니다!</li>
              </ul>
            </PixelWindow>
          </div>
        </div>

        {/* quick nav */}
        <nav
          aria-label="섹션 바로가기"
          className="pixel-window mt-8 flex w-fit items-center gap-1 self-center sm:absolute sm:right-0 sm:top-0 sm:mt-0"
        >
          <div className="pixel-window-titlebar w-full px-3 py-1 text-center text-xs font-semibold">
            remote
          </div>
          <div className="flex gap-1 p-2">
            {[
              { href: "#skill", label: "skills" },
              { href: "#project", label: "project" },
              { href: "#work", label: "work" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-[var(--ink)] px-3 py-1 text-[11px] font-medium hover:bg-[var(--ink)] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* PROJECT */}
      <section id="project" className="mt-28 scroll-mt-10">
        <div className="relative mb-8 flex items-center gap-3">
          <Sparkle className="h-5 w-5" />
          <h2 className="font-display text-4xl font-semibold italic sm:text-5xl">project</h2>
          <HeadphoneIcon className="h-9 w-9 opacity-80" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <PixelWindow key={p.id} title={p.title} href={p.href}>
              <div className="p-4">
                {p.label && <p className="mb-3 text-sm font-bold">{p.label}</p>}
                <div className="relative aspect-[4/3.4] w-full overflow-hidden border border-[var(--ink)]/10">
                  <Image src={p.image} alt={`${p.title} 프로젝트 스크린샷`} fill className="object-cover" />
                </div>
                {p.caption && (
                  <p className="mt-3 text-center text-xs text-[var(--ink)]/60">{p.caption}</p>
                )}
              </div>
            </PixelWindow>
          ))}

          <div className="sm:col-span-2 sm:mx-auto sm:w-[60%]">
            <ToiletCard href="#" />
          </div>
        </div>
      </section>

      {/* SKILL */}
      <section id="skill" className="mt-28 scroll-mt-10">
        <PixelWindow title="skill">
          <SkillPanel />
        </PixelWindow>
      </section>

      {/* WORK */}
      <section id="work" className="mt-28 scroll-mt-10">
        <div className="mb-6 flex items-center gap-3">
          <Image src="/assets/coffee-small.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
          <h2 className="font-display text-4xl font-semibold italic sm:text-5xl">work</h2>
          <Image src="/assets/ears.png" alt="" width={44} height={58} className="h-14 w-11 object-contain opacity-80" />
        </div>

        <PixelWindow title="work history">
          <ul className="divide-y divide-[var(--ink)]/10 px-5 py-2">
            {WORK_HISTORY.map((w) => (
              <li key={w.company} className="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:items-center sm:gap-3 sm:text-[15px]">
                <span className="font-bold">{w.company}</span>
                <span className="hidden text-[var(--ink)]/30 sm:inline">|</span>
                <span>{w.role}</span>
                <span className="hidden text-[var(--ink)]/30 sm:inline">|</span>
                <span className="text-[var(--ink)]/60">{w.period}</span>
              </li>
            ))}
          </ul>
        </PixelWindow>
      </section>
    </main>
  );
}
