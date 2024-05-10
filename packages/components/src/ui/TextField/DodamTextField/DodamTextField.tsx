import {
  DodamDarkTheme,
  DodamGlobalStyles,
  DodamLightTheme,
  DodamThemeProvider,
  DodamTypography,
} from "@dds-web/styles";
import React, { forwardRef, useState } from "react";
import type { ForwardedRef, InputHTMLAttributes, ReactNode } from "react";
import styled, { type CSSProperties, css, RuleSet } from "styled-components";
import { Column, FlexLayout, Row } from "../../../layout";
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
  label?: FieldColorItemType;
  support?: Omit<FieldColorItemType, "onFocusColor">;
  borderBottom?: FieldColorItemType;
};

export interface DodamTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  labelText: string;
  supportText?: string;

  width?: CSSProperties["width"];
  height?: CSSProperties["height"];

  icon?: ReactNode;
  isError?: boolean;
  colors?: FieldColorType;
  disabled?: boolean;
  customStyle?: StyleType;
}

export const DodamTextField = forwardRef(
  (
    {
      value,
      labelText,
      supportText,
      icon,
      isError = false,
      colors,
      width = "380px",
      height = "32px",
      disabled = false,
      customStyle,
      ...props
    }: DodamTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { isDarkMode } = useDetectThemeMode();
    const [isFocus, setIsFocus] = useState(false);

    return (
      <DodamThemeProvider theme={isDarkMode ? DodamDarkTheme : DodamLightTheme}>
        <DodamGlobalStyles />
        <Column $width={width}>
          <Column
            $width={"100%"}
            $height={height}
            $customStyle={css`
              position: relative;
            `}
          >
            <StyledLabel
              $isFocused={isFocus}
              $isError={isError}
              $labelColor={colors?.label!}
              $isDisabled={disabled}
              $customStyle={customStyle?.labelStyle!}
            >
              {labelText}
            </StyledLabel>

            <TextFieldWrap
              $isFocused={isFocus}
              $isError={isError}
              $isDisabled={disabled}
              $borderBottomColor={colors?.borderBottom!}
              $customStyle={customStyle?.textFieldStyle!}
            >
              <TextFieldInput
                ref={ref}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => value.length === 0 && setIsFocus(false)}
                $fontColor={colors?.textValueColor}
                $customStyle={customStyle?.inputStyle!}
                disabled={disabled}
                {...props}
              />

              <Row
                $alignItems="center"
                $columnGap={"16px"}
                $padding={"0 0 10px 0"}
              >
                {isFocus && <>{icon}</>}
              </Row>
            </TextFieldWrap>
          </Column>

          {supportText && (
            <SupportText
              $isError={isError}
              $isDisabled={disabled}
              $supportColor={colors?.support!}
              $customStyle={customStyle?.supportStyle!}
            >
              {supportText}
            </SupportText>
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
  transform: translateY(-50%);

  pointer-events: none;
  position: absolute;
  opacity: ${({ $isDisabled }) => $isDisabled && "0.5"};

  ${({ $isError, $isDisabled, $isFocused, $labelColor, theme }) => {
    let color = $labelColor?.basicColor;

    let topPosition = $isFocused ? "-7px" : "40%";

    let typographyStyle = $isFocused
      ? DodamTypography.Label.Large
      : DodamTypography.Body.Large;

    if ($isDisabled) {
      color = $labelColor?.onDisabledColor || theme.onSurfaceVariant;
    } else if ($isError) {
      color = $labelColor?.onErrorColor || theme.error;
    } else if ($isFocused) {
      color = $labelColor?.onFocusColor || theme.primary;
    }

    return css`
      opacity: ${$isDisabled && "0.5"};
      color: ${color || theme.onSurfaceVariant};
      top: ${topPosition};
      ${typographyStyle};
    `;
  }};

  ${({ $customStyle }) => $customStyle}
`;

const TextFieldWrap = styled.div<{
  $isFocused: boolean;
  $isDisabled: boolean;
  $isError: boolean;
  $borderBottomColor: FieldColorItemType;
  $customStyle: RuleSet;
}>`
  width: 100%;
  height: 100%;

  transition: all 0.2s ease-in-out;
  opacity: ${({ $isDisabled }) => $isDisabled && "0.5"};

  ${({ $isError, $isDisabled, $isFocused, $borderBottomColor, theme }) => {
    let bottomColor = $borderBottomColor?.basicColor;

    if ($isDisabled) {
      bottomColor =
        $borderBottomColor?.onDisabledColor || theme.onSurfaceVariant;
    } else if ($isError) {
      bottomColor = $borderBottomColor?.onErrorColor || theme.error;
    } else if ($isFocused) {
      bottomColor = $borderBottomColor?.onFocusColor || theme.primary;
    }

    return css`
      border-bottom: 1px solid ${bottomColor || theme.onSurfaceVariant};
    `;
  }}

  ${FlexLayout({
    $alignItems: "center",
    $justifyContent: "space-between",
    $columnGap: "5px",
  })};

  ${({ $customStyle }) => $customStyle}
`;

const TextFieldInput = styled.input<{
  $fontColor: CSSProperties["color"];
  $customStyle: RuleSet;
}>`
  width: 100%;
  height: 100%;

  background-color: transparent;
  padding: 20px 0;

  outline: none;
  border: none;

  transition: all 0.2s ease-in-out;
  color: ${({ $fontColor, theme }) => $fontColor || theme.onSurface};

  ${DodamTypography.Body.Large};
  ${({ $customStyle }) => $customStyle}
`;

const SupportText = styled.p<{
  $isDisabled: boolean;
  $isError: boolean;
  $supportColor: FieldColorItemType;
  $customStyle: RuleSet;
}>`
  height: 23px;
  padding-top: 4px;
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
