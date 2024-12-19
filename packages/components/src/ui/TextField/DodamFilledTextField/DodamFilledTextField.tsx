import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import styled, { useTheme } from "styled-components";
import { XmarkCircle, Eye, EyeSlash } from "@dds-web/assets";
import { ExclamationmarkCircle } from "@dds-web/assets";
import { DodamShape, DodamTypography } from "@dds-web/styles";
import { hexToRgba } from "@dds-web/utils";

type InputType = "text" | "password";

interface DodamFilledTextFieldProps {
  type: InputType;
  label: string;
  value: string;
  isError: boolean;
  placeholder: string;
  isDisabled?: boolean;
  isShowValue?: boolean;
  supportingText?: string;
  onchange: ChangeEventHandler<HTMLInputElement>;
  onclickEye: MouseEventHandler<HTMLDivElement>;
  onclickXmark: MouseEventHandler<HTMLDivElement>;
}

export const DodamFilledTextField = ({
  type,
  label,
  value,
  isError,
  isDisabled,
  isShowValue,
  supportingText,
  placeholder,
  onchange,
  onclickEye,
  onclickXmark,
}: DodamFilledTextFieldProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <StyleFilledTextField>
        <StyledFilledTextFieldTitle
          isFocused={isFocused}
          isDisabled={isDisabled}
          isError={isError}>
          {label}
        </StyledFilledTextFieldTitle>
        <StyledFilledTextFieldInput
          isFocused={isFocused}
          isDisabled={isDisabled}
          isError={isError}>
          <input
            type={type === "text" ? "text" : isShowValue ? "text" : "password"}
            disabled={isDisabled}
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {value.trim().length > 0 &&
            (isError ? (
              <ExclamationmarkCircle color={theme.statusNegative} />
            ) : type === "text" ? (
              <div onClick={onclickXmark}>
                <XmarkCircle
                  color={hexToRgba(theme.labelAlternative, 0.5)}
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ) : isShowValue ? (
              <div onClick={onclickEye}>
                <Eye
                  color={theme.staticBlack}
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ) : (
              <div onClick={onclickEye}>
                <EyeSlash
                  color={theme.staticBlack}
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ))}
        </StyledFilledTextFieldInput>
      </StyleFilledTextField>
      <StyledFilledTextFieldSupportingText
        isDisabled={isDisabled}
        isError={isError}>
        {supportingText}
      </StyledFilledTextFieldSupportingText>
    </div>
  );
};

const StyleFilledTextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  width: 380px;
  height: 80px;
  position: relative;
`;

const StyledFilledTextFieldTitle = styled.span<{
  isFocused: boolean;
  isDisabled?: boolean;
  isError: boolean;
}>`
  color: ${({ isFocused, isDisabled, isError, theme }) =>
    isDisabled
      ? hexToRgba(theme.labelAlternative, 0.65)
      : isError
        ? theme.statusNegative
        : isFocused
          ? theme.primaryNormal
          : theme.labelAlternative};

  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}
`;

const StyledFilledTextFieldInput = styled.div<{
  isFocused: boolean;
  isDisabled?: boolean;
  isError: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  width: 100%;
  height: 56px;
  padding: 4px 12px 4px 16px;

  border: 1px solid
    ${({ isFocused, isDisabled, isError, theme }) =>
      isDisabled
        ? hexToRgba(theme.lineAlternative, 0.65)
        : isError
          ? theme.statusNegative
          : isFocused
            ? theme.primaryNormal
            : theme.lineAlternative};

  background-color: ${({ isFocused, isError }) =>
    isError
      ? hexToRgba("#E52222", 0.03)
      : isFocused
        ? hexToRgba("#008BFF", 0.03)
        : "transparent"};

  ${DodamShape["Medium"]}

  input {
    color: ${({ theme }) => theme.labelStrong};
    ${DodamTypography.Headline.Medium}
    background: transparent;
    width: 90%;
    height: 100%;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ isDisabled, theme }) =>
        isDisabled
          ? hexToRgba(theme.labelAlternative, 0.65)
          : theme.labelAlternative};
    }
  }

  div {
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
  }
`;

const StyledFilledTextFieldSupportingText = styled.span<{
  isDisabled?: boolean;
  isError: boolean;
}>`
  position: absolute;
  top: 85px;

  color: ${({ isDisabled, isError, theme }) =>
    isDisabled
      ? hexToRgba(theme.labelAlternative, 0.65)
      : isError
        ? theme.statusNegative
        : theme.labelAlternative};
  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}
`;
