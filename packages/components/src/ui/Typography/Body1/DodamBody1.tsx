import React from "react";
import { FontScale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled, { RuleSet } from "styled-components";

export const DodamBody1 = ({
  text,
  fontScale = "Medium",
  customStyle,
  ...props
}: TypographyProps) => {
  return (
    <BodyText fontScale={fontScale} customStyle={customStyle!} {...props}>
      {text}
    </BodyText>
  );
};

const BodyText = styled.p<{ fontScale: FontScale; customStyle: RuleSet }>`
  margin: 0;
  ${({ fontScale }) => DodamTypography.Body1[fontScale]}
  ${({ customStyle }) => customStyle}
`;
