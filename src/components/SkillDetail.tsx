import Image from "next/image";

export default function SkillDetail() {
  return (
    <section id="skill" className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/images/profile.png"
          alt="skill: 사용 기술 아이콘(JavaScript, TypeScript, HTML, CSS, Sass, Tailwind, React, Vue, Next.js)과 TypeScript 설명 - 타입스크립트를 사용하는 이유를 이해하고 타입을 적절하게 지정하며 개발할 수 있어요."
          width={1282}
          height={1564}
          className="h-auto w-full select-none"
        />
        <p className="sr-only">
          Language: JavaScript, TypeScript / Framework·Library: React, Vue /
          MarkUp: HTML, CSS, SCSS, tailwindCSS / Tool: git, github, figma
        </p>
      </div>
    </section>
  );
}
