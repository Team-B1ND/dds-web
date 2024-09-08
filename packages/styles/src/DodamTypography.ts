import { css, RuleSet } from "styled-components";

export type TextSize = {
  Bold: RuleSet;
  Medium: RuleSet;
  Regular: RuleSet;
};

export type TypographyStyles = {
  Title1: TextSize;
  Title2: TextSize;
  Title3: TextSize;
  Heading1: TextSize;
  Heading2: TextSize;
  Headline: TextSize;
  Body: TextSize;
  Label: TextSize;
  Caption1: TextSize;
  Caption2: TextSize;
};

export const DodamTypography: TypographyStyles = Object.freeze({
  Title1: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 36px;
      font-weight: 800;
      line-height: 130%;
      letter-spacing: -1.08px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 36px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -1.08px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 36px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -1.08px;
    `,
  },

  Title2: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 28px;
      font-weight: 800;
      line-height: 130%;
      letter-spacing: -0.84px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 28px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -0.84px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 28px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -0.84px;
    `,
  },

  Title3: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 24px;
      font-weight: 800;
      line-height: 130%;
      letter-spacing: -0.48px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 24px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -0.48px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 24px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -0.48px;
    `,
  },

  Heading1: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 22px;
      font-weight: 800;
      line-height: 130%;
      letter-spacing: -0.44px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 22px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: -0.44px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 22px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: -0.44px;
    `,
  },

  Heading2: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 20px;
      font-weight: 800;
      line-height: 140%;
      letter-spacing: -0.2px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: -0.2px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 20px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: -0.2px;
    `,
  },

  Headline: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 18px;
      font-weight: 700;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 18px;
      font-weight: 500;
      line-height: 150%;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 18px;
      font-weight: 800;
      line-height: 150%;
    `,
  },

  Body: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 16px;
      font-weight: 700;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 16px;
      font-weight: 500;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
  },

  Label: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 14px;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.28px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 14px;
      font-weight: 500;
      line-height: 140%;
      letter-spacing: 0.28px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 14px;
      font-weight: 400;
      line-height: 140%;
      letter-spacing: 0.28px;
    `,
  },

  Caption1: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 13px;
      font-weight: 600;
      line-height: 130%;
      letter-spacing: 0.39px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 13px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: 0.39px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 13px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: 0.39px;
    `,
  },

  Caption2: {
    Bold: css`
      font-family: "Pretendard";
      font-size: 12px;
      font-weight: 600;
      line-height: 130%;
      letter-spacing: 0.36px;
    `,
    Medium: css`
      font-family: "Pretendard";
      font-size: 12px;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: 0.36px;
    `,
    Regular: css`
      font-family: "Pretendard";
      font-size: 12px;
      font-weight: 400;
      line-height: 130%;
      letter-spacing: 0.36px;
    `,
  },
});
