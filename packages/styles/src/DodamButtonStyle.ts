import { css, RuleSet } from 'styled-components';

export type ButtonSizeType = 'Large' | 'Medium' | 'Small';

export type ButtonStyles = {
  Large: RuleSet;
  Medium: RuleSet;
  Small: RuleSet;
};

export const DodamButtonStyle: ButtonStyles = Object.freeze({
  Large: css`
    height: 48px;
    padding: 13px 28px;
    border-radius: 12px;
  `,
  Medium: css`
    height: 38px;
    padding: 13px 20px;
    border-radius: 10px;
  `,
  Small: css`
    height: 32px        ;
    padding: 7px 12px;
    border-radius: 8px;
  `,
});
