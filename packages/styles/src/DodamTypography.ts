import { css, RuleSet } from "styled-components";

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
      font-family: "Suit-ExtraBold";
      font-size: 32px;
      line-height: 40px;
    `,
    Medium: css`
      font-family: "Suit-Bold";
      font-size: 28px;
      line-height: 32px;
    `,
    Small: css`
      font-family: "Suit-Bold";
      font-size: 24px;
      line-height: 32px;
    `,
  },
  Title: {
    Large: css`
      font-family: "Suit-Bold";
      font-size: 22px;
      line-height: 28px;
    `,
    Medium: css`
      font-family: "Suit-Bold";
      font-size: 18px;
      line-height: 26px;
    `,
    Small: css`
      font-family: "Suit-Bold";
      font-size: 16px;
      line-height: 24px;
    `,
  },
  Body: {
    Large: css`
      font-family: "Suit-SemiBold";
      font-size: 18px;
      line-height: 26px;
    `,
    Medium: css`
      font-family: "Suit-SemiBold";
      font-size: 16px;
      line-height: 24px;
    `,
    Small: css`
      font-family: "Suit-Medium";
      font-size: 14px;
      line-height: 20px;
    `,
  },
  Label: {
    Large: css`
      font-family: "Suit-Medium";
      font-size: 14px;
      line-height: 20px;
    `,
    Medium: css`
      font-family: "Suit-Medium";
      font-size: 12px;
      line-height: 16px;
    `,
    Small: css`
      font-family: "Suit-Normal";
      font-size: 11px;
      line-height: 16px;
    `,
  },
});
