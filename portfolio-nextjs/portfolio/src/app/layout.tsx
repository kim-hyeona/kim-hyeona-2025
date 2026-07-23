import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김현아 | Frontend Developer Portfolio",
  description: "자바스크립트를 좋아하는 프론트엔드 개발자 김현아의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
