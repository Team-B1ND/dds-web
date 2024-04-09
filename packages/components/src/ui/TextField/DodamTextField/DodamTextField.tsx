import { DodamTypography } from "@dds-web/styles";
import React, {
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from "react";
import styled, { CSSProperties, css } from "styled-components";
import { Column, FlexLayout, Row } from "../../../layout";

type FieldColorType = {
  labelColor?: CSSProperties["color"];
  textValueColor?: CSSProperties["color"];
  supportColor?: CSSProperties["color"];
  borderBottomColor?: CSSProperties["color"];
  errorColor?: CSSProperties["color"];
};

export interface DodamTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  labelText: string;
  supportText: string;

  icon?: ReactNode;
  isError?: boolean;
  colors?: FieldColorType;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
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
      ...props
    }: DodamTextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [focus, setFocus] = useState(false);

    return (
      <Column width={width}>
        <Column
          width={"100%"}
          height={height}
          customStyle={css`
            position: relative;
          `}
        >
          <StyledLabel
            isFocused={focus}
            isError={isError}
            errorColor={colors?.errorColor}
            fontColor={colors?.labelColor}
            isDisabled={disabled}
          >
            {labelText}
          </StyledLabel>

          <TextFieldWrap
            isFocused={focus}
            isError={isError}
            errorColor={colors?.errorColor}
            borderBottomColor={colors?.borderBottomColor}
            isDisabled={disabled}
          >
            <TextFieldInput
              fontColor={colors?.textValueColor}
              ref={ref}
              value={value}
              onFocus={() => setFocus(true)}
              onBlur={() => value.length <= 0 && setFocus(false)}
              disabled={disabled}
              {...props}
            />

            <Row alignItems="center" columnGap={16} padding={"0 0 10px 0"}>
              {focus && <>{icon}</>}
            </Row>
          </TextFieldWrap>
        </Column>

        <SupportText
          fontColor={colors?.supportColor}
          isError={isError}
          errorColor={colors?.errorColor}
          isDisabled={disabled}
        >
          {supportText || ""}
        </SupportText>
      </Column>
    );
  }
);

const StyledLabel = styled.label<{
  isFocused: boolean;
  isError: boolean;
  isDisabled: boolean;
  errorColor: CSSProperties["color"];
  fontColor: CSSProperties["color"];
}>`
  transition: all 0.2s ease-in-out;
  transform: translateY(-50%);

  pointer-events: none;
  position: absolute;
  opacity: ${({ isDisabled }) => isDisabled && "0.5"};

  ${({ isError, errorColor, isFocused, fontColor, theme }) => {
    let color = theme.onSurfaceVariant;

    let topPosition = isFocused ? "-7px" : "40%";

    let typographyStyle = isFocused
      ? DodamTypography.Label.Large
      : DodamTypography.Body.Large;

    if (isError) {
      color = errorColor || theme.error;
    } else if (isFocused) {
      color = fontColor || theme.primary;
    }

    return css`
      color: ${color};
      top: ${topPosition};
      ${typographyStyle};
    `;
  }};
`;

const TextFieldWrap = styled.div<{
  isFocused: boolean;
  isDisabled: boolean;
  isError: boolean;
  errorColor: CSSProperties["color"];
  borderBottomColor: CSSProperties["color"];
}>`
  width: 100%;
  height: 100%;

  transition: all 0.2s ease-in-out;
  opacity: ${({ isDisabled }) => isDisabled && "0.5"};

  ${({ isError, errorColor, borderBottomColor, isFocused, theme }) => {
    let bottomColor = theme.onSurfaceVariant;

    if (isError) {
      bottomColor = errorColor || theme.error;
    } else if (isFocused) {
      bottomColor = borderBottomColor || theme.primary;
    }

    return css`
      border-bottom: 1px solid ${bottomColor};
    `;
  }}

  ${FlexLayout({
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "5px",
  })};
`;

const TextFieldInput = styled.input<{
  fontColor: CSSProperties["color"];
}>`
  width: 100%;
  height: 100%;

  background-color: transparent;
  padding: 20px 0;

  outline: none;
  border: none;

  transition: all 0.2s ease-in-out;
  color: ${({ fontColor, theme }) => fontColor || theme.onSurface};
  ${DodamTypography.Body.Large};
`;

const SupportText = styled.p<{
  isDisabled: boolean;
  isError: boolean;
  errorColor: CSSProperties["color"];
  fontColor: CSSProperties["color"];
}>`
  height: 23px;
  padding-top: 4px;
  transition: all 0.2s ease-in-out;
  color: ${({ isError, errorColor, fontColor, theme }) =>
    isError ? errorColor || theme.error : fontColor || theme.onSurfaceVariant};

  opacity: ${({ isDisabled }) => isDisabled && "0.5"};

  ${DodamTypography.Body.Small}
`;
