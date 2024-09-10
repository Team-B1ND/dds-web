import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamCaption1 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <Caption1Text fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </Caption1Text>
  );
};

const Caption1Text = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Caption1[fontScale]}
  ${({ customStyle }) => customStyle}
`;
