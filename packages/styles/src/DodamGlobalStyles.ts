import { createGlobalStyle } from "styled-components";
import type { ExecutionProps, RuleSet } from "styled-components";
import reset from "styled-reset";

export const DodamGlobalStyles: React.NamedExoticComponent<ExecutionProps> = createGlobalStyle<{
  $customStyle?: RuleSet;
}>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Suit-Normal' !important;

      ${({ $customStyle }) => $customStyle}
    }

    ${reset}
`;
