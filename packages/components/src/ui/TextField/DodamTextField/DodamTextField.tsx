import { DodamTypography } from '@dds-web/styles';
import React, {
  ChangeEventHandler,
  CSSProperties,
  KeyboardEventHandler,
  useState,
} from 'react';
import styled, { CSSObject, useTheme } from 'styled-components';
import { Eye, EyeSlash, XmarkCircle, ExclamationmarkCircle } from '@dds-web/assets';
import { hexToRgba } from '@dds-web/utils';

type InputType = 'text' | 'password';

export interface DodamTextFieldProps {
  id: string;
  name: string;
  type: InputType;
  value: string;
  label: string;
  isError?: boolean;
  showIcon?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  width?: number;
  labelStyle?: CSSProperties;
  supportingText?: string;
  customStyle?: CSSObject;
  onRemoveClick?:()=>void;
}

export const DodamTextField = ({
  id,
  name,
  type,
  value,
  width,
  label = '텍스트를 입력하세요.',
  showIcon = true,
  onChange,
  onKeyDown,
  isDisabled,
  labelStyle,
  isError,
  supportingText,
  customStyle,
  onRemoveClick,
}: DodamTextFieldProps) => {
  const theme = useTheme();
  const [isShowValue, setIsShowValue] = useState(false);

  const handleClickEye = () => {
    setIsShowValue((prev) => !prev);
  };
  

  return (
    <div style={{ position: 'relative' }}>
      <StyledTextField width={width} isError={isError!} customStyle={customStyle}>
        <StyledTextFieldTextFieldInput
          required
          disabled={isDisabled}
          id={id}
          name={name}
          type={type === 'text' ? 'text' : isShowValue ? 'text' : 'password'}
          isError={isError!}
          onChange={onChange}
          value={value}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onKeyDown?.(e);
            }
          }}
        />
        <label style={labelStyle}>{label}</label>
        {showIcon &&
          value.trim().length > 0  &&
          (isError ? (
            <ExclamationmarkCircle
              color={theme.statusNegative}
              $svgStyle={{
                position: 'absolute',
                top: '20%',
                right: '4%',
              }}
            />
          ) : type === 'text' ? (
            <div onClick={onRemoveClick}>
              <XmarkCircle
                color={hexToRgba(theme.labelAlternative, 0.5)}
                $svgStyle={{
                  position: 'absolute',
                  top: '20%',
                  right: '4%',
                  cursor: 'pointer',
                }}
              />
            </div>
          ) : isShowValue ? (
            <div onClick={handleClickEye}>
              <Eye
                color={hexToRgba(theme.labelAlternative, 0.5)}
                $svgStyle={{
                  position: 'absolute',
                  top: '20%',
                  right: '4%',
                  cursor: 'pointer',
                }}
              />
            </div>
          ) : (
            <div onClick={handleClickEye}>
              <EyeSlash
                color={hexToRgba(theme.labelAlternative, 0.5)}
                $svgStyle={{
                  position: 'absolute',
                  top: '20%',
                  right: '4%',
                  cursor: 'pointer',
                }}
              />
            </div>
          ))}
        <StyledSupportingText isError={isError!}>{supportingText}</StyledSupportingText>
      </StyledTextField>
    </div>
  );
};

const StyledTextField = styled.div<{ isError: boolean; customStyle?: CSSObject; width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: 47px;
  padding: 4px 0px;

  border: none !important;
  border-radius: 0px !important;
  position: relative;

  ${({ customStyle }) => customStyle};

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
  border-bottom: 1.5px solid ${({ isError, theme }) => (isError ? theme.statusNegative : theme.lineNormal)};
  background-color: transparent;
  outline: none;

  &:disabled {
    border-bottom: 1.5px solid ${({ theme }) => hexToRgba(theme.lineNormal, 0.65)};
    background-color: transparent;
  }

  &:focus {
    border-bottom: 1.5px solid ${({ isError, theme }) => (isError ? theme.statusNegative : theme.primaryNormal)};
  }


  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 500px transparent inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.labelNormal} !important;
    background-color: transparent !important;
    background-clip: text !important;
  }
`;

const StyledSupportingText = styled.span<{ isError: boolean }>`
  ${DodamTypography.Label.Medium}
  color: ${({ isError, theme }) => (isError ? theme.statusNegative : theme.labelAlternative)};
`;
