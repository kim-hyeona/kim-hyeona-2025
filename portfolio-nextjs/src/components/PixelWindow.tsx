import { ReactNode } from "react";

function CatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="#1c2430" />
      <path
        d="M5 6.5c0-.8.6-1.5 1.4-1.5.4 0 .8.2 1 .5.2-.3.6-.5 1-.5.4 0 .8.2 1 .5.2-.3.6-.5 1-.5.8 0 1.4.7 1.4 1.5 0 2-1.6 3.8-3.6 3.8H8.6C6.6 10.3 5 8.5 5 6.5Z"
        fill="#fff"
      />
      <circle cx="6.6" cy="6.8" r="0.6" fill="#1c2430" />
      <circle cx="9.4" cy="6.8" r="0.6" fill="#1c2430" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 13.8s-5.6-3.4-5.6-7.2c0-1.8 1.4-3.2 3.2-3.2 1 0 1.9.5 2.4 1.3.5-.8 1.4-1.3 2.4-1.3 1.8 0 3.2 1.4 3.2 3.2 0 3.8-5.6 7.2-5.6 7.2Z"
        stroke="#1c2430"
        strokeWidth="1.1"
      />
    </svg>
  );
}

export function PixelWindow({
  title,
  href,
  className = "",
  children,
}: {
  title: string;
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`pixel-window ${className}`}>
      <div className="pixel-window-titlebar flex items-center justify-between gap-2 px-3 py-1.5">
        <span className="text-xs font-semibold tracking-tight text-[var(--ink)]">{title}</span>
        <div className="flex items-center gap-2">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full border border-[var(--ink)] bg-white px-2 py-0.5 text-[11px] font-medium hover:bg-[var(--ink)] hover:text-white transition-colors"
            >
              바로가기
            </a>
          )}
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--ink)] bg-white">
            {href ? <CatIcon /> : <HeartIcon />}
          </span>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
