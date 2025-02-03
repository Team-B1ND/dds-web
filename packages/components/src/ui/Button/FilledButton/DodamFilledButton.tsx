import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { DodamBackgroundColor, DodamShape, DodamTypography, ShapeSizeType } from '@dds-web/styles';
import { FlexLayout } from '../../../layout';
import { CSSObject } from 'styled-components';

type typographyType = [
  (
    | 'Title1'
    | 'Title2'
    | 'Title3'
    | 'Heading1'
    | 'Heading2'
    | 'Headline'
    | 'Body1'
    | 'Body2'
    | 'Label'
    | 'Caption1'
    | 'Caption2'
  ),
  'Bold' | 'Medium' | 'Regular',
];

type BackgroundColorType = 'Primary' | 'Secondary' | 'Assisitive' | 'Negative';

export interface DodamFilledButton extends HTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
  enabled?: boolean;
  typography?: typographyType;
  backgroundColorType?: BackgroundColorType;
  size: Extract<ShapeSizeType, 'Large' | 'Medium' | 'Small'>;
  padding?: CSSProperties['padding'];
  onclick?: MouseEventHandler<HTMLButtonElement>;
  customStyle?: CSSObject;
}

export const DodamFilledButton = ({
  text,
  enabled,
  typography = ['Body1', 'Bold'],
  backgroundColorType = 'Primary',
  size = 'Large',
  padding,
  onclick,
  customStyle,
  ...props
}: DodamFilledButton) => {
  return (
    <StyledContentButton
      typography={typography!}
      backgroundColorType={backgroundColorType!}
      padding={padding}
      enabled={enabled}
      size={size}
      customStyle={customStyle!}
      {...props}
      onClick={onclick}
    >
      {text}
    </StyledContentButton>
  );
};

const StyledContentButton = styled.button<{
  typography: typographyType;
  backgroundColorType: BackgroundColorType;
  padding: CSSProperties['padding'];
  size: ShapeSizeType;
  enabled?: boolean;
  customStyle: CSSObject;
}>`
  min-width: 40px;
  min-height: 40px;

  outline: none;
  border: none;
  cursor: pointer;

  padding: ${({ padding }) => padding};

  transition: all 0.15s ease-in-out;
  ${({ backgroundColorType, theme }) => css`
    color: ${theme.labelStrong};
    background-color: ${backgroundColorType || 'transparent'};

    &:active {
      transform: scale(0.95);
      color: ${theme.labelStrong};
      background-color: ${backgroundColorType || 'transparent'};
    }
  `}

  ${FlexLayout({ alignItems: 'center', justifyContent: 'center' })};
  ${({ size }) => DodamShape[size]};
  ${({ typography }) => DodamTypography[typography[0]][typography[1]]}
  ${({ enabled }) =>
    !enabled
      ? css`
          opacity: 0.5;
        `
      : css`
          opacity: 1;
        `}
  ${({ backgroundColorType }) => DodamBackgroundColor[backgroundColorType]}
  
  ${({ customStyle }) => customStyle}
`;
