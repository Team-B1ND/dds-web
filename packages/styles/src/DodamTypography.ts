import { css, type RuleSet } from "styled-components";

export type TextSize = {
  Large: RuleSet;
  Medium: RuleSet;
  Small: RuleSet;
};

export type TypographyStyles = {
  Headline: TextSize;
  Title: TextSize;
  Body: TextSize;
  Label: TextSize;
};

export const DodamTypography: TypographyStyles = Object.freeze({
  Headline: {
    Large: css`
      font-family: "Suit-ExtraBold" !important;
      font-size: 32px;
      line-height: 40px;
    `,
    Medium: css`
      font-family: "Suit-Bold" !important;
      font-size: 28px;
      line-height: 32px;
    `,
    Small: css`
      font-family: "Suit-Bold" !important;
      font-size: 24px;
      line-height: 32px;
    `,
  },
  Title: {
    Large: css`
      font-family: "Suit-Bold" !important;
      font-size: 22px;
      line-height: 28px;
    `,
    Medium: css`
      font-family: "Suit-Bold" !important;
      font-size: 18px;
      line-height: 26px;
    `,
    Small: css`
      font-family: "Suit-Bold" !important;
      font-size: 16px;
      line-height: 24px;
    `,
  },
  Body: {
    Large: css`
      font-family: "Suit-SemiBold" !important;
      font-size: 18px;
      line-height: 26px;
    `,
    Medium: css`
      font-family: "Suit-SemiBold" !important;
      font-size: 16px;
      line-height: 24px;
    `,
    Small: css`
      font-family: "Suit-Medium" !important;
      font-size: 14px;
      line-height: 20px;
    `,
  },
  Label: {
    Large: css`
      font-family: "Suit-Medium" !important;
      font-size: 14px;
      line-height: 20px;
    `,
    Medium: css`
      font-family: "Suit-Medium" !important;
      font-size: 12px;
      line-height: 16px;
    `,
    Small: css`
      font-family: "Suit-Normal" !important;
      font-size: 11px;
      line-height: 16px;
    `,
  },
});
