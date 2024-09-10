import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamHeading2 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <Heading2Text fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </Heading2Text>
  );
};

const Heading2Text = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Heading2[fontScale]}
  ${({ customStyle }) => customStyle}
`;
