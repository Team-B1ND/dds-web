import { useDetectThemeMode } from "@dds-web/hooks";
import {
  DodamDarkTheme,
  DodamFlexLayout,
  DodamGlobalStyles,
  DodamLightTheme,
  DodamThemeProvider,
} from "@dds-web/styles";
import React, { useEffect, useRef, useState } from "react";
import type { InputHTMLAttributes } from "react";
import styled, { css, type CSSProperties } from "styled-components";
import { Checkmark } from "@dds-web/assets";

export interface DodamCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onClick"> {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  checkedBackgroundColor?: CSSProperties["backgroundColor"];
}

export const DodamCheckbox = ({
  width = "18px",
  height = "18px",
  checkedBackgroundColor,
  ...props
}: DodamCheckboxProps) => {
  const { isDarkMode } = useDetectThemeMode();
  const checkboxRef = useRef<HTMLLabelElement | null>(null);

  const [responsivePaddingSize, setResponsivePaddingSize] = useState(5);
  const [responsiveBorderSize, setResponsiveBorderSize] = useState(2);
  const [responsiveCheckmarkSize, setResponsiveCheckmarkSize] = useState(12);

  const [isClickCheckbox, setIsClickCheckbox] = useState(false);

  useEffect(() => {
    const checkboxWidth = checkboxRef.current?.offsetWidth;
    if (checkboxWidth) {
      // 비율에 맞는 특정 값을 구하기 위해선 현재 checkbox 크기 * (초기 checkbox의 특정 값 / width 값)으로 계산한다.
      setResponsivePaddingSize(checkboxWidth * (5 / 18));
      setResponsiveBorderSize(checkboxWidth * (2 / 18));
      setResponsiveCheckmarkSize(checkboxWidth * (12 / 18));
    }
  }, [checkboxRef.current?.offsetWidth]);

  return (
    <DodamThemeProvider theme={isDarkMode ? DodamDarkTheme : DodamLightTheme}>
      <DodamGlobalStyles />

      <CheckboxContainer
        $responsivePaddingSize={responsivePaddingSize}
        $isDisabled={props.disabled!}
      >
        <input
          id="checkbox"
          type="checkbox"
          style={{ display: "none" }}
          onClick={() => !props.disabled && setIsClickCheckbox((prev) => !prev)}
          {...props}
        />

        <StyledCheckboxLabel
          htmlFor="checkbox"
          ref={checkboxRef}
          $width={width}
          $height={height}
          $responsiveBorderSize={responsiveBorderSize}
          $isClickCheckbox={isClickCheckbox}
          $checkedBackgroundColor={checkedBackgroundColor}
          $isDisabled={props.disabled!}
        >
          {isClickCheckbox && (
            <Checkmark
              width={responsiveCheckmarkSize}
              height={responsiveCheckmarkSize}
              pathStyle={CheckmarkPathStyle}
            />
          )}
        </StyledCheckboxLabel>
      </CheckboxContainer>
    </DodamThemeProvider>
  );
};

const CheckboxContainer = styled.div<{
  $responsivePaddingSize: number;
  $isDisabled: boolean;
}>`
  padding: ${({ $responsivePaddingSize }) => `${$responsivePaddingSize}px`};

  border-radius: 27%;
  transition: all 0.15s ease-in-out;
  ${({ $isDisabled, theme }) => css`
    opacity: ${$isDisabled && "0.6"};
    &:hover {
      background-color: ${!$isDisabled && theme.secondary};
    }
  `}
`;

const StyledCheckboxLabel = styled.label<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $responsiveBorderSize: number;
  $isClickCheckbox: boolean;
  $checkedBackgroundColor: CSSProperties["backgroundColor"];
  $isDisabled: boolean;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  cursor: ${({ $isDisabled }) => !$isDisabled && "pointer"};

  ${({
    theme,
    $responsiveBorderSize,
    $isClickCheckbox,
    $checkedBackgroundColor,
  }) => {
    let backgroundColor = "transparent";
    let borderColor = theme.onSurfaceVariant;

    if ($isClickCheckbox) {
      let checkColor = $checkedBackgroundColor || theme.primary;

      backgroundColor = checkColor;
      borderColor = checkColor;
    }

    return css`
      border: ${$responsiveBorderSize}px solid ${borderColor};
      background-color: ${backgroundColor};
    `;
  }}

  border-radius: 22%;
  transition: all 0.15s ease-in-out;
  ${DodamFlexLayout({ $alignItems: "center", $justifyContent: "center" })};
`;

const CheckmarkPathStyle = css`
  fill: ${({ theme }) => theme.onPrimary};
`;
