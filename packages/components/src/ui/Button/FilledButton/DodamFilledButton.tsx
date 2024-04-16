import { DodamShape, DodamTypography, ShapeSizeType } from "@dds-web/styles";
import React, { type ButtonHTMLAttributes, type ReactNode } from "react";
import styled, {
  type CSSProperties,
  type RuleSet,
  css,
} from "styled-components";
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

  colors?: FilledColorsType;
  radius?: ShapeSizeType;
  padding?: CSSProperties["padding"];
  isLoading?: boolean;
  isDisabled?: boolean;
  customStyle?: RuleSet;
}

export const DodamFilledButton = ({
  children,
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
      colors={colors!}
      radius={radius}
      isDisabled={isDisabled}
      isLoading={isLoading}
      padding={padding}
      customStyle={customStyle!}
      {...(!isDisabled && props)}
    >
      {isLoading ? (
        <LoadingEllipseWrap>
          {Array.from({ length: 3 }).map((_, idx) => (
            <LoadingEllipseItem key={idx} />
          ))}
        </LoadingEllipseWrap>
      ) : (
        <>{children}</>
      )}
    </StyledFilledButton>
  );
};

const StyledFilledButton = styled.button<{
  colors: FilledColorsType;
  radius: ShapeSizeType;
  isDisabled: boolean;
  padding: CSSProperties["padding"];
  isLoading: boolean;
  customStyle: RuleSet;
}>`
  width: 380px;
  min-height: 58px;
  padding: ${({ padding }) => padding};

  opacity: ${({ isLoading }) => isLoading && "0.5"};

  outline: none;
  border: none;
  cursor: pointer;

  ${({ colors, isDisabled, theme }) => css`
    background-color: ${(isDisabled
      ? colors?.disabledBackgroundColor
      : colors?.contentBackgroundColor) || theme.primary};
    color: ${(isDisabled ? colors?.disabledColor : colors?.contentColor) ||
    theme.onPrimary};
  `}

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

const LoadingEllipseItem = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 100%;
`;
