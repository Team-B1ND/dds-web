import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamHeadline = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <HeadlineText fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </HeadlineText>
  );
};

const HeadlineText = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Headline[fontScale]}
  ${({ customStyle }) => customStyle}
`;
