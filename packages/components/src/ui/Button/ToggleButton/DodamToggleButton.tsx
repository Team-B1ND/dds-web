import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { DodamShape, DodamThemeProvider } from '@dds-web/styles';

export interface ToggleBtnProps {
  isAtv: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const DodamToggleButton = ({ isAtv, onClick }: ToggleBtnProps) => {
  return (
    <StyledToggleButtonWrap isAtv={isAtv} onClick={onClick}>
      <StyledToggleButton isAtv={isAtv}></StyledToggleButton>
    </StyledToggleButtonWrap>
  );
};

const StyledToggleButtonWrap = styled.div<{ isAtv: boolean }>`
  width: 50px;
  height: 30px;

  display: flex;
  align-items: center;

  border-radius: 15px;
  background-color: ${({ isAtv, theme }) => (isAtv ? theme.primaryNormal : theme.labelDisabled)};

  position: relative;
  cursor: pointer;
`;

const StyledToggleButton = styled.span<{ isAtv: boolean }>`
  width: 25px;
  height: 25px;

  background-color: ${({ theme }) => theme.staticWhite};

  transition: 0.2s ease-out;
  left: ${({ isAtv }) => (isAtv ? '38%' : '0')};
  border-radius: 50%;

  margin: 0 3px;
  position: absolute;
`;
