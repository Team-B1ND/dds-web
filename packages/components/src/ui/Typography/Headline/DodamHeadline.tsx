import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamHeadline = ({
  text,
  scale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <HeadlineText scale={scale} customStyle={customStyle!} {...props}>
      {text}
    </HeadlineText>
  );
};

const HeadlineText = styled.p<{ scale: Scale; customStyle: RuleSet }>`
  margin: 0;
  ${({ scale }) => DodamTypography.Headline[scale]}
  ${({ customStyle }) => customStyle}
`;
