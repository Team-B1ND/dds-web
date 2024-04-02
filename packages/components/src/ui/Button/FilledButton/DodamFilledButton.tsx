import { DodamShape, DodamTypography, ShapeSizeType } from "@dds-web/styles";
import React from "react";
import { DodamFilledButtonProps } from "./type";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import { FlexLayout } from "../../../layout";

export const DodamFilledButton = ({
  text: { color, content },
  backgroundColor,
  isLoading = false,
  radius = "Large",
  padding = "16px 24px",
  disabled = false,
  customStyle,
  ...props
}: DodamFilledButtonProps) => {
  return (
    <StyledFilledButton
      textColor={color!}
      backgroundColor={backgroundColor}
      radius={radius}
      disabled={disabled}
      isLoading={isLoading}
      padding={padding}
      customStyle={customStyle!}
      {...(!disabled && props)}
    >
      {isLoading ? (
        <LoadingEllipseWrap>
          {Array.from({ length: 3 }).map((_, idx) => (
            <LoadingEllipse key={idx} />
          ))}
        </LoadingEllipseWrap>
      ) : (
        content
      )}
    </StyledFilledButton>
  );
};

const StyledFilledButton = styled.button<{
  textColor: string;
  backgroundColor: CSSProperties["backgroundColor"];
  radius: ShapeSizeType;
  disabled: boolean;
  padding: CSSProperties["padding"];
  isLoading: boolean;
  customStyle: RuleSet;
}>`
  min-height: 58px;
  padding: ${({ padding }) => padding};

  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.primary};
  color: ${({ textColor, theme }) => textColor || theme.onPrimary};
  opacity: ${({ disabled, isLoading }) => (disabled || isLoading) && "0.5"};

  outline: none;
  border: none;
  cursor: pointer;

  transition: all 0.15s ease-in-out;

  &:active {
    ${({ disabled }) =>
      !disabled &&
      css`
        transform: scale(0.97);
      `};
  }

  ${FlexLayout({ alignItems: "center", justifyContent: "center" })}
  ${DodamTypography.Body.Large}
  ${({ radius }) => DodamShape[radius]}
  
  ${({ customStyle }) => customStyle};
`;

const LoadingEllipseWrap = styled.div`
  ${FlexLayout({ columnGap: "8px" })}
`;

const LoadingEllipse = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 100%;
`;
