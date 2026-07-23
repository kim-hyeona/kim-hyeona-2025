import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32">
      <div className="grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8">
        {/* 텍스트 말풍선 */}
        <div className="flex flex-col gap-4">
          <div className="sketch-box px-6 py-4 shadow-[3px_3px_0_0_#111] sm:px-7 sm:py-5">
            <div className="mb-1 flex justify-end text-sm">♡</div>
            <p className="text-lg font-bold leading-relaxed sm:text-xl">
              클릭해주셔서 감사합니다. 👋
              <br />
              자바스크립트를 좋아하는 프론트엔드 개발자 김현아입니다
            </p>
          </div>

          <div className="sketch-box px-6 py-4 shadow-[3px_3px_0_0_#111] sm:px-7 sm:py-5">
            <div className="mb-1 flex justify-end text-sm">♡</div>
            <ul className="space-y-2 text-sm leading-relaxed sm:text-[15px]">
              <li>• 늘 성능을 고려한 개발을 위해 고민합니다</li>
              <li>• 최적의 UI/UX를 위해 항상 공부하고 노력합니다</li>
              <li>• 팀워크를 위해 정확한 의사전달과 친절한 소통방식을 지향합니다!</li>
            </ul>
          </div>
        </div>

        {/* 일러스트 */}
        <div className="relative mx-auto w-full max-w-[340px] sm:max-w-none">
          <Image
            src="/images/group19.png"
            alt="책상에 앉아 작업하는 사람 일러스트"
            width={773}
            height={566}
            className="h-auto w-full select-none"
            priority
          />
          <Image
            src="/images/piskel.png"
            alt="헤드폰을 쓴 픽셀 캐릭터"
            width={367}
            height={440}
            className="absolute -bottom-8 -left-6 h-auto w-24 select-none sm:w-32"
          />
        </div>
      </div>
    </section>
  );
}
