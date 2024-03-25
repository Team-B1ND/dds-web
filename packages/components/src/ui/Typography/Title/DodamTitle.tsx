import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled from "styled-components";

export const DodamTitle = ({
  scale = "Medium",
  text,
  ...props
}: TypographyProps) => {
  return (
    <TitleText scale={scale} {...props}>
      {text}
    </TitleText>
  );
};

const TitleText = styled.p<{ scale: Scale }>`
  ${({ scale }) => DodamTypography.Title[scale]}
`;
