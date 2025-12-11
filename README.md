# Trust Holdem Landing Page

트러스트홀덤 랜딩 페이지 - React + TypeScript

## 프로젝트 구조

```
src/
├── components/
│   ├── Header/           # 헤더 (로고, 네비게이션, 배너)
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── HeroSection/      # 히어로 섹션 (프로모션 이미지)
│   │   ├── HeroSection.tsx
│   │   └── HeroSection.css
│   ├── UserPanel/        # 유저 패널 (골드 잔액, 금고)
│   │   ├── UserPanel.tsx
│   │   └── UserPanel.css
│   └── TableList/        # 테이블 목록 (게임방 리스트)
│       ├── TableList.tsx
│       └── TableList.css
├── styles/
│   └── global.css        # 전역 스타일, CSS 변수
├── App.tsx               # 메인 앱 컴포넌트
├── App.css               # 앱 레이아웃 스타일
└── index.tsx             # 엔트리 포인트
```

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 기술 스택

- React 19.2
- TypeScript
- Vite 7
- Tailwind CSS 4
- Google Fonts (Noto Sans KR)

## 주요 컴포넌트

1. **Header** - 상단 배너 메시지, 로고, 네비게이션 메뉴
2. **HeroSection** - 프로모션 텍스트와 이미지 영역
3. **UserPanel** - 유저 골드 정보, 금고 입출금 기능
4. **TableList** - 게임 테이블 목록 및 입장/관전 버튼

## CSS 변수

`src/styles/global.css`에서 테마 색상을 관리합니다:

- `--primary-gold`: 메인 골드 색상
- `--bg-dark`: 배경 어두운 색
- `--bg-card`: 카드 배경
- `--text-primary`: 기본 텍스트
- `--text-secondary`: 보조 텍스트
