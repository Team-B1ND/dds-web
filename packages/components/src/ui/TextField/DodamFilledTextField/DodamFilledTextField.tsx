import {
  DodamDarkTheme,
  DodamGlobalStyles,
  DodamLightTheme,
  DodamShape,
  DodamThemeProvider,
  DodamTypography,
} from "@dds-web/styles";
import { type ShapeSizeType, DodamFlexLayout } from "@dds-web/styles";
import React, { forwardRef, useState } from "react";
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import type { CSSProperties, RuleSet } from "styled-components";
import { Column, Row } from "../../../layout";
import "../../../fonts/font.css";
import { useDetectThemeMode } from "@dds-web/hooks";

type StyleType = {
  labelStyle?: RuleSet;
  textFieldStyle?: RuleSet;
  inputStyle?: RuleSet;
  supportStyle?: RuleSet;
};

type FieldColorItemType = {
  basicColor?: CSSProperties["color" | "backgroundColor"];
  onFocusColor?: CSSProperties["color" | "backgroundColor"];
  onErrorColor?: CSSProperties["color" | "backgroundColor"];
  onDisabledColor?: CSSProperties["color" | "backgroundColor"];
};

type FieldColorType = {
  textValueColor?: CSSProperties["color"];
  placeholderColor?: CSSProperties["color"];
  label?: FieldColorItemType;
  support?: Omit<FieldColorItemType, "onFocusColor">;
  inputBackgroundColor?: FieldColorItemType;
};

export interface DodamFilledTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  labelText: string;
  placeholderText: string;
  supportText?: string;
  icon?: ReactNode;

  width?: CSSProperties["width"];
  height?: CSSProperties["height"];

  colors?: FieldColorType;
  radius?: ShapeSizeType;
  isError?: boolean;
  customStyle?: StyleType;
  disabled?: boolean;
}

export const DodamFilledTextField = forwardRef(
  (
    {
      value,
      labelText,
      placeholderText,
      supportText,
      icon,
      width = "380px",
      height = "56px",
      colors,
      radius = "Medium",
      isError = false,
      customStyle,
      disabled = false,
      ...props
    }: DodamFilledTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isDarkMode } = useDetectThemeMode();
    const [isFocus, setIsFocus] = useState(false);

    return (
      <DodamThemeProvider theme={isDarkMode ? DodamDarkTheme : DodamLightTheme}>
        <DodamGlobalStyles />
        <Column $rowGap={"4px"}>
          <StyledLabel
            $isFocused={isFocus}
            $isError={isError}
            $isDisabled={disabled}
            $labelColor={colors?.label!}
            $customStyle={customStyle?.labelStyle!}
          >
            {labelText}
          </StyledLabel>

          <StyledTextField
            $radius={radius}
            $width={width}
            $height={height}
            $isFocused={isFocus}
            $isError={isError}
            $isDisabled={disabled}
            $inputBackgroundColor={colors?.inputBackgroundColor!}
            $customStyle={customStyle?.textFieldStyle!}
          >
            <StyledInput
              ref={ref}
              value={value}
              placeholder={placeholderText}
              onFocus={() => setIsFocus(true)}
              onBlur={() => value.length === 0 && setIsFocus(false)}
              $textValueColor={colors?.textValueColor}
              $placeholderColor={colors?.placeholderColor}
              $customStyle={customStyle?.inputStyle!}
              disabled={disabled}
              {...props}
            />
            <Row $columnGap={"16px"}>{icon}</Row>
          </StyledTextField>

          {supportText && (
            <StyledSupportText
              $isError={isError}
              $isDisabled={disabled}
              $supportColor={colors?.support!}
              $customStyle={customStyle?.supportStyle!}
            >
              {supportText}
            </StyledSupportText>
          )}
        </Column>
      </DodamThemeProvider>
    );
  }
);

const StyledLabel = styled.label<{
  $isFocused: boolean;
  $isError: boolean;
  $isDisabled: boolean;
  $labelColor: FieldColorItemType;
  $customStyle: RuleSet;
}>`
  transition: all 0.2s ease-in-out;

  ${({ $isDisabled, $isFocused, $isError, $labelColor, theme }) => {
    let color = $labelColor?.basicColor;

    if ($isDisabled) {
      color = $labelColor?.onDisabledColor || theme.tertiary;
    } else if ($isError) {
      color = $labelColor?.onErrorColor || theme.error;
    } else if ($isFocused) {
      color = $labelColor?.onFocusColor || theme.primary;
    }

    return css`
      opacity: ${$isDisabled && "0.5"};
      color: ${color || theme.tertiary};
    `;
  }}

  ${DodamTypography.Label.Large}
  ${({ $customStyle }) => $customStyle}
`;

const hexToRGBA = (hex: string, alpha: number) => {
  let filterHex = hex.replace("#", "");

  if (filterHex.length === 3) {
    filterHex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const red = parseInt(filterHex.substring(0, 2), 16);
  const green = parseInt(filterHex.substring(2, 4), 16);
  const blue = parseInt(filterHex.substring(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const StyledTextField = styled.div<{
  $radius: ShapeSizeType;
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $isFocused: boolean;
  $isError: boolean;
  $isDisabled: boolean;
  $inputBackgroundColor: FieldColorItemType;
  $customStyle: RuleSet;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  padding: 15px 16px;
  border: 1px solid ${({ theme }) => theme.outline};

  transition: all 0.15s ease-in-out;

  ${({ $isDisabled, $isFocused, $isError, $inputBackgroundColor, theme }) => {
    let backgroundColor = $inputBackgroundColor?.basicColor;

    if ($isDisabled) {
      backgroundColor =
        $inputBackgroundColor?.onDisabledColor || theme.surfaceContainerHighest;
    } else if ($isError) {
      backgroundColor =
        $inputBackgroundColor?.onErrorColor ||
        `linear-gradient(
        0deg,
        ${hexToRGBA(theme.error, 0.05)} 0%,
        ${hexToRGBA(theme.error, 0.05)} 100%
      )`;
    } else if ($isFocused) {
      backgroundColor =
        $inputBackgroundColor?.onFocusColor ||
        //   `linear-gradient(
        //   0deg,
        //   ${hexToRGBA(theme.primary, 0.05)} 0%,
        //   ${hexToRGBA(theme.primary, 0.05)} 100%
        // )`;
        theme.primary;
    }

    return css`
      opacity: ${$isDisabled && "0.5"};
      background: ${backgroundColor || theme.surfaceContainerHighest};
    `;
  }}

  ${DodamFlexLayout({ $alignItems: "center", $columnGap: "5px" })};
  ${({ $radius }) => DodamShape[$radius]};
  ${({ $customStyle }) => $customStyle}
`;

const StyledInput = styled.input<{
  $textValueColor: CSSProperties["color"];
  $placeholderColor: CSSProperties["color"];
  $customStyle: RuleSet;
}>`
  width: 100%;
  height: 100%;

  outline: none;
  border: none;

  background-color: transparent;
  transition: all 0.2s ease-in-out;

  // 다크모드일 때 텍스트 color가 완전하지 않음 나중에 디자인 문의 필요
  color: ${({ $textValueColor, theme }) => $textValueColor || theme.onSurface};

  &::placeholder {
    color: ${({ $placeholderColor, theme }) =>
      $placeholderColor || theme.onSurfaceVariant};
  }

  ${DodamTypography.Body.Large};
  ${({ $customStyle }) => $customStyle}
`;

const StyledSupportText = styled.p<{
  $isError: boolean;
  $isDisabled: boolean;
  $supportColor: FieldColorItemType;
  $customStyle: RuleSet;
}>`
  height: 23px;
  transition: all 0.2s ease-in-out;

  ${({ $isDisabled, $isError, $supportColor, theme }) => {
    let color = $supportColor?.basicColor;

    if ($isDisabled) {
      color = $supportColor?.onDisabledColor || theme.onSurfaceVariant;
    } else if ($isError) {
      color = $supportColor?.onErrorColor || theme.error;
    }

    return css`
      opacity: ${$isDisabled && "0.5"};
      color: ${color || theme.onSurfaceVariant};
    `;
  }}

  ${DodamTypography.Body.Small}
  ${({ $customStyle }) => $customStyle}
`;
