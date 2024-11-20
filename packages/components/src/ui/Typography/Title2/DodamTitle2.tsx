import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamTitle2 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <Title2Text fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </Title2Text>
  );
};

const Title2Text = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Title2[fontScale]}
  ${({ customStyle }) => customStyle}
`;
