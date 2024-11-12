import { RuleSet, css } from 'styled-components';
import { DodamLightTheme } from '../DodamTheme';

interface StatusType {
  default: RuleSet;
  unfocused: RuleSet;
  focused: RuleSet;
  disabled: RuleSet;
  error: RuleSet;
}

export const LabelStyle: StatusType = {
  default: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  unfocused: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  focused: css`
    color: ${({ theme }) => theme.primaryNormal};
  `,
  disabled: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  error: css`
    color: ${({ theme }) => theme.statusNegative};
  `,
};

export const InputStyle: StatusType = {
  default: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  unfocused: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  focused: css`
    color: ${({ theme }) => theme.primaryNormal};
  `,
  disabled: css`
    color: ${({ theme }) => theme.labelAlternative};
  `,
  error: css`
    color: ${({ theme }) => theme.statusNegative};
  `,
};
