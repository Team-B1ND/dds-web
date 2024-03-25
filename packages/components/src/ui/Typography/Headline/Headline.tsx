import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled from "styled-components";

export const Headline = ({
  scale = "Medium",
  text,
  ...props
}: TypographyProps) => {
  return (
    <HeadlineText scale={scale} {...props}>
      {text}
    </HeadlineText>
  );
};

const HeadlineText = styled.p<{ scale: Scale }>`
  ${({ scale }) => DodamTypography.Headline[scale]}
`;
