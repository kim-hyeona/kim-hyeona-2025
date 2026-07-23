import Image from "next/image";

const CAREER = [
  {
    company: "MEVER",
    role: "AI 번역 사이트 프로젝트 (프리랜서)",
    period: "23.03.01 ~ 23.04.20",
  },
  {
    company: "SNC정보기술",
    role: "스마트 정수장 프로젝트",
    period: "23.09.01 ~ 24.03.14",
  },
];

// work-frame.png(1460x559) 실측: 사각형 상단 평평한 선이 시작되는 지점 = 전체 높이의 41.9%
const FRAME_W = 1460;
const FRAME_H = 559;
const FLAT_TOP_RATIO = 234 / FRAME_H;

export default function TechStack() {
  return (
    <section id="work" className="mx-auto w-full max-w-5xl px-6 py-8 sm:px-10 sm:py-10">
      <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
        work
        <Image
          src="/images/icon-coffee.png"
          alt=""
          width={200}
          height={200}
          className="h-14 w-14 sm:h-16 sm:w-16"
          aria-hidden
        />
      </h2>

      {/* 원본 에셋(work-frame.png)을 그대로 배경으로 쓰고, 그 위에 텍스트만 얹음 */}
      <div
        className="relative mx-auto w-full max-w-2xl"
        style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}` }}
      >
        <Image
          src="/images/work-frame.png"
          alt=""
          fill
          className="select-none object-contain object-top"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col justify-center gap-3 px-8 sm:px-10"
          style={{ top: `${FLAT_TOP_RATIO * 100}%` }}
        >
          <ul className="space-y-3 text-sm sm:text-[15px]">
            {CAREER.map((job) => (
              <li key={job.company}>
                <p className="font-semibold">
                  {job.company} | {job.role}
                </p>
                <p className="text-gray-600">{job.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
