# 김현아 포트폴리오

Next.js 14 (App Router) + TypeScript + Tailwind CSS로 만든 포트폴리오 페이지입니다.

## 실행 방법

```bash
npm install
npm run dev
```

http://localhost:3000 접속

## 배포

```bash
npm run build
npm run start
```

Vercel에 그대로 올려도 됩니다 (설정 파일 그대로 사용 가능).

## 구조

- `src/app/page.tsx` — 메인 페이지 (히어로 / project / skill / work 섹션)
- `src/components/PixelWindow.tsx` — 픽셀 창 스타일 wrapper (제목바 + 하트/바로가기 버튼)
- `src/components/SkillPanel.tsx` — 스킬 아이콘 클릭 시 설명 패널 전환 (클라이언트 컴포넌트)
- `src/components/ToiletCard.tsx` — 화장실 지도 카드 hover 시 설명 오버레이 (클라이언트 컴포넌트)
- `public/assets/` — 업로드해주신 Figma export 에셋 전부 (bunny gif/png, 프로젝트 스크린샷, 스킬 아이콘 등)

## 수정이 필요한 부분

- `PROJECTS`, `WORK_HISTORY` 배열 (`src/app/page.tsx`)과 `SKILLS` 배열 (`src/components/SkillPanel.tsx`) 안의 `href` / `url` 값이 전부 `#` 또는 `https://www.kha.com` placeholder입니다. 실제 프로젝트 링크로 교체하세요.
- 스킬 9개 중 아이콘 모양만 보고 이름을 추정한 것들(GraphQL, styled-components 등)이 있습니다. 실제 사용 스택과 다르면 `src/components/SkillPanel.tsx`의 `name`/`desc` 수정하세요.
- next.js 아이콘(N)은 첨부해주신 zip에 개별 에셋이 없어서 스킬 목록에서 뺐습니다. 넣으실 거면 아이콘 추가 후 배열에 항목 추가하면 됩니다.
