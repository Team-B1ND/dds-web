import {
  CSSObject,
  ExecutionProps,
  createGlobalStyle,
} from "styled-components";

type CustomStlye = {
  customStyle?: CSSObject;
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
