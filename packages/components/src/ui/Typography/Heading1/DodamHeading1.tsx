import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamHeading1 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <Heading1Text fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </Heading1Text>
  );
};

const Heading1Text = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Heading1[fontScale]}
  ${({ customStyle }) => customStyle}
`;
