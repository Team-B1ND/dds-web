import React from "react";
import { DodamIconButtonProps } from "./type";
import styled, { CSSProperties, RuleSet } from "styled-components";
import { DodamShape, ShapeSizeType } from "@dds-web/styles";
import { FlexLayout } from "../../../layout";

export const DodamIconButton = ({
  children,
  radius = "Medium",
  padding,
  customStyle,
  ...props
}: DodamIconButtonProps) => {
  return (
    <StyledIconButton
      radius={radius}
      padding={padding}
      customStyle={customStyle!}
      {...props}
    >
      {children}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button<{
  radius: ShapeSizeType;
  padding: CSSProperties["padding"];
  customStyle: RuleSet;
}>`
  min-width: 40px;
  min-height: 40px;

  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.15s ease-in-out;
  &:active {
    transform: scale(0.95);
    background-color: ${({ theme }) => theme.secondary};
  }

  ${({ padding }) => padding}
  ${FlexLayout({ alignItems: "center", justifyContent: "center" })}
  ${({ radius }) => DodamShape[radius]}

  ${({ customStyle }) => customStyle};
`;
