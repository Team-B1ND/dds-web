import { ExecutionProps, RuleSet, createGlobalStyle } from "styled-components";

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

      ${({ customStyle }) => customStyle}
    }
`;
