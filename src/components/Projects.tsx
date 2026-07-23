import Image from "next/image";

const PROJECTS = [
  {
    title: "타로 운세",
    tag: "#타로 운세",
    desc: "웹디자이너와 피그마를 통해 협업할 수 있어요!",
    cardClass:
      "bg-gradient-to-b from-pink-100 via-pink-300 to-fuchsia-500 text-black",
    art: "cards",
  },
  {
    title: "리팩토링",
    tag: "#리팩토링",
    desc: "과거에 만들었던 프로젝트의 성능을 보완해보았어요!",
    cardClass: "bg-pink-100 text-black",
    art: "grid",
  },
  {
    title: "링고챗",
    tag: "#링고챗",
    desc: "API를 이용해 데이터를 가져오고 화면단을 개발할 수 있어요. 타 계열 개발자들과 협업할 수 있어요!",
    cardClass: "bg-[#8d7f78] text-white",
    art: "map",
  },
];

export default function Projects() {
  return (
    <section id="project" className="px-4 pb-24 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold">
          project <span aria-hidden className="text-xl">✦</span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="sketch-box overflow-hidden shadow-[3px_3px_0_0_#111]"
            >
              <div className="flex items-center justify-between border-b-2 border-ink px-3 py-2 text-xs font-semibold">
                <span>{p.tag}</span>
                <span className="sketch-btn !py-1">바로가기</span>
              </div>

              <div
                className={`relative flex h-40 items-center justify-center ${p.cardClass}`}
              >
                {p.art === "cards" && (
                  <div className="flex gap-2">
                    <div className="h-24 w-14 -rotate-12 rounded-md border-2 border-black bg-indigo-400" />
                    <div className="h-28 w-16 rounded-md border-2 border-black bg-indigo-500" />
                    <div className="h-24 w-14 rotate-12 rounded-md border-2 border-black bg-indigo-400" />
                    <span className="absolute left-4 top-3 text-pink-500">
                      ♥
                    </span>
                    <span className="absolute right-4 bottom-3 text-pink-500">
                      ♥
                    </span>
                  </div>
                )}
                {p.art === "grid" && (
                  <Image
                    src="/images/group24.png"
                    alt="리팩토링 프로젝트 썸네일"
                    width={220}
                    height={140}
                    className="h-28 w-auto object-contain opacity-90"
                  />
                )}
                {p.art === "map" && (
                  <span className="text-5xl">🗺️💬</span>
                )}
              </div>

              <p className="px-3 py-3 text-[13px] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
