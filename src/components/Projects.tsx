import Image from "next/image";

type Project = {
  key: string;
  headerTitle: string; // 카드 상단 바 제목 (실제 프로젝트 코드네임)
  hashtagImg: string; // 카드 본문 상단 "#해시태그" 텍스트 이미지
  hashtagSize: { w: number; h: number };
  desc: string;
  pos: string;
};

const PROJECTS: Project[] = [
  {
    key: "tarot",
    headerTitle: "tarot",
    hashtagImg: "/images/proj-tarot.png",
    hashtagSize: { w: 162, h: 33 },
    desc: "웹디자이너와 피그마를 통해 협업할 수 있어요!",
    pos: "sm:left-[26%] sm:top-0 sm:z-20",
  },
  {
    key: "topstar",
    headerTitle: "topstar",
    hashtagImg: "/images/proj-refactor.png",
    hashtagSize: { w: 151, h: 33 },
    desc: "과거에 만들었던 프로젝트의 성능을 보완해보았어요!",
    pos: "sm:left-0 sm:top-[8%] sm:z-10",
  },
  {
    key: "lingochat",
    headerTitle: "링고챗",
    hashtagImg: "/images/proj-bathroom.png",
    hashtagSize: { w: 207, h: 33 },
    desc: "API를 이용해 데이터를 가져오고 화면단을 개발할 수 있어요. 타 계열 개발자들과 협업할 수 있어요!",
    pos: "sm:left-[58%] sm:top-[46%] sm:z-30",
  },
];

function CardHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b-2 border-ink bg-white px-4 py-3">
      <span className="text-sm font-semibold">{title}</span>
      <div className="flex items-center gap-2">
        <span className="sketch-btn shrink-0">바로가기</span>
        <Image
          src="/images/github.png"
          alt=""
          width={50}
          height={50}
          className="h-6 w-6 rounded-full"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="project"
      className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 sm:py-12"
    >
      <h2 className="relative mb-6 flex items-center gap-3 text-3xl font-bold">
        project <span aria-hidden className="text-xl">✦</span>
        <Image
          src="/images/icon-headphone.png"
          alt=""
          width={300}
          height={300}
          className="ml-2 h-14 w-14 -rotate-12 sm:h-16 sm:w-16"
          aria-hidden
        />
        <span aria-hidden className="absolute -bottom-6 left-1 text-base">✦</span>
      </h2>

      {/* 모바일: 세로 스택 / 데스크탑: 원본처럼 겹치는 콜라주 배치 */}
      <div className="flex flex-col gap-8 sm:relative sm:block sm:h-[480px] sm:gap-0">
        {/* tarot */}
        <div
          className={`sketch-box w-full overflow-hidden shadow-[4px_4px_0_0_#111] sm:absolute sm:w-72 ${PROJECTS[0].pos}`}
        >
          <CardHeader title={PROJECTS[0].headerTitle} />
          <div className="relative flex h-40 flex-col overflow-hidden">
            <Image
              src="/images/group19.png"
              alt=""
              fill
              className="object-cover"
              aria-hidden
            />
            <div className="relative flex justify-end px-3 pt-2">
              <Image
                src={PROJECTS[0].hashtagImg}
                alt={PROJECTS[0].headerTitle}
                width={PROJECTS[0].hashtagSize.w}
                height={PROJECTS[0].hashtagSize.h}
                className="h-auto w-auto max-w-[130px]"
              />
            </div>
            <span aria-hidden className="absolute left-4 top-8 text-lg">💗</span>
            <span aria-hidden className="absolute right-6 top-16 text-base">💗</span>
            <span aria-hidden className="absolute bottom-10 left-2 text-lg">💗</span>
            <span aria-hidden className="absolute bottom-8 left-1/2 text-base">💗</span>
            <span aria-hidden className="absolute bottom-6 right-4 text-lg">💗</span>
          </div>
          <p className="flex-1 bg-white px-4 py-4 text-[13px] leading-relaxed">
            {PROJECTS[0].desc}
          </p>
        </div>

        {/* topstar / 리팩토링 */}
        <div
          className={`sketch-box w-full overflow-hidden shadow-[4px_4px_0_0_#111] sm:absolute sm:w-72 ${PROJECTS[1].pos}`}
        >
          <CardHeader title={PROJECTS[1].headerTitle} />
          <div className="flex flex-col gap-2 px-4 pt-3">
            <Image
              src={PROJECTS[1].hashtagImg}
              alt={PROJECTS[1].headerTitle}
              width={PROJECTS[1].hashtagSize.w}
              height={PROJECTS[1].hashtagSize.h}
              className="h-auto w-auto max-w-[130px]"
            />
            <div className="flex flex-col items-center gap-1 bg-pink-100 px-3 py-3">
              <span className="text-xs font-medium">뮤직이즈마이라이프</span>
              <Image
                src="/images/group24.png"
                alt="반복되는 토끼 아이콘 그리드"
                width={296}
                height={247}
                className="h-auto w-40"
              />
            </div>
          </div>
          <p className="flex-1 bg-white px-4 py-4 text-[13px] leading-relaxed">
            {PROJECTS[1].desc}
          </p>
        </div>

        {/* 링고챗 / 화장실 지도 */}
        <div
          className={`sketch-box w-full overflow-hidden shadow-[4px_4px_0_0_#111] sm:absolute sm:w-72 ${PROJECTS[2].pos}`}
        >
          <CardHeader title={PROJECTS[2].headerTitle} />
          <div className="flex flex-col gap-2 bg-pink-100 px-4 pt-3">
            <Image
              src={PROJECTS[2].hashtagImg}
              alt={PROJECTS[2].headerTitle}
              width={PROJECTS[2].hashtagSize.w}
              height={PROJECTS[2].hashtagSize.h}
              className="h-auto w-auto max-w-[160px]"
            />
            <div className="flex items-center justify-center py-2">
              <Image
                src="/images/group26.png"
                alt="세계지도, 변기, 헤드폰 쓴 토끼 캐릭터"
                width={744}
                height={626}
                className="h-auto w-full max-w-[220px]"
              />
            </div>
          </div>
          <p className="flex-1 bg-white px-4 py-4 text-[13px] leading-relaxed">
            {PROJECTS[2].desc}
          </p>
        </div>
      </div>
    </section>
  );
}
