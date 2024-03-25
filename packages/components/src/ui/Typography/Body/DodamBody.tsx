import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled from "styled-components";

export const DodamBody = ({
  scale = "Medium",
  text,
  ...props
}: TypographyProps) => {
  return (
    <BodyText scale={scale} {...props}>
      {text}
    </BodyText>
  );
};

const BodyText = styled.p<{ scale: Scale }>`
  ${({ scale }) => DodamTypography.Body[scale]}
`;
