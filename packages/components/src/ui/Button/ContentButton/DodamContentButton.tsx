import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import styled, { css } from "styled-components";
import type { CSSProperties, RuleSet } from "styled-components";
import { DodamShape, DodamTypography } from "@dds-web/styles";
import type { ShapeSizeType } from "@dds-web/styles";
import { FlexLayout } from "../../../layout";

type typographyType = [
  "Headline" | "Title" | "Body" | "Label",
  "Large" | "Medium" | "Small",
];

type ColorsType = {
  textColor?: string;
  textActiveColor?: string;
  backgroundColor?: CSSProperties["backgroundColor"];
  activeBackgroundColor?: CSSProperties["backgroundColor"];
};

export interface DodamContentButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  width?: CSSProperties["width"];
  height?: CSSProperties["height"];

  typography?: typographyType;
  colors?: ColorsType;
  radius?: ShapeSizeType;
  padding?: CSSProperties["padding"];
  customStyle?: RuleSet;
}

export const DodamContentButton = ({
  children,
  width,
  height,
  typography = ["Body", "Large"],
  colors,
  radius = "Medium",
  padding,
  customStyle,
  ...props
}: DodamContentButton) => {
  return (
    <StyledContentButton
      $width={width}
      $height={height}
      $typography={typography!}
      $colors={colors!}
      $radius={radius}
      $padding={padding}
      $customStyle={customStyle!}
      {...props}
    >
      {children}
    </StyledContentButton>
  );
};

const StyledContentButton = styled.button<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $typography: typographyType;
  $colors: ColorsType;
  $radius: ShapeSizeType;
  $padding: CSSProperties["padding"];
  $customStyle: RuleSet;
}>`
  width: ${({ $width }) => $width || "auto"};
  height: ${({ $height }) => $height || "auto"};

  outline: none;
  border: none;
  cursor: pointer;

  padding: ${({ $padding }) => $padding || "10px"};

  transition: all 0.15s ease-in-out;
  ${({ $colors, theme }) => css`
    color: ${$colors?.textColor || theme.onSurface};
    background-color: ${$colors?.backgroundColor || "transparent"};

    &:active {
      transform: scale(0.95);
      color: ${$colors?.textActiveColor || theme.onSurface};
      background-color: ${$colors?.activeBackgroundColor || theme.secondary};
    }
  `}

  ${FlexLayout({ $alignItems: "center", $justifyContent: "center" })};
  ${({ $radius }) => DodamShape[$radius]};
  ${({ $typography }) => DodamTypography[$typography[0]][$typography[1]]}

  ${({ $customStyle }) => $customStyle}
`;
