import React, { MouseEventHandler } from "react";
import styled, { CSSObject, RuleSet } from "styled-components";
import { DodamTypography } from "@dds-web/styles";

type TagColor = "red" | "blue" | "default";

export interface DodamTagProps {
  text: string;
  color: TagColor;
  onClick?: MouseEventHandler<HTMLDivElement>;
  customStyle?: CSSObject;
}

export const DodamTag = ({
  text,
  color,
  onClick,
  customStyle,
}: DodamTagProps) => {
  return (
    <StyledTagWrap color={color} customStyle={customStyle!} onClick={onClick}>
      <StyledTag color={color}>{text}</StyledTag>
    </StyledTagWrap>
  );
};

const StyledTagWrap = styled.div<{ color: TagColor; customStyle: CSSObject }>`
  width: auto;
  min-width: 45px;
  height: auto;
  min-height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  border-radius: 34px;
  background-color: ${({ color, theme }) => {
    switch (color) {
      case "red":
        return theme.statusNegative;

      case "blue":
        return theme.primaryNormal;

      case "default":
        return theme.fillNormal;
    }
  }};

  ${({ customStyle }) => customStyle}
`;

const StyledTag = styled.span<{ color: TagColor }>`
  color: ${({ color, theme }) =>
    color === "default" ? theme.labelNeutral : theme.staticWhite};
  ${DodamTypography.Caption1.Bold};

  padding: 7.5px 12px;
`;
