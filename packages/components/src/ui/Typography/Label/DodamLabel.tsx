import React from "react";
import { Scale, TypographyProps } from "../type";
import { DodamTypography } from "@dds-web/styles";
import styled from "styled-components";

export const DodamLabel = ({
  scale = "Medium",
  text,
  ...props
}: TypographyProps) => {
  return (
    <LabelText scale={scale} {...props}>
      {text}
    </LabelText>
  );
};

const LabelText = styled.p<{ scale: Scale }>`
  ${({ scale }) => DodamTypography.Label[scale]}
`;
