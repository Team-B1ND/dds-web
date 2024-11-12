import { DodamLightTheme, DodamTypography, LabelStyle } from '@dds-web/styles';
import React from 'react';
import styled, { css } from 'styled-components';

type StatusType = 'default' | 'unfocused' | 'focused' | 'error' | 'disabled';

interface DodamTextFieldProps {
  id: string;
  name: string;
  status: StatusType;
  value: string;
  children: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  functions: (() => void) | string;
  labelStyle?: React.CSSProperties;
  supportingText?: string;
}

export const DodamTextField = ({
  id,
  name,
  value,
  children = '여기에 텍스트를 입력하세요.',
  onchange,
  functions,
  labelStyle,
  status,
  supportingText,
}: DodamTextFieldProps) => {
  return (
    <div style={{ position: 'relative' }}>
      <StyledTextField status={status}>
        <StyledTextFieldTextFieldInput
          required
          id={id}
          name={name}
          onChange={onchange}
          value={value}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (typeof functions === 'function') {
                functions();
              } else {
                const elemId = functions;
                document.getElementById(elemId)?.focus();
              }
            }
          }}
        />
        <label style={labelStyle}>{children}</label>
      </StyledTextField>
      <StyledSupportingText status={status}>{supportingText}</StyledSupportingText>
    </div>
  );
};

const StyledTextField = styled.div<{ status: StatusType }>`
  width: 380px;
  height: 47px;
  padding: 4px 0px;

  border: none;
  border-bottom: 1px solid #d1d1d1;

  position: relative;

  label {
    position: absolute;
    left: 5%;
    top: 80%;

    ${DodamTypography.Headline.Medium}
    color: ${({ theme }) => theme.labelStrong};

    transform: translateY(-90%);
    transition: all 0.2s ease;
    pointer-events: none;

    ${({ status }) => {
      return LabelStyle[status];
    }}
  }

  input {
    ${({ status }) => {
      if (status === 'default') {
        return css`
          color: ${({ theme }) => theme.labelAlternative};
        `;
      }
    }}
  }

  input:is(:focus, :valid) ~ label {
    ${DodamTypography.Label.Medium}
    color: ${({ theme }) => theme.labelAlternative};
    transform: translateY(-300%);
  }
`;

const StyledTextFieldTextFieldInput = styled.input`
  width: 97%;
  height: 45px;

  color: var(--Gray600, #787878);
  font-family: Assistant;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 200;
  border: none;
  border-bottom: 1px solid #d1d1d1;
  outline: none;
  padding-left: 3%;

  font-size: 18px;
  font-family: Assistant;

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

  &:focus {
    border: none;
  }
`;

const StyledSupportingText = styled.span<{ status: StatusType }>`
  ${DodamTypography.Label.Medium}
  color: ${({ theme }) => theme.labelAlternative};
  position: absolute;
  top: 55px;

  ${({ status }) => {
    if (status === 'error') {
      return css`
        color: ${({ theme }) => theme.statusNegative};
      `;
    }
  }}
`;
