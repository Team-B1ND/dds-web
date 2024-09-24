import styled, { css } from "styled-components";
import { ButtonSize } from "./type";
import { DodamLightTheme } from "@dds-web/styles/src/DodamTheme/DodamTheme";

export const PageIndicatorWrap = styled.div<{ size: ButtonSize }>`
  width: auto;
  height: auto;
  gap: ${({ size }) => (size === "Small" ? "5px" : "10px")};
  display: flex;
`;

export const IndicatorBtn = styled.div<{
  idx: number;
  size: ButtonSize;
  activeIdx: number;
}>`
  ${({ size }) =>
    size === "Small"
      ? css`
          width: 5px;
          height: 5px;
        `
      : css`
          width: 10px;
          height: 10px;
        `}
  border-radius: 50%;
  background-color: ${({ idx, activeIdx }) =>
    idx === activeIdx
      ? DodamLightTheme.primaryNormal
      : DodamLightTheme.labelDisabled};
  cursor: pointer;
`;
