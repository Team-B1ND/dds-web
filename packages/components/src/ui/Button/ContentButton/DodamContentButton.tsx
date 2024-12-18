import React, { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styled, { CSSProperties, RuleSet, css } from "styled-components";
import { DodamShape, DodamTypography, ShapeSizeType } from "@dds-web/styles";
import { FlexLayout } from "../../../layout";

type typographyType = [
  "Title1" | "Title2" | "Title3" | "Heading1" | "Heading2" | "Headline" | "Body1" | "Body2" | "Label" | "Caption1" | "Caption2",
  "Bold" | "Medium" | "Regular",
];

type ColorsType = {
  textColor?: string;
  textActiveColor?: string;
  backgroundColor?: CSSProperties["backgroundColor"];
  activeBackgroundColor?: CSSProperties["backgroundColor"];
};

export interface DodamContentButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  typography?: typographyType;
  colors?: ColorsType;
  radius?: ShapeSizeType;
  padding?: CSSProperties["padding"];
  onclick?: MouseEventHandler<HTMLButtonElement>;
  customStyle?: RuleSet;
}

export const DodamContentButton = ({
  children,
  typography = ["Body1", "Bold"],
  colors,
  radius = "Medium",
  padding,
  onclick,
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
      onClick={onclick}
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
    color: ${colors?.textColor || theme.labelStrong};
    background-color: ${colors?.backgroundColor || "transparent"};

    &:active {
      transform: scale(0.95);
      color: ${colors?.textActiveColor || theme.labelStrong};
      background-color: ${colors?.activeBackgroundColor || "transparent"};
    }
  `}

  ${FlexLayout({ alignItems: "center", justifyContent: "center" })};
  ${({ radius }) => DodamShape[radius]};
  ${({ typography }) => DodamTypography[typography[0]][typography[1]]}

  ${({ customStyle }) => customStyle}
`;
