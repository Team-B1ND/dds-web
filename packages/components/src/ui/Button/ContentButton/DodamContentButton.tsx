import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import styled, {
  type CSSProperties,
  type RuleSet,
  css,
} from "styled-components";
import { DodamShape, DodamTypography, ShapeSizeType } from "@dds-web/styles";
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

  typography?: typographyType;
  colors?: ColorsType;
  radius?: ShapeSizeType;
  padding?: CSSProperties["padding"];
  customStyle?: RuleSet;
}

export const DodamContentButton = ({
  children,
  typography = ["Body", "Large"],
  colors,
  radius = "Medium",
  padding,
  customStyle,
  ...props
}: DodamContentButton) => {
  return (
    <StyledContentButton
      typography={typography!}
      colors={colors!}
      radius={radius}
      padding={padding}
      customStyle={customStyle!}
      {...props}
    >
      {children}
    </StyledContentButton>
  );
};

const StyledContentButton = styled.button<{
  typography: typographyType;
  colors: ColorsType;
  radius: ShapeSizeType;
  padding: CSSProperties["padding"];
  customStyle: RuleSet;
}>`
  min-width: 40px;
  min-height: 40px;

  outline: none;
  border: none;
  cursor: pointer;

  padding: ${({ padding }) => padding};

  transition: all 0.15s ease-in-out;
  ${({ colors, theme }) => css`
    color: ${colors?.textColor || theme.onSurface};
    background-color: ${colors?.backgroundColor || "transparent"};

    &:active {
      transform: scale(0.95);
      color: ${colors?.textActiveColor || theme.onSurface};
      background-color: ${colors?.activeBackgroundColor || theme.secondary};
    }
  `}

  ${FlexLayout({ alignItems: "center", justifyContent: "center" })};
  ${({ radius }) => DodamShape[radius]};
  ${({ typography }) => DodamTypography[typography[0]][typography[1]]}

  ${({ customStyle }) => customStyle}
`;
