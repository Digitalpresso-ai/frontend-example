# Design System 명세

> `@repo/design-tokens` 기반, Tamagui v2로 구성된 크로스 플랫폼 디자인 시스템.
> Web(Next.js 16 + Turbopack), Mobile(Expo 55 + React Native 0.83) 공용.

---

## 패키지 구조

```
packages/
  design-tokens/        # 원시 토큰 정의 (플랫폼 독립)
    src/
      colors.ts         # 색상 팔레트
      typography.ts     # 폰트 사이즈·웨이트·줄간격·자간
      spacing.ts        # 여백 스케일
      radius.ts         # 보더 반경
      shadows.ts        # 그림자
  ui/
    src/
      tamagui.config.ts     # Tamagui 토큰·테마·미디어 설정
      tamagui-provider.tsx  # TamaguiProvider 래퍼
```

---

## 사용법

```tsx
// 앱 루트에서 한 번만 선언
import { TamaguiProvider } from '@repo/ui/tamagui-provider';

<TamaguiProvider defaultTheme="light">
  <App />
</TamaguiProvider>
```

---

## 색상 (Color Tokens)

`@repo/design-tokens`의 중첩 팔레트를 Tamagui flat 토큰으로 변환.

### 팔레트 목록

| 팔레트 | 스케일 |
|--------|--------|
| `gray` | 50 · 100 · 200 · 300 · 400 · 500 · 600 · 700 · 800 · 900 · 950 |
| `slate` | 50 → 950 |
| `red` | 50 → 800, 950 |
| `orange` | 50 → 950 |
| `yellow` | 50 → 950 |
| `green` | 50 → 900 |
| `blue` | 50 → 950 |
| `indigo` | 50 → 950 |
| `violet` | 50 → 950 |
| `purple` | 50 → 950 |
| `pink` | 50 → 950 |
| 기타 | `black` · `white` · `transparent` |

### Tamagui 토큰 참조 예시

```tsx
// $접두사로 토큰 참조
<Text color="$blue500" />
<YStack backgroundColor="$gray100" />
```

### 시맨틱 테마 토큰

컴포넌트에서 하드코딩 대신 아래 시맨틱 토큰을 사용 권장.

| 토큰 | light | dark |
|------|-------|------|
| `$background` | `white` | `gray950` |
| `$backgroundHover` | `gray50` | `gray900` |
| `$backgroundPress` | `gray100` | `gray800` |
| `$backgroundFocus` | `gray100` | `gray800` |
| `$color` | `gray900` | `gray50` |
| `$colorHover` | `gray700` | `gray200` |
| `$colorPress` | `gray500` | `gray400` |
| `$colorFocus` | `gray700` | `gray200` |
| `$borderColor` | `gray200` | `gray700` |
| `$borderColorHover` | `gray300` | `gray600` |
| `$borderColorPress` | `gray400` | `gray500` |
| `$borderColorFocus` | `blue500` | `blue400` |
| `$placeholderColor` | `gray400` | `gray500` |
| `$outlineColor` | `blue500` | `blue400` |
| `$shadowColor` | `rgba(0,0,0,0.1)` | `rgba(0,0,0,0.4)` |

---

## 타이포그래피 (Typography Tokens)

### Font Size

| Tamagui 토큰 | 이름 | px |
|-------------|------|----|
| `$1` | xs | 12 |
| `$2` | sm | 14 |
| `$3` | base | 16 |
| `$4` | lg | 18 |
| `$5` | xl | 20 |
| `$6` | 2xl | 24 |
| `$7` | 3xl | 30 |
| `$8` | 4xl | 36 |

### Font Weight

| Tamagui 토큰 | 값 | 이름 |
|-------------|-----|------|
| `$1` | 100 | thin |
| `$2` | 200 | extralight |
| `$3` | 300 | light |
| `$4` | 400 | normal |
| `$5` | 500 | medium |
| `$6` | 600 | semibold |
| `$7` | 700 | bold |
| `$8` | 800 | extrabold |
| `$9` | 900 | black |

### Line Height

| Tamagui 토큰 | px |
|-------------|-----|
| `$1` | 16 |
| `$2` | 20 |
| `$3` | 24 |
| `$4` | 28 |
| `$5` | 32 |
| `$6` | 36 |
| `$7` | 40 |

### 사용 폰트

- `body` / `heading` 모두 시스템 폰트(`System`) 사용

---

## 간격 (Space & Size Tokens)

`space`와 `size` 동일한 스케일. `true`는 기본값(`$4` = 16px).

| 토큰 | px |
|------|----|
| `$0` | 0 |
| `$0.5` | 2 |
| `$1` | 4 |
| `$1.5` | 6 |
| `$2` | 8 |
| `$2.5` | 10 |
| `$3` | 12 |
| `$3.5` | 14 |
| `$4` / `$true` | 16 |
| `$5` | 20 |
| `$6` | 24 |
| `$7` | 28 |
| `$8` | 32 |
| `$9` | 36 |
| `$10` | 40 |
| `$11` | 44 |
| `$12` | 48 |
| `$14` | 56 |
| `$16` | 64 |
| `$20` | 80 |
| `$24` | 96 |

---

## 보더 반경 (Radius Tokens)

| 토큰 | 이름 | px |
|------|------|----|
| `$0` | none | 0 |
| `$1` | xs | 2 |
| `$2` | sm | 4 |
| `$3` | md | 6 |
| `$4` | lg | 8 |
| `$5` | xl | 12 |
| `$6` | 2xl | 16 |
| `$7` | 3xl | 24 |
| `$8` | 4xl | 32 |
| `$full` | full | 9999 |

---

## 그림자 (Shadow Tokens)

`shadows` / `insetShadows`는 현재 테마 토큰(`$shadowColor`)으로만 일부 연동.
컴포넌트에서 직접 사용 시 `@repo/design-tokens`에서 import.

| 이름 | Y offset | blur | spread | color |
|------|----------|------|--------|-------|
| `2xs` | 1 | 0 | 0 | rgba(0,0,0,0.05) |
| `xs` | 1 | 2 | 0 | rgba(0,0,0,0.05) |
| `sm` | 1 | 3 | 0 | rgba(0,0,0,0.1) |
| `md` | 4 | 6 | -1 | rgba(0,0,0,0.1) |
| `lg` | 10 | 15 | -3 | rgba(0,0,0,0.1) |
| `xl` | 20 | 25 | -5 | rgba(0,0,0,0.1) |
| `2xl` | 25 | 50 | -12 | rgba(0,0,0,0.25) |

---

## z-Index Tokens

| 토큰 | 값 |
|------|----|
| `$0` | 0 |
| `$1` | 100 |
| `$2` | 200 |
| `$3` | 300 |
| `$4` | 400 |
| `$5` | 500 |

---

## 미디어 쿼리

| 키 | 조건 |
|----|------|
| `$xs` | max-width: 660px |
| `$sm` | max-width: 800px |
| `$md` | max-width: 1020px |
| `$lg` | max-width: 1280px |
| `$xl` | max-width: 1650px |
| `$xxl` | min-width: 1651px |
| `$gtXs` | min-width: 661px |
| `$gtSm` | min-width: 801px |
| `$gtMd` | min-width: 1021px |
| `$gtLg` | min-width: 1281px |

```tsx
<YStack $sm={{ flexDirection: 'column' }} $gtSm={{ flexDirection: 'row' }} />
```

---

## 스타일 단축키 (Shorthands)

| 단축키 | 전체 prop |
|--------|-----------|
| `px` | paddingHorizontal |
| `py` | paddingVertical |
| `pt` / `pb` / `pl` / `pr` | paddingTop / Bottom / Left / Right |
| `mx` | marginHorizontal |
| `my` | marginVertical |
| `mt` / `mb` / `ml` / `mr` | marginTop / Bottom / Left / Right |
| `bg` | backgroundColor |
| `br` | borderRadius |
| `bw` | borderWidth |
| `bc` | borderColor |
| `f` | flex |
| `fw` | flexWrap |
| `fd` | flexDirection |
| `ai` | alignItems |
| `jc` | justifyContent |
| `ac` | alignContent |
| `as` | alignSelf |
| `w` / `h` | width / height |
| `mw` / `mh` | maxWidth / maxHeight |

---

## 테마

`defaultTheme="light"` 또는 `"dark"` 로 전환.

```tsx
<TamaguiProvider defaultTheme="dark">...</TamaguiProvider>
```

컴포넌트 단위 테마 오버라이드:

```tsx
<YStack theme="dark">...</YStack>
```
