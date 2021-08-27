const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: "0.6rem",
    base: "1rem",
    lg: "1.4rem",
    xl: "1.8rem",
    title: "2rem",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  white: "#f1f2f6",
  grey: "#ced6e0",
  orange: "#fa8231"
};

const size = {
  mobile: "425px",
  tablet: "768px",
  tabletL: "920px",
  desktop: "1440px",
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  cursorPointer: `
    cursor: pointer;
  `
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
  mobile: `@media screen and (max-width: ${size.mobile})`,
  tablet: `@media screen and (max-width: ${size.tablet})`,
  tabletL: `@media screen and (max-width: ${size.tabletL})`,
  desktop: `@media screen and (max-width: ${size.desktop})`,
};

//테마에 따라 다른 값을 갖는 색상 값입니다 
const lightThemeColors = {
  ...colors,
  primary: "#333",
  secondary: "#fff",
  tertiary: "#808080",
};

const darkThemeColors = {
  ...colors,
  primary: "#fff",
  secondary: "#333",
  tertiary: "#d4d0c4",
};


// 테마와 관련없이 공통으로 사용되는 변수들입니다
const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
  common
};

// 각 테마는 공통 변수와 함께, 각기 다른 색상 값들을 갖습니다.
export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};