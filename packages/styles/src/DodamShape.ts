import { css, RuleSet } from 'styled-components';

export type ShapeSizeType = 'Small' | 'Medium' | 'Large';

export type ShapeStyles = {
  Small: RuleSet;
  Medium: RuleSet;
  Large: RuleSet;
};

export const DodamShape: ShapeStyles = Object.freeze({
  Small: css`
    height: 32px;
    padding: 7px 12px;
    border-radius: 8px;
  `,
  Medium: css`
    height: 38px;
    padding: 13px 20px;
    border-radius: 10px;
  `,
  Large: css`
    height: 48px;
    padding: 13px 28px;
    border-radius: 12px;
  `,
});
