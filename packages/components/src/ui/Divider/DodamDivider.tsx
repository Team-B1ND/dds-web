import React from "react";
import styled from "styled-components";

type Divider = "Large" | "Small";
type DirectionType = "horizontal" | "vertical";

interface DodamDividerProps {
  type: Divider;
  direction?: DirectionType;
}

export const DodamDivider = ({
  type,
  direction = "horizontal",
}: DodamDividerProps) => {
  return (
    <DividerContainer type={type} direction={direction}></DividerContainer>
  );
};

const DividerContainer = styled.div<{
  type: Divider;
  direction: DirectionType;
}>`
  width: ${({ type, direction }) =>
    direction === "horizontal" ? "100%" : type === "Large" ? "8px" : "1px"};
  height: ${({ type, direction }) =>
    direction === "vertical" ? "100%" : type === "Large" ? "8px" : "1px"};
  min-width: ${({ direction }) => direction === "horizontal" && "100px"};
  min-height: ${({ direction }) => direction === "vertical" && "100px"};
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.lineAlternative};
`;
