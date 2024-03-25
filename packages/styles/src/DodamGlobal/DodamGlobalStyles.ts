import { RuleSet, createGlobalStyle } from "styled-components";

export const DodamGlobalStyles = createGlobalStyle<{ customStyle?: RuleSet }>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      ${({ customStyle }) => customStyle}
    }
`;
