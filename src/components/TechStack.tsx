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

export default function TechStack() {
  return (
    <section id="work" className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold">
        work
        <Image
          src="/images/icon-coffee.png"
          alt=""
          width={200}
          height={200}
          className="h-10 w-10"
          aria-hidden
        />
        <Image
          src="/images/union.png"
          alt=""
          width={363}
          height={280}
          className="ml-auto hidden h-10 w-auto sm:block"
          aria-hidden
        />
      </h2>

      <div className="sketch-box max-w-2xl px-6 py-6 shadow-[3px_3px_0_0_#111] sm:px-8 sm:py-7">
        <ul className="space-y-4 text-sm sm:text-[15px]">
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
    </section>
  );
}
