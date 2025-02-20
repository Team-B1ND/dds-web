import React, { HTMLAttributes, MouseEventHandler } from "react";
import styled, { CSSObject } from "styled-components";
import { Checkmark } from "@dds-web/assets";

type ButtonColor = "red" | "blue";

interface DodamCheckBoxProps {
  color?: ButtonColor;
  isDisabled: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  customStyle?: CSSObject;
}

export const DodamCheckBox = ({ 
  isDisabled = false, 
  color = "blue", 
  onClick,
  customStyle
  }: DodamCheckBoxProps) => {
  return (
    <>
      {isDisabled ? (
        <DisabledCheckBox 
          customStyle={customStyle} 
          color={color} 
          onClick={onClick}
          >
          <Checkmark size={12} color='staticWhite' />
        </DisabledCheckBox>
      ) : (
        <StyledCheckBox 
        customStyle={customStyle} 
        onClick={onClick} 
        />
      )}
    </>
  );
};

const StyledCheckBox = styled.div<{customStyle?:CSSObject}>`
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.lineNormal};
  border-radius: 4px;
  cursor: pointer;
  ${({ customStyle }) => customStyle}
`;

const DisabledCheckBox = styled.div<{ 
  color: ButtonColor
  customStyle?:CSSObject
  }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ color, theme }) => color === "blue" ? theme.primaryNormal : theme.statusNegative};
  background-color: ${({ color, theme }) => color === "blue" ? theme.primaryNormal : theme.statusNegative};
  border-radius: 4px;
  cursor: pointer;
  ${({ customStyle }) => customStyle}
`;
