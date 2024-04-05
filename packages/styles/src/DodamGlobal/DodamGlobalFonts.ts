import { ExecutionProps, createGlobalStyle } from "styled-components";
import { css } from "styled-components";
import { DodamFont } from "@dds-web/foundations";

const generateFontFace = () => {
  return DodamFont.map(
    (item) => css`
      @font-face {
        font-family: ${item.font};
        src: url(${item.url}) format("woff2");
      }
    `
  );
};

export const DodamGlobalFonts: React.NamedExoticComponent<ExecutionProps> = createGlobalStyle`
    ${generateFontFace()}
    
    * {
      font-family: 'Suit-Normal';
    }
`;
