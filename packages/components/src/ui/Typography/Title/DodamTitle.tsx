import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamTitle = ({
  text,
  scale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <TitleText scale={scale} customStyle={customStyle!} {...props}>
      {text}
    </TitleText>
  );
};

const TitleText = styled.p<{ scale: Scale; customStyle: RuleSet }>`
  margin: 0;
  ${({ scale }) => DodamTypography.Title[scale]}
  ${({ customStyle }) => customStyle}
`;
