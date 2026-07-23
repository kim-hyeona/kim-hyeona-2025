import Image from "next/image";

const STACK = [
  { label: "Language", value: "JavaScript, TypeScript" },
  { label: "Framework / Library", value: "React, Vue" },
  { label: "MarkUp", value: "HTML, CSS, SCSS, tailwindCSS" },
  { label: "Tool", value: "git, github, figma" },
];

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
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="sketch-box px-6 py-6 shadow-[3px_3px_0_0_#111] sm:px-7 sm:py-7">
          <h2 className="mb-5 text-lg font-bold">기술스택</h2>
          <dl className="space-y-3 text-sm sm:text-[15px]">
            {STACK.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5">
                <dt className="font-semibold">{row.label}</dt>
                <dd className="text-gray-700">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="sketch-box px-6 py-6 shadow-[3px_3px_0_0_#111] sm:px-7 sm:py-7">
          <h2 className="mb-5 flex items-center gap-3 text-lg font-bold">
            경력
            <Image
              src="/images/union.png"
              alt=""
              width={363}
              height={280}
              className="h-5 w-auto"
              aria-hidden
            />
          </h2>
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
      </div>
    </section>
  );
}
