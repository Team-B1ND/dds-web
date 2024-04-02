import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamBody = ({
  text,
  scale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <BodyText scale={scale} customStyle={customStyle!} {...props}>
      {text}
    </BodyText>
  );
};

const BodyText = styled.p<{ scale: Scale; customStyle: RuleSet }>`
  margin: 0;
  ${({ scale }) => DodamTypography.Body[scale]}
  ${({ customStyle }) => customStyle}
`;
