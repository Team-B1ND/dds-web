import React, { HTMLAttributes, MouseEventHandler } from 'react';
import styled, { CSSProperties, css, CSSObject } from 'styled-components';
import {
  BackgroundColorType,
  ButtonSizeType,
  DodamBackgroundColor,
  DodamButtonStyle,
  DodamTheme,
  DodamTypography,
} from '@dds-web/styles';
import { FlexLayout } from '../../../layout';

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

type attendantsType = 'right' | 'left';

export interface DodamFilledButton extends HTMLAttributes<HTMLButtonElement> {
  text?: React.ReactNode;
  children?: React.ReactNode;
  textTheme?: keyof DodamTheme;
  width?: number;
  enabled?: boolean;
  typography?: typographyType;
  backgroundColorType?: BackgroundColorType;
  size: ButtonSizeType;
  padding?: CSSProperties['padding'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customStyle?: CSSObject;
  icon?: React.ReactNode;
  attendants?: attendantsType;
}

export const DodamFilledButton = ({
  text,
  textTheme,
  children,
  width,
  enabled = true,
  typography = ['Body1', 'Bold'],
  backgroundColorType = 'Primary',
  size,
  padding,
  onClick,
  customStyle,
  icon,
  attendants='left',
  ...props
}: DodamFilledButton) => {
  return (
    <StyledContentButton
      textTheme={textTheme}
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
        {icon && <IconWrapper attendants={attendants}>{icon}</IconWrapper>}
      {text || children}
      
    </StyledContentButton>
  );
};

const StyledContentButton = styled.button<{
  width?: number;
  typography: typographyType;
  backgroundColorType: BackgroundColorType;
  textTheme?: keyof DodamTheme;
  padding: CSSProperties['padding'];
  size: ButtonSizeType;
  enabled?: boolean;
  customStyle: CSSObject;
}>`
  min-width: 40px;
  min-height: 40px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};

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

  color: ${({ theme, textTheme }) => (textTheme ? theme[textTheme] : '')};
`;

const IconWrapper = styled.span<{ attendants: attendantsType }>`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  
  svg {
    width: 16px;
    height: 16px;
  }

  order: ${({ attendants }) => (attendants === 'right' ? 1 : -1)};
`;