import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-10 sm:pt-24">
      {/* 장식 스파클 */}
      <span className="absolute left-[6%] top-[38%] text-3xl">✦</span>
      <span className="absolute left-[4%] top-[46%] text-xl">✦</span>

      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {/* 인사말 말풍선 */}
        <div className="relative ml-auto w-full max-w-xl">
          <div className="sketch-box px-6 py-4 shadow-[3px_3px_0_0_#111]">
            <div className="mb-1 flex justify-end text-sm">♡</div>
            <p className="text-lg font-bold leading-relaxed sm:text-xl">
              클릭해주셔서 감사합니다. 👋
              <br />
              자바스크립트를 좋아하는 프론트엔드 개발자 김현아입니다
            </p>
          </div>

          <div className="sketch-box mt-3 ml-auto w-[92%] px-6 py-4 shadow-[3px_3px_0_0_#111]">
            <div className="mb-1 flex justify-end text-sm">♡</div>
            <ul className="space-y-1.5 text-sm leading-relaxed sm:text-[15px]">
              <li>• 늘 성능을 고려한 개발을 위해 고민합니다</li>
              <li>• 최적의 UI/UX를 위해 항상 공부하고 노력합니다</li>
              <li>• 팀워크를 위해 정확한 의사전달과 친절한 소통방식을 지향합니다!</li>
            </ul>
          </div>
        </div>

        {/* 픽셀 캐릭터 */}
        <div className="pointer-events-none absolute -left-2 top-16 w-40 sm:w-56">
          <Image
            src="/images/piskel.png"
            alt="헤드폰을 쓴 픽셀 캐릭터 일러스트"
            width={380}
            height={420}
            className="h-auto w-full select-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
