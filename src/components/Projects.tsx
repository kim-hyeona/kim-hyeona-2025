import Image from "next/image";

const PROJECTS = [
  {
    title: "타로 운세",
    labelImg: "/images/proj-tarot.png",
    labelSize: { w: 162, h: 33 },
    desc: "웹디자이너와 피그마를 통해 협업할 수 있어요!",
    bg: "/images/group19.png",
    pos: "sm:left-[26%] sm:top-0 sm:z-20",
  },
  {
    title: "리팩토링",
    tag: "/images/topstar.png",
    tagSize: { w: 67, h: 18 },
    labelImg: "/images/proj-refactor.png",
    labelSize: { w: 151, h: 33 },
    desc: "과거에 만들었던 프로젝트의 성능을 보완해보았어요!",
    cardClass: "bg-pink-100",
    thumb: "/images/group24.png",
    thumbSize: { w: 296, h: 247 },
    pos: "sm:left-0 sm:top-[8%] sm:z-10",
  },
  {
    title: "링고챗",
    labelImg: "/images/proj-bathroom.png",
    labelSize: { w: 207, h: 33 },
    desc: "API를 이용해 데이터를 가져오고 화면단을 개발할 수 있어요. 타 계열 개발자들과 협업할 수 있어요!",
    cardClass: "bg-[#8d7f78] text-white",
    pos: "sm:left-[58%] sm:top-[46%] sm:z-30",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24"
    >
      <h2 className="mb-10 flex items-center gap-3 text-3xl font-bold">
        project <span aria-hidden className="text-xl">✦</span>
        <Image
          src="/images/icon-headphone.png"
          alt=""
          width={300}
          height={300}
          className="ml-2 h-10 w-10 -rotate-12"
          aria-hidden
        />
      </h2>

      {/* 모바일: 세로 스택 / 데스크탑: 원본처럼 겹치는 콜라주 배치 */}
      <div className="flex flex-col gap-8 sm:relative sm:block sm:h-[560px] sm:gap-0">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className={`sketch-box flex w-full flex-col overflow-hidden shadow-[4px_4px_0_0_#111] sm:absolute sm:w-72 ${p.pos}`}
          >
            <div className="flex items-center justify-between gap-2 border-b-2 border-ink bg-white px-4 py-3">
              <div className="flex items-center gap-2">
                <Image
                  src={p.labelImg}
                  alt={p.title}
                  width={p.labelSize.w}
                  height={p.labelSize.h}
                  className="h-auto w-auto max-w-[110px]"
                />
                {p.tag && (
                  <Image
                    src={p.tag}
                    alt=""
                    width={p.tagSize!.w}
                    height={p.tagSize!.h}
                    className="h-auto w-auto opacity-60"
                    aria-hidden
                  />
                )}
              </div>
              <span className="sketch-btn shrink-0">바로가기</span>
            </div>

            <div
              className={`relative flex h-44 items-center justify-center ${p.cardClass ?? ""}`}
            >
              {p.bg && (
                <Image
                  src={p.bg}
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
              )}

              <div className="relative">
                {p.thumb ? (
                  <Image
                    src={p.thumb}
                    alt={`${p.title} 썸네일`}
                    width={p.thumbSize!.w}
                    height={p.thumbSize!.h}
                    className="h-32 w-auto object-contain"
                  />
                ) : p.title === "링고챗" ? (
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/icon-map.png"
                      alt=""
                      width={400}
                      height={400}
                      className="h-16 w-16 rounded-lg border-2 border-white/60 object-cover"
                      aria-hidden
                    />
                    <Image
                      src="/images/icon-toilet.png"
                      alt=""
                      width={200}
                      height={200}
                      className="h-12 w-12"
                      aria-hidden
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <p className="flex-1 bg-white px-4 py-4 text-[13px] leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
