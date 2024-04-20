import React from "react";
import styled from "styled-components";

export interface LinearProps {
  width: string;
  height: string;
  gauge: number;

  borderRadius?: string;
  color?: {
    trail?: string;
    path?: string;
  };
}

export const DodamLinearProgress = ({
  width,
  height,
  gauge,
  borderRadius = "7px",
  color,
}: LinearProps) => {
  return (
    <LinearWrap
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
      $trailColor={color?.trail!}
    >
      <LinearGuage
        $gauge={gauge}
        $borderRadius={borderRadius}
        $pathColor={color?.path!}
      />
    </LinearWrap>
  );
};

const LinearWrap = styled.div<{
  $width: string;
  $height: string;
  $borderRadius: string;
  $trailColor: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border-radius: ${({ $borderRadius }) => $borderRadius};
  background-color: ${({ $trailColor, theme }) =>
    $trailColor || theme.secondary};

  position: relative;
  overflow: hidden;
`;

const LinearGuage = styled.div<{
  $gauge: number;
  $borderRadius: string;
  $pathColor: string;
}>`
  width: ${({ $gauge }) => $gauge}%;
  height: 100%;

  background-color: ${({ $pathColor, theme }) => $pathColor || theme.primary};
  transition: width 0.7s ease;

  border-top-right-radius: ${({ $borderRadius }) => $borderRadius};
  border-bottom-right-radius: ${({ $borderRadius }) => $borderRadius};

  position: absolute;
  top: 0;
  left: 0;
`;
