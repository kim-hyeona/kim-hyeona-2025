import Image from "next/image";

export default function SkillDetail() {
  return (
    <section id="skill" className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <h2 className="mb-8 text-3xl font-bold">skill</h2>
      <div className="mx-auto w-full max-w-xl">
        <Image
          src="/images/profile.png"
          alt="skill 모니터 화면: 사용 기술 아이콘과 TypeScript 설명 (타입스크립트를 사용하는 이유를 이해하고 타입을 적절하게 지정하며 개발할 수 있어요)"
          width={1282}
          height={1564}
          className="h-auto w-full select-none"
        />
      </div>
    </section>
  );
}
