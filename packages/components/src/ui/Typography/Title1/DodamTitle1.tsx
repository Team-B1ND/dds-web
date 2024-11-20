import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamTitle1 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <Title1Text fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </Title1Text>
  );
};

const Title1Text = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Title1[fontScale]}
  ${({ customStyle }) => customStyle}
`;
