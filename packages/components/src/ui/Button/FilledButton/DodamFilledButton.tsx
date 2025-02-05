import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styled, { CSSProperties, css } from 'styled-components';
import { BackgroundColorType, ButtonSizeType, DodamBackgroundColor, DodamButtonStyle, DodamTypography } from '@dds-web/styles';
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

export interface DodamFilledButton extends HTMLAttributes<HTMLButtonElement> {
  text?: React.ReactNode; 
  children?: React.ReactNode; 
  width?:number;
  enabled?: boolean;
  typography?: typographyType;
  backgroundColorType?: BackgroundColorType;
  size: ButtonSizeType;
  padding?: CSSProperties['padding'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customStyle?: CSSObject;
}

export const DodamFilledButton = ({
  text,
  children,
  width,
  enabled = true,
  typography = ['Body1', 'Bold'],
  backgroundColorType = 'Primary',
  size = 'Large',
  padding,
  onClick,
  customStyle,
  ...props
}: DodamFilledButton) => {
  return (
    <StyledContentButton
      width={width}
      typography={typography!}
      backgroundColorType={backgroundColorType}
      padding={padding}
      enabled={enabled!}
      size={size}
      customStyle={customStyle!}
      {...props}
      onClick={onClick}
    >
      {text || children}
    </StyledContentButton>
  );
};

const StyledContentButton = styled.button<{
  width?:number;
  typography: typographyType;
  backgroundColorType: BackgroundColorType;
  padding: CSSProperties['padding'];
  size: ButtonSizeType;
  enabled?: boolean;
  customStyle: CSSObject;
}>`
  min-width: 40px;
  min-height: 40px;
  width: ${({width})=> width ? `${width}px` : ''};
  
  outline: none;
  border: none;
  cursor: pointer;

  padding: ${({ padding }) => padding};

  transition: all 0.15s ease-in-out;

  ${FlexLayout({ alignItems: 'center', justifyContent: 'center' })};
  ${({ size }) => DodamButtonStyle[size]};
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
