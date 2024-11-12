import { RuleSet, css } from "styled-components";
import { DodamLightTheme } from "../DodamTheme";

interface StatusType {
  default: RuleSet;
  unfocused: RuleSet;
  focused: RuleSet;
  disabled: RuleSet;
  error: RuleSet;
}

export const LabelStyle: StatusType = {
  default: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  unfocused: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  focused: css`
    color: ${DodamLightTheme.primaryNormal};
  `,
  disabled: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  error: css`
    color: ${DodamLightTheme.statusNegative};
  `,
};

export const InputStyle: StatusType = {
  default: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  unfocused: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  focused: css`
    color: ${DodamLightTheme.primaryNormal};
  `,
  disabled: css`
    color: ${DodamLightTheme.labelAlternative};
  `,
  error: css`
    color: ${DodamLightTheme.statusNegative};
  `,
};
