import React, {
  useState,
  ChangeEventHandler,
  KeyboardEventHandler,
} from "react";
import styled, { CSSObject, useTheme } from "styled-components";
import { XmarkCircle, Eye, EyeSlash } from "@dds-web/assets";
import { ExclamationmarkCircle } from "@dds-web/assets";
import { DodamShape, DodamTypography } from "@dds-web/styles";
import { hexToRgba } from "@dds-web/utils";

type InputType = "text" | "password";

export interface DodamFilledTextFieldProps {
  type: InputType;
  label: string;
  isError?: boolean;
  width?: number;
  name?: string;
  value: string;
  placeholder: string;
  isDisabled?: boolean;
  supportingText?: string;
  showIcon?: boolean;
  customStyle?: CSSObject;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onRemoveClick?: () => void;
}

/**
 * @param label - 텍스트 필드의 placeholder 역할이자 라벨 텍스트
 */

export const DodamFilledTextField = ({
  type,
  label,
  isError,
  width,
  name,
  value,
  isDisabled,
  supportingText,
  placeholder,
  showIcon = true,
  customStyle,
  onChange,
  onKeyDown,
  onRemoveClick,
}: DodamFilledTextFieldProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isShowValue, setIsShowValue] = useState(false);

  const handleClickEye = () => {
    setIsShowValue((prev) => !prev);
  };

  return (
    <div style={{ position: "relative" }}>
      <StyleFilledTextField width={width} customStyle={customStyle}>
        <StyledFilledTextFieldTitle
          isFocused={isFocused}
          isDisabled={isDisabled}
          isError={isError!}>
          {label}
        </StyledFilledTextFieldTitle>
        <StyledFilledTextFieldInput
          isFocused={isFocused}
          isDisabled={isDisabled}
          isError={isError!}>
          <input
            name={name}
            type={type === "text" ? "text" : isShowValue ? "text" : "password"}
            disabled={isDisabled}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {showIcon &&
            value.trim().length > 0 &&
            (isError ? (
              <ExclamationmarkCircle color={theme.statusNegative} />
            ) : type === "text" ? (
              <div onClick={onRemoveClick}>
                <XmarkCircle
                  color={hexToRgba(theme.labelAlternative, 0.5)}
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ) : isShowValue ? (
              <div onClick={handleClickEye}>
                <Eye
                  color={hexToRgba(theme.labelAlternative, 0.5)}
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ) : (
              <div onClick={handleClickEye}>
                <EyeSlash
                  color="staticBlack"
                  $svgStyle={{ cursor: "pointer" }}
                />
              </div>
            ))}
        </StyledFilledTextFieldInput>
      </StyleFilledTextField>
      <StyledFilledTextFieldSupportingText
        isDisabled={isDisabled}
        isError={isError!}>
        {supportingText}
      </StyledFilledTextFieldSupportingText>
    </div>
  );
};

const StyleFilledTextField = styled.div<{
  customStyle?: CSSObject;
  width?: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 80px;
  position: relative;

  ${({ customStyle }) => customStyle};
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

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 500px transparent inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.labelNormal} !important;
      background-color: transparent !important;
      background-clip: text !important;
    }

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
  color: ${({ isDisabled, isError, theme }) =>
    isDisabled
      ? hexToRgba(theme.labelAlternative, 0.65)
      : isError
        ? theme.statusNegative
        : theme.labelAlternative};
  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}
`;
