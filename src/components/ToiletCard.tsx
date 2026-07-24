"use client";

import Image from "next/image";
import { useState } from "react";
import { PixelWindow } from "./PixelWindow";

export function ToiletCard({ href }: { href?: string }) {
  const [hover, setHover] = useState(false);

  return (
    <PixelWindow title="# 화장실 지도" href={href} className="w-full">
      <div
        className="relative aspect-[4/3.4] w-full overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src="/assets/project-toilet.png"
          alt="화장실 지도 프로젝트 스크린샷"
          fill
          className="object-cover"
        />
        <div
          className={`absolute inset-0 flex items-end bg-[var(--ink)]/70 p-4 transition-opacity duration-200 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-sm font-bold leading-relaxed text-white">
            API를 이용해 데이터를 가져오고 화면단을 개발할 수 있어요
          </p>
        </div>
      </div>
    </PixelWindow>
  );
}
