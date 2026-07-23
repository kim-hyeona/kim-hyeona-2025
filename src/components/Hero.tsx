import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-16">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
        {/* 픽셀 캐릭터 (배경 없이, 원본처럼 그냥 얹혀있는 형태) */}
        <div className="mx-auto w-40 shrink-0 pt-2 sm:mx-0 sm:w-48">
          <Image
            src="/images/piskel.png"
            alt="헤드폰을 쓴 픽셀 캐릭터"
            width={367}
            height={440}
            className="h-auto w-full select-none"
            priority
          />
        </div>

        {/* 텍스트 말풍선: 폭 줄이고, 두 번째 박스가 첫 번째 위로 살짝 겹치게 */}
        <div className="relative w-full sm:w-auto sm:max-w-sm">
          <div className="sketch-box relative z-10 px-6 py-4 shadow-[3px_3px_0_0_#111] sm:px-7 sm:py-5">
            <div className="mb-1 flex justify-end">
              <span className="sketch-box flex h-6 w-6 items-center justify-center text-xs">♡</span>
            </div>
            <p className="text-lg font-bold leading-relaxed sm:text-xl">
              클릭해주셔서 감사합니다. <span className="text-2xl">👋</span>
              <br />
              자바스크립트를 좋아하는 프론트엔드 개발자 김현아입니다
            </p>
          </div>

          <div className="sketch-box relative z-20 -mt-4 ml-6 px-6 py-4 shadow-[3px_3px_0_0_#111] sm:-mt-6 sm:ml-10 sm:px-7 sm:py-5">
            <div className="mb-1 flex justify-end">
              <span className="sketch-box flex h-6 w-6 items-center justify-center text-xs">♡</span>
            </div>
            <ul className="space-y-2 text-sm leading-relaxed sm:text-[15px]">
              <li>• 늘 성능을 고려한 개발을 위해 고민합니다</li>
              <li>• 최적의 UI/UX를 위해 항상 공부하고 노력합니다</li>
              <li>• 팀워크를 위해 정확한 의사전달과 친절한 소통방식을 지향합니다!</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
