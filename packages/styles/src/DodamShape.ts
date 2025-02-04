import { css, RuleSet } from 'styled-components';

export type ShapeSizeType = 'ExtraSmall' | 'Small' | 'Medium' | 'Large' | 'ExtraLarge';

export type ShapeStyles = {
  ExtraSmall: RuleSet;
  Small: RuleSet;
  Medium: RuleSet;
  Large: RuleSet;
  ExtraLarge: RuleSet;
};

export const DodamShape: ShapeStyles = Object.freeze({
  ExtraSmall: css`
    border-radius: 8px;
  `,
  Small: css`
    border-radius: 10px;
  `,
  Medium: css`
    border-radius: 12px;
  `,
  Large: css` 
    border-radius: 18px;
  `,
  ExtraLarge: css`
    border-radius: 28px;
  `,
});
