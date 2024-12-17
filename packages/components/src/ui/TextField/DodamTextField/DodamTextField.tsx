import { DodamTypography } from "@dds-web/styles";
import React from "react";
import styled, { useTheme } from "styled-components";
import { XmarkCircle, ExclamationmarkCircle } from "@dds-web/assets";
import { hexToRgba } from "@dds-web/utils";

interface DodamTextFieldProps {
  id: string;
  name: string;
  value: string;
  children: string;
  isError: boolean;
  disabled?: boolean;
  onclick: () => void;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  keydown: (() => void) | string;
  width?: number;
  labelStyle?: React.CSSProperties;
  supportingText?: string;
}

export const DodamTextField = ({
  id,
  name,
  value,
  width = 380,
  children = "텍스트를 입력하세요.",
  onclick,
  onchange,
  keydown,
  disabled,
  labelStyle,
  isError,
  supportingText,
}: DodamTextFieldProps) => {
  const theme = useTheme();

  return (
    <div style={{ position: "relative" }}>
      <StyledTextField width={width} isError={isError}>
        <StyledTextFieldTextFieldInput
          required
          disabled={disabled}
          id={id}
          name={name}
          isError={isError}
          onChange={onchange}
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (typeof keydown === "function") {
                keydown();
              } else {
                const elemId = keydown;
                document.getElementById(elemId)?.focus();
              }
            }
          }}
        />
        <label style={labelStyle}>{children}</label>
        {value.trim().length > 0 &&
          (isError ? (
            <ExclamationmarkCircle
              color={theme.statusNegative}
              $svgStyle={{
                position: "absolute",
                top: "20%",
                right: "4%",
              }}
            />
          ) : (
            <div onClick={onclick}>
              <XmarkCircle
                color={hexToRgba(theme.labelAlternative, 0.5)}
                $svgStyle={{
                  position: "absolute",
                  top: "20%",
                  right: "4%",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
      </StyledTextField>
      <StyledSupportingText isError={isError}>
        {supportingText}
      </StyledSupportingText>
    </div>
  );
};

const StyledTextField = styled.div<{ width?: number; isError: boolean }>`
  width: ${({ width }) => `${width}px`};
  height: 47px;
  padding: 4px 0px;

  border: none;

  position: relative;

  label {
    position: absolute;
    left: 0;
    top: 80%;

    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.labelAlternative};

    transform: translateY(-90%);
    transition: all 0.2s ease;
    pointer-events: none;
  }

  input:focus ~ label {
    color: ${({ theme }) => theme.primaryNormal};
  }

  input:valid ~ label {
    color: ${({ isError, theme }) => isError && theme.statusNegative};
  }

  input:disabled ~ label {
    color: ${({ theme }) => hexToRgba(theme.labelAlternative, 0.65)};
  }

  input:is(:focus, :valid) ~ label {
    ${DodamTypography.Label.Medium}
    transform: translateY(-250%);
  }
`;

const StyledTextFieldTextFieldInput = styled.input<{ isError: boolean }>`
  width: 97%;
  height: 45px;

  color: ${({ theme }) => theme.labelStrong};
  ${DodamTypography.Headline.Medium}

  border: none;
  border-bottom: 1.5px solid
    ${({ isError, theme }) =>
      isError ? theme.statusNegative : theme.lineNormal};
  background-color: transparent;
  outline: none;

  &:disabled {
    border-bottom: 1.5px solid ${({ theme }) => hexToRgba(theme.lineNormal, 0.65)};
    background-color: transparent;
  }

  &:focus {
    border-bottom: 1.5px solid
      ${({ isError, theme }) =>
        isError ? theme.statusNegative : theme.primaryNormal};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const StyledSupportingText = styled.span<{ isError: boolean }>`
  ${DodamTypography.Label.Medium}
  color: ${({ isError, theme }) =>
    isError ? theme.statusNegative : theme.labelAlternative};
  position: absolute;
  top: 55px;
`;
