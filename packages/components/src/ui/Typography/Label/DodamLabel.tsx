import React from "react";
import type { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { type RuleSet } from "styled-components";

export const DodamLabel = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <LabelText $fontScale={fontScale} $customStyle={customStyle!} {...props}>
      {text}
    </LabelText>
  );
};

const LabelText = styled.p<{ $fontScale: FontScale; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontScale }) => DodamTypography.Label[$fontScale]}
  ${({ $customStyle }) => $customStyle}
`;
