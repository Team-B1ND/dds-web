import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { DodamShape, DodamThemeProvider } from "@dds-web/styles";

export interface ToggleBtnProps {
  isAtv: boolean;
  onclick?: MouseEventHandler<HTMLDivElement>;
}

export const DodamToggleButton = ({ isAtv, onclick }: ToggleBtnProps) => {
  return (
    <StyledToggleButtonWrap isAtv={isAtv} onClick={onclick}>
      <StyledToggleButton isAtv={isAtv}></StyledToggleButton>
    </StyledToggleButtonWrap>
  );
};

const StyledToggleButtonWrap = styled.div<{ isAtv: boolean }>`
  width: 50px;
  height: 30px;

  display: flex;
  align-items: center;

  ${DodamShape.Large};
  background-color: ${({ isAtv, theme }) =>
    isAtv ? theme.primaryNormal : theme.labelDisabled};

  position: relative;
  cursor: pointer;
`;

const StyledToggleButton = styled.span<{ isAtv: boolean }>`
  width: 25px;
  height: 25px;

  ${DodamShape.ExtraLarge};
  background-color: ${({ theme }) => theme.staticWhite};

  transition: 0.2s ease-out;
  left: ${({ isAtv }) => (isAtv ? "38%" : "0")};

  margin: 0 3px;
  position: absolute;
`;
