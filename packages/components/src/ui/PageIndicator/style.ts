import styled, { css, CSSObject } from "styled-components";
import { ButtonSize } from "./type";
import { DodamLightTheme } from "@dds-web/styles/src/DodamTheme/DodamTheme";

export const PageIndicatorWrap = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const IndicatorBox = styled.div<{
  buttonSize: ButtonSize 
  customStyle?:CSSObject
}>`
  ${({ customStyle }) => customStyle}
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${({ buttonSize }) => (buttonSize === "Small" ? "5px" : buttonSize=="Large" ? "10px" : "15px")};
`

export const IndicatorBtn = styled.div<{
  idx: number;
  activeIdx: number;
  buttonSize: ButtonSize;
}>`
  ${({ buttonSize }) =>
    buttonSize === "Small"
      ? css`
          width: 5px;
          height: 5px;
        `
      : buttonSize=="Large" ?
         css`
          width: 10px;
          height: 10px;
        `
      : css`
         width: 15px;
         height: 15px;
      `}
  border-radius: 50%;
  background-color: ${({ idx, activeIdx }) =>
    idx === activeIdx
      ? DodamLightTheme.primaryNormal
      : DodamLightTheme.labelDisabled};
  cursor: pointer;
`;