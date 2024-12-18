import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { XmarkCircle } from "@dds-web/assets";
import { ExclamationmarkCircle } from "@dds-web/assets";
import { DodamShape, DodamTypography } from "@dds-web/styles";
import { hexToRgba } from "@dds-web/utils";

interface DodamFilledTextFieldProps {
  label: string;
  value: string;
  isError: boolean;
  supportingText?: string;
  placeholder: string;
  onchange: () => void;
  onclick: () => void;
}

export const DodamFilledTextField = ({
  label,
  value,
  isError,
  supportingText,
  placeholder,
  onchange,
  onclick,
}: DodamFilledTextFieldProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <StyleFilledTextField>
        <StyledFilledTextFieldTitle isFocused={isFocused} isError={isError}>
          {label}
        </StyledFilledTextFieldTitle>
        <StyledFilledTextFieldInput isFocused={isFocused} isError={isError}>
          <input
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {value.trim().length > 0 &&
            (isError ? (
              <ExclamationmarkCircle color={theme.statusNegative} />
            ) : (
              <div onClick={onclick}>
                <XmarkCircle
                  color={hexToRgba(theme.labelAlternative, 0.5)}
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ))}
        </StyledFilledTextFieldInput>
      </StyleFilledTextField>
      <StyledFilledTextFieldSupportingText isError={isError}>
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
  isError: boolean;
}>`
  color: ${({ isFocused, isError, theme }) =>
    isError
      ? theme.statusNegative
      : isFocused
        ? theme.primaryNormal
        : theme.labelAlternative};

  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}
`;

const StyledFilledTextFieldInput = styled.div<{
  isFocused: boolean;
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
    ${({ isFocused, isError, theme }) =>
      isError
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
      color: ${({ theme }) => theme.labelAlternative};
    }
  }

  div {
    width: auto;
    height: auto;

    display: flex;
    align-items: center;
  }
`;

const StyledFilledTextFieldSupportingText = styled.span<{ isError: boolean }>`
  position: absolute;
  top: 85px;

  color: ${({ isError, theme }) =>
    isError ? theme.statusNegative : theme.labelAlternative};
  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}
`;
