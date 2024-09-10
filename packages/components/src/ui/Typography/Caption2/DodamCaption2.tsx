import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamCaption2 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <Caption2Text fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </Caption2Text>
  );
};

const Caption2Text = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Caption1[fontScale]}
  ${({ customStyle }) => customStyle}
`;
