import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { type RuleSet } from "styled-components";

export const DodamTitle = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <TitleText $fontScale={fontScale} $customStyle={customStyle!} {...props}>
      {text}
    </TitleText>
  );
};

const TitleText = styled.p<{ $fontScale: FontScale; $customStyle: RuleSet }>`
  margin: 0;
  ${({ $fontScale }) => DodamTypography.Title[$fontScale]}
  ${({ $customStyle }) => $customStyle}
`;
