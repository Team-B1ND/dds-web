import { DodamLightTheme, DodamShape, DodamTypography } from "@dds-web/styles";
import React from "react";
import styled, { RuleSet, css } from "styled-components";
import { XmarkCircle } from "@dds-web/assets";
import { ExclamationmarkCircle } from "@dds-web/assets";

type StatusType = "default" | "unfocused" | "focused" | "error" | "disabled";

interface DodamFilledTextFieldProps {
  label: string;
  value: string;
  supportingText?: string;
  placeholder: string;
  onchange: () => void;
  status: StatusType;
}

export const DodamFilledTextField = ({
  label = "Label",
  value,
  supportingText = "supportingText",
  placeholder = "여기에 텍스트를 입력하세요.",
  status,
  onchange,
}: DodamFilledTextFieldProps) => {
  return (
    <>
      <StyleFilledTextField>
        <StyledFilledTextFieldTitle status={status}>{label}</StyledFilledTextFieldTitle>
        <StyledFilledTextFieldInput status={status}>
          <input placeholder={placeholder} value={value} onChange={onchange} />
          {status === "error" ? (
            <ExclamationmarkCircle color={DodamLightTheme.statusNegative} />
          ) : status === "default" || status === "disabled" ? (
            <></>
          ) : (
            <XmarkCircle color={DodamLightTheme.labelAlternative} />
          )}
        </StyledFilledTextFieldInput>
      </StyleFilledTextField>
      <StyledFilledTextFieldSupportingText status={status}>{supportingText}</StyledFilledTextFieldSupportingText>
    </>
  );
};

const StyleFilledTextField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  width: 380px;
  height: 80px;
`;

const StyledFilledTextFieldTitle = styled.span<{ status: StatusType }>`
  color: ${DodamLightTheme.labelAlternative};
  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}
  ${({ status }) => {
    return LabelStyle[status];
  }}
`;

const StyledFilledTextFieldInput = styled.div<{ status: StatusType }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  width: 100%;
  height: 56px;
  padding: 4px 12px 4px 16px;

  border: 1px solid ${DodamLightTheme.labelAlternative};
  ${DodamShape["Medium"]}

  input {
    color: ${DodamLightTheme.labelAlternative};
    ${DodamTypography.Headline.Medium}
    background: transparent;
    width: 90%;
    height: 100%;
    border: none;

    &:focus {
      outline: none;
    }
  }

  ${({ status }) => {
    return InputStyle[status];
  }}
`;

const StyledFilledTextFieldSupportingText = styled.span<{ status: StatusType }>`
  position: absolute;
  top: 94px;

  color: ${DodamLightTheme.labelAlternative};
  font-feature-settings: "ss10" on;
  ${DodamTypography.Label.Medium}

  ${({ status }) => {
    if (status === "error") {
      return css`
        color: ${DodamLightTheme.statusNegative};
      `;
    }
  }}
`;

interface Status {
  default: RuleSet;
  unfocused: RuleSet;
  focused: RuleSet;
  disabled: RuleSet;
  error: RuleSet;
}

const LabelStyle: Status = {
  default: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  unfocused: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  focused: css`
    color: ${DodamLightTheme.primaryNormal};
  `,
  disabled: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  error: css`
    color: ${DodamLightTheme.statusNegative};
  `,
};

const InputStyle: Status = {
  default: css`
    background: ${DodamLightTheme.backgroundNormal};
    input {
      color: ${DodamLightTheme};
      &::placeholder {
        color: ${DodamLightTheme.labelAlternative};
      }
    }
  `,
  unfocused: css`
    background: ${DodamLightTheme.backgroundNormal};
    input {
      color: ${DodamLightTheme.labelStrong};
      &::placeholder {
        color: ${DodamLightTheme.labelStrong};
      }
    }
  `,
  focused: css`
    background: rgba(0, 139, 255, 0.3);
    input {
      color: ${DodamLightTheme.labelStrong};
      &::placeholder {
        color: ${DodamLightTheme.labelStrong};
      }
    }
    border: 1px solid ${DodamLightTheme.primaryNormal};
  `,
  disabled: css`
    background: ${DodamLightTheme.backgroundAlternative};
    input {
      color: ${DodamLightTheme.labelAlternative};
      &::placeholder {
        color: ${DodamLightTheme.labelAlternative};
      }
    }
  `,
  error: css`
    background: rgba(229, 30, 30, 0.03);
    border: 1px solid ${DodamLightTheme.statusNegative};
    input {
      color: ${DodamLightTheme.labelStrong};
      &::placeholder {
        color: ${DodamLightTheme.labelStrong};
      }
    }
  `,
};
