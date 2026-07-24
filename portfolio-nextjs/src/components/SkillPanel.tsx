"use client";

import Image from "next/image";
import { useState } from "react";

type Skill = {
  id: string;
  name: string;
  icon: string;
  url: string;
  desc: string;
};

const SKILLS: Skill[] = [
  {
    id: "html",
    name: "HTML5",
    icon: "/assets/skill-html.png",
    url: "https://www.kha.com",
    desc: "시맨틱 마크업으로 의미와 구조를 갖춘 웹 문서를 작성할 수 있어요.",
  },
  {
    id: "css",
    name: "CSS3",
    icon: "/assets/skill-css.png",
    url: "https://www.kha.com",
    desc: "Flexbox와 Grid를 활용해 반응형 레이아웃을 구성할 수 있어요.",
  },
  {
    id: "sass",
    name: "Sass",
    icon: "/assets/skill-sass.png",
    url: "https://www.kha.com",
    desc: "변수와 믹스인을 활용해 재사용 가능한 스타일을 설계할 수 있어요.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "/assets/skill-tailwind.png",
    url: "https://www.kha.com",
    desc: "유틸리티 클래스로 빠르고 일관된 UI를 구현할 수 있어요.",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: "/assets/skill-js.png",
    url: "https://www.kha.com",
    desc: "비동기 처리와 DOM 조작을 이해하고 동적인 화면을 구현할 수 있어요.",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: "/assets/skill-ts.png",
    url: "https://www.kha.com",
    desc: "타입스크립트를 사용하는 이유를 이해하고 타입을 적절하게 지정하며 개발할 수 있어요.",
  },
  {
    id: "react",
    name: "React",
    icon: "/assets/skill-react.png",
    url: "https://www.kha.com",
    desc: "컴포넌트 단위로 상태와 라이프사이클을 관리하며 UI를 구성할 수 있어요.",
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: "/assets/skill-flower.png",
    url: "https://www.kha.com",
    desc: "필요한 데이터만 정확히 요청하는 쿼리를 설계할 수 있어요.",
  },
  {
    id: "styled",
    name: "styled-components",
    icon: "/assets/skill-s.png",
    url: "https://www.kha.com",
    desc: "컴포넌트 단위로 스타일을 캡슐화해 유지보수하기 쉬운 CSS를 작성할 수 있어요.",
  },
];

export function SkillPanel() {
  const [activeId, setActiveId] = useState(SKILLS[5].id); // default: TypeScript, matches reference mockup
  const active = SKILLS.find((s) => s.id === activeId)!;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5 border-b-2 border-[var(--ink)] px-4 py-4 sm:gap-3 sm:px-5">
        {SKILLS.map((s) => {
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              aria-pressed={isActive}
              aria-label={s.name}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-transform sm:h-10 sm:w-10 ${
                isActive
                  ? "border-[var(--ink)] scale-110 bg-white shadow-[3px_3px_0_rgba(28,36,48,0.85)]"
                  : "border-transparent hover:scale-105"
              }`}
            >
              <Image src={s.icon} alt={s.name} width={28} height={28} className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
            </button>
          );
        })}
      </div>

      <div className="p-4 sm:p-5">
        <div className="overflow-hidden rounded-t-md border-2 border-[var(--ink)]">
          <div className="flex items-center gap-2 border-b border-[var(--ink)] bg-[#e9edf2] px-3 py-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <Image src={active.icon} alt="" width={16} height={16} className="h-3.5 w-3.5 object-contain" />
            </span>
            <span className="text-xs font-medium text-[var(--ink)]/80">{active.name}</span>
            <span className="ml-auto text-[11px] text-[var(--ink)]/40">클릭하면 넘어감</span>
          </div>
          <div className="border-b border-[var(--ink)] bg-white px-3 py-1.5">
            <span className="text-xs text-[var(--ink)]/60">{active.url}</span>
          </div>
        </div>
        <div className="min-h-[96px] border-2 border-t-0 border-[var(--ink)] bg-white p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-[var(--ink)]">{active.desc}</p>
        </div>
      </div>
    </div>
  );
}
