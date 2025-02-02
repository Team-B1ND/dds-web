import { css, RuleSet } from 'styled-components';

export type BackgroundColorType = 'Primary' | 'Secondary' | 'Assisitive' | 'Negative';

export type BackgroundColorStyles = {
  Primary: RuleSet;
  Secondary: RuleSet;
  Assisitive: RuleSet;
  Negative: RuleSet;
};

export const DodamBackgroundColor: BackgroundColorStyles = Object.freeze({
  Primary: css`
    background-color: ${({ theme }) => theme.primaryNormal};
    color: ${({ theme }) => theme.labelStrong};

    &:disabled {
      opacity: 0.5;
      color: ${({ theme }) => theme.staticWhite};
    }
  `,
  Secondary: css`
    background-color: ${({ theme }) => theme.primaryAssisitive};
    color: ${({ theme }) => theme.primaryNormal};

    &:disabled {
      opacity: 0.5;
    }
  `,
  Assisitive: css`
    background-color: ${({ theme }) => theme.fillNormal};
    color: ${({ theme }) => theme.labelNeutral};

    &:disabled {
      opacity: 0.5;
    }
  `,
  Negative: css`
    background-color: ${({ theme }) => theme.statusNegative};
    color: ${({ theme }) => theme.staticWhite};

    &:disabled {
      opacity: 0.5;
    }
  `,
});
