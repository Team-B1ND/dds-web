import React from "react";
import styled from "styled-components";

export interface DodamCircularProgressProps {
  size: number;
  gauge: number;
  strokeWidth: number;

  color?: {
    trail?: string;
    path?: string;
  };

  minValue?: number;
  maxValue?: number;
}

export const DodamCircularProgress = ({
  size,
  gauge,
  strokeWidth,
  color,
  minValue = 0,
  maxValue = 100,
}: DodamCircularProgressProps) => {
  // progress 값을 minValue와 maxValue 사이의 값으로 조정하여 프로그래스바의 범위 값 계산
  const adjustedProgressGauge = Math.min(Math.max(gauge, minValue), maxValue);

  const radius = (size - strokeWidth) / 2; // 반지름 계산

  const circumference = 2 * Math.PI * radius; // 둘레 계산

  const offset =
    circumference - (adjustedProgressGauge / maxValue) * circumference;

  return (
    <StyledCircularProgress width={size} height={size}>
      <TrailCircle
        trailColor={color?.trail!}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />

      <PathCircle
        pathColor={color?.path!}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </StyledCircularProgress>
  );
};

const StyledCircularProgress = styled.svg`
  transform: rotate(-90deg); /* 시작 위치를 12시 방향으로 조정 */
`;

const BaseCircle = styled.circle`
  fill: none;
  transition: all 0.7s ease-in-out;
`;

const TrailCircle = styled(BaseCircle)<{ trailColor: string }>`
  stroke: ${({ trailColor, theme }) => trailColor || theme.secondary};
`;

const PathCircle = styled(BaseCircle)<{ pathColor: string }>`
  stroke: ${({ pathColor, theme }) => pathColor || theme.primary};
`;
