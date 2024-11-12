import { DodamLightTheme, DodamShape, DodamTypography } from '@dds-web/styles';
import React from 'react';
import styled, { RuleSet, css } from 'styled-components';
import { XmarkCircle } from '@dds-web/assets';
import { ExclamationmarkCircle } from '@dds-web/assets';

type StatusType = 'default' | 'unfocused' | 'focused' | 'error' | 'disabled';

interface DodamFilledTextFieldProps {
  label: string;
  value: string;
  supportingText?: string;
  placeholder: string;
  onchange: () => void;
  status: StatusType;
}

export const DodamFilledTextField = ({
  label,
  value,
  supportingText,
  placeholder,
  status,
  onchange,
}: DodamFilledTextFieldProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <StyleFilledTextField>
        <StyledFilledTextFieldTitle status={status}>{label}</StyledFilledTextFieldTitle>
        <StyledFilledTextFieldInput status={status}>
          <input placeholder={placeholder} value={value} onChange={onchange} />
          {status === 'error' ? (
            <ExclamationmarkCircle color={DodamLightTheme.statusNegative} />
          ) : status === 'default' || status === 'disabled' ? (
            <></>
          ) : (
            <XmarkCircle color={DodamLightTheme.labelAlternative} />
          )}
        </StyledFilledTextFieldInput>
      </StyleFilledTextField>
      <StyledFilledTextFieldSupportingText status={status}>{supportingText}</StyledFilledTextFieldSupportingText>
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

const StyledFilledTextFieldTitle = styled.span<{ status: StatusType }>`
  color: ${({ theme }) => theme.labelAlternative};
  font-feature-settings: 'ss10' on;
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

  border: 1px solid ${({ theme }) => theme.labelAlternative};
  ${DodamShape['Medium']}

  input {
    color: ${({ theme }) => theme.labelAlternative};
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
  top: 85px;

  color: ${({ theme }) => theme.labelAlternative};
  font-feature-settings: 'ss10' on;
  ${DodamTypography.Label.Medium}

  ${({ status }) => {
    if (status === 'error') {
      return css`
        color: ${({ theme }) => theme.statusNegative};
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
    color: ${({ theme }) => theme.labelAlternative};
  `,
  unfocused: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  focused: css`
    color: ${({ theme }) => theme.primaryNormal};
  `,
  disabled: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  error: css`
    color: ${({ theme }) => theme.statusNegative};
  `,
};

const InputStyle: Status = {
  default: css`
    background: ${({ theme }) => theme.backgroundNormal};
    input {
      color: ${({ theme }) => theme.labelAlternative};
      &::placeholder {
        color: ${({ theme }) => theme.labelAlternative};
      }
    }
  `,
  unfocused: css`
    background: ${({ theme }) => theme.backgroundNormal};
    input {
      color: ${({ theme }) => theme.labelStrong};
      &::placeholder {
        color: ${({ theme }) => theme.labelStrong};
      }
    }
  `,
  focused: css`
    background: linear-gradient(0deg, rgba(0, 139, 255, 0.03) 0%, rgba(0, 139, 255, 0.03) 100%),
      ${({ theme }) => theme.primaryNormal};
    input {
      color: ${({ theme }) => theme.labelStrong};
      &::placeholder {
        color: ${({ theme }) => theme.labelStrong};
      }
    }
    border: 1px solid ${({ theme }) => theme.primaryNormal};
  `,
  disabled: css`
    background: ${({ theme }) => theme.backgroundAlternative};
    input {
      color: ${({ theme }) => theme.labelAlternative};
      &::placeholder {
        color: ${({ theme }) => theme.labelAlternative};
      }
    }
  `,
  error: css`
    background: rgba(229, 30, 30, 0.03);
    border: 1px solid ${({ theme }) => theme.statusNegative};
    input {
      color: ${({ theme }) => theme.labelStrong};
      &::placeholder {
        color: ${({ theme }) => theme.labelStrong};
      }
    }
  `,
};
