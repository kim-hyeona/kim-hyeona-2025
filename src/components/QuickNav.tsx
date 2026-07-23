import Image from "next/image";

export default function QuickNav() {
  return (
    <a
      href="#skill"
      className="fixed right-4 top-6 z-30 w-[104px] drop-shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5 sm:right-8 sm:w-[120px]"
      aria-label="빠른 이동: skills, project, work"
    >
      <Image
        src="/images/group23.png"
        alt="remote 퀵 네비게이션 카드: skills, project, work"
        width={194}
        height={261}
        className="h-auto w-full select-none"
        priority
      />
    </a>
  );
}
