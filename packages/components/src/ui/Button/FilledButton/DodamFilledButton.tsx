import { DodamShape, DodamTypography } from "@dds-web/styles";
import type { ShapeSizeType } from "@dds-web/styles";
import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import styled, { css } from "styled-components";
import type { CSSProperties, RuleSet } from "styled-components";
import { FlexLayout } from "../../../layout";

type FilledColorsType = {
  contentColor?: CSSProperties["color"];
  contentBackgroundColor?: CSSProperties["backgroundColor"];
  disabledColor?: CSSProperties["color"];
  disabledBackgroundColor?: CSSProperties["backgroundColor"];
};

export interface DodamFilledButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  width?: CSSProperties["width"];
  height?: CSSProperties["height"];

  colors?: FilledColorsType;
  radius?: ShapeSizeType;
  padding?: CSSProperties["padding"];
  isLoading?: boolean;
  isDisabled?: boolean;
  customStyle?: RuleSet;
}

export const DodamFilledButton = ({
  children,
  width = "380px",
  height = "58px",
  colors,
  isLoading = false,
  radius = "Large",
  padding = "16px 24px",
  isDisabled = false,
  customStyle,
  ...props
}: DodamFilledButtonProps) => {
  return (
    <StyledFilledButton
      $width={width}
      $height={height}
      $colors={colors!}
      $radius={radius}
      $isDisabled={isDisabled}
      $isLoading={isLoading}
      $padding={padding}
      $customStyle={customStyle!}
      {...(!isDisabled && props)}
    >
      {isLoading ? (
        <LoadingEllipseWrap>
          {Array.from({ length: 3 }).map((_, idx) => (
            <LoadingEllipseItem key={idx} />
          ))}
        </LoadingEllipseWrap>
      ) : (
        <p>{children}</p>
      )}
    </StyledFilledButton>
  );
};

const StyledFilledButton = styled.button<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $colors: FilledColorsType;
  $radius: ShapeSizeType;
  $isDisabled: boolean;
  $isLoading: boolean;
  $padding: CSSProperties["padding"];
  $customStyle: RuleSet;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  padding: ${({ $padding }) => $padding};
  opacity: ${({ $isLoading }) => $isLoading && "0.5"};

  outline: none;
  border: none;
  cursor: pointer;

  ${({ $colors, $isDisabled, theme }) => css`
    background-color: ${($isDisabled
      ? $colors?.disabledBackgroundColor
      : $colors?.contentBackgroundColor) || theme.primary};
    color: ${($isDisabled ? $colors?.disabledColor : $colors?.contentColor) ||
    theme.onPrimary};
  `}

  transition: all 0.15s ease-in-out;

  ${({ $isDisabled, $isLoading }) =>
    !$isDisabled &&
    !$isLoading &&
    css`
      &:active {
        transform: scale(0.97);
      }
    `};

  ${FlexLayout({ $alignItems: "center", $justifyContent: "center" })}
  ${DodamTypography.Body.Large}
  ${({ $radius }) => DodamShape[$radius]}
  
  ${({ $customStyle }) => $customStyle};
`;

const LoadingEllipseWrap = styled.div`
  ${FlexLayout({ $columnGap: "8px" })}
`;

const LoadingEllipseItem = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 100%;
`;
