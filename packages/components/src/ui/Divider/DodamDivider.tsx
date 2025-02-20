import React from "react";
import styled from "styled-components";

type Divider = "Large" | "Small";

interface DodamDividerProps {
  type: Divider;
}

export const DodamDivider = ({ type }: DodamDividerProps) => {
  return (
    <DividerContainer type={type}>
        
    </DividerContainer>
  )
};

const DividerContainer = styled.div<{ type: Divider }>`
    min-width: 100px;
    width: 100%;
    height: ${({ type }) => (type === "Large" ? "8px" : "1px")};
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.lineAlternative}; 
`;
