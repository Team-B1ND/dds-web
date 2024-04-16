import {
  type ExecutionProps,
  type RuleSet,
  createGlobalStyle,
} from "styled-components";
import reset from "styled-reset";

type CustomStlye = {
  customStyle?: RuleSet;
};

export const DodamGlobalStyles: React.NamedExoticComponent<
  ExecutionProps & CustomStlye
> = createGlobalStyle<CustomStlye>`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      font-family: 'Suit-Normal' !important;

      ${({ customStyle }) => customStyle}
    }

    ${reset}
`;
