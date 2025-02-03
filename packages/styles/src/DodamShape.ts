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
    height: 32px;
    padding: 7px 12px;
    border-radius: 10px;
  `,
  Medium: css`
    height: 38px;
    padding: 13px 20px;
    border-radius: 12px;
  `,
  Large: css`
    height: 48px;
    padding: 13px 28px;
    border-radius: 18px;
  `,
  ExtraLarge: css`
    border-radius: 28px;
  `,
});
