// skeleton은 로딩 중인 콘텐츠의 레이아웃을 표현하는 시각적 패턴이다.
import { DodamShimmer } from "@dds-web/styles";
import React from "react";
import styled, { CSSProperties, RuleSet } from "styled-components";

export interface DodamSkeletonProps {
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  borderRadius?: CSSProperties["borderRadius"];
  customStyle?: RuleSet;
}

export const DodamSkeleton = ({
  width,
  height,
  borderRadius = "12px",
  customStyle,
}: DodamSkeletonProps) => {
  return (
    <StyledSkeleton
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $customStlye={customStyle!}
    />
  );
};

const StyledSkeleton = styled.div<{
  $width: CSSProperties["width"];
  $height: CSSProperties["height"];
  $borderRadius: CSSProperties["borderRadius"];
  $customStlye: RuleSet;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius};

  ${DodamShimmer}
  ${({ $customStlye }) => $customStlye}
`;
