import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styled, { CSSProperties, RuleSet, css } from 'styled-components';
import { DodamShape, DodamTheme, DodamTypography, ShapeSizeType } from '@dds-web/styles';
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

export interface DodamContentButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: number;
  typography?: typographyType;
  textTheme?: keyof DodamTheme;
  radius?: ShapeSizeType;
  padding?: CSSProperties['padding'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  customStyle?: RuleSet;
}

export const DodamContentButton = ({
  children,
  width,
  typography = ['Body1', 'Bold'],
  textTheme,
  radius = 'Medium',
  padding,
  onClick,
  customStyle,
  ...props
}: DodamContentButton) => {
  return (
    <StyledContentButton
      width={width}
      typography={typography!}
      textTheme={textTheme}
      radius={radius}
      padding={padding}
      customStyle={customStyle!}
      {...props}
      onClick={onClick}
    >
      {children}
    </StyledContentButton>
  );
};

const StyledContentButton = styled.button<{
  width?: number;
  typography: typographyType;
  textTheme?: keyof DodamTheme;
  radius: ShapeSizeType;
  padding: CSSProperties['padding'];
  customStyle: RuleSet;
}>`
  min-width: 40px;
  min-height: 40px;
  width: ${({ width }) => (width ? `${width}px` : '')};

  outline: none;
  border: none;
  cursor: pointer;

  padding: ${({ padding }) => padding};

  transition: all 0.15s ease-in-out;

  color: ${({ theme, textTheme }) => (textTheme ? theme[textTheme] : '')};
  background-color: transparent;

  ${FlexLayout({ alignItems: 'center', justifyContent: 'center' })};
  ${({ radius }) => DodamShape[radius]};
  ${({ typography }) => DodamTypography[typography[0]][typography[1]]}

  ${({ customStyle }) => customStyle}
`;
