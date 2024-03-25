import React from "react";
import styled from "styled-components";

export interface LinearProps {
  width: string;
  height: string;
  gauge: number;
  borderRadius?: string;
}

export const DodamLinearProgress = ({
  width,
  height,
  gauge,
  borderRadius = "7px",
}: LinearProps) => {
  return (
    <LinearWrap width={width} height={height} borderRadius={borderRadius}>
      <LinearGuage guage={gauge} borderRadius={borderRadius} />
    </LinearWrap>
  );
};

const LinearWrap = styled.div<{
  width: string;
  height: string;
  borderRadius: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.secondary};

  position: relative;
  overflow: hidden;
`;

const LinearGuage = styled.div<{ guage: number; borderRadius: string }>`
  width: ${({ guage }) => guage}%;
  height: 100%;

  background-color: ${({ theme }) => theme.primary};
  transition: width 0.7s ease;

  border-top-right-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-right-radius: ${({ borderRadius }) => borderRadius};

  position: absolute;
  top: 0;
  left: 0;
`;
