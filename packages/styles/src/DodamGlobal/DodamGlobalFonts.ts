import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
import { DodamFont } from "../../foundation";

const generateFontFace = () => {
  return DodamFont.map(
    (item) => css`
      @font-face {
        font-family: ${item.font};
        src: url(${item.url}) format("woff2");
      }
    `,
  );
};

export const DodamGlobalFonts = createGlobalStyle`
    ${generateFontFace()}
    
    * {
      font-family: 'Pretendard-Normal';
    }
`;
