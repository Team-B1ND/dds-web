import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamLabel = ({
  text,
  scale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <LabelText scale={scale} customStyle={customStyle!} {...props}>
      {text}
    </LabelText>
  );
};

const LabelText = styled.p<{ scale: Scale; customStyle: RuleSet }>`
  margin: 0;
  ${({ scale }) => DodamTypography.Label[scale]}
  ${({ customStyle }) => customStyle}
`;
