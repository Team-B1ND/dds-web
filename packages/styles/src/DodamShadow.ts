import { css } from "styled-components";
import { hexToRgba } from "@dds-web/utils";

export const DodamShadow = Object.freeze({
  Normal: css`
    box-shadow:
      0px 1px 2px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.12)},
      0px 0px 1px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)},
      0px 0px 1px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)};
  `,
  Emphasize: css`
    box-shadow:
      0px 2px 8px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.12)},
      0px 1px 4px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)},
      0px 0px 1px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)};
  `,
  Strong: css`
    box-shadow:
      0px 6px 12px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.12)},
      0px 4px 8px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)},
      0px 0px 4px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)};
  `,
  Heavy: css`
    box-shadow:
      0px 16px 20px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.12)},
      0px 8px 16px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)},
      0px 0px 8px 0px ${({ theme }) => hexToRgba(theme.labelStrong, 0.08)};
  `,
});
