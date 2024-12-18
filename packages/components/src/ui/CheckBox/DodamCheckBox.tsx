import React, { HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";
import { Checkmark } from "@dds-web/assets";

type ButtonColor = "red" | "blue";

interface DodamCheckBoxProps extends HTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  isDisabled: boolean;
  onclick: MouseEventHandler<HTMLDivElement>;
}

export const DodamCheckBox = ({ isDisabled = false, color = "blue", onclick }: DodamCheckBoxProps) => {
  return (
    <>
      {isDisabled ? (
        <DisabledCheckBox color={color} onClick={onclick}>
          <Checkmark size={12} color="white" />
        </DisabledCheckBox>
      ) : (
        <StyledCheckBox onClick={onclick} />
      )}
    </>
  );
};

const StyledCheckBox = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.lineNormal};
  border-radius: 4px;
  cursor: pointer;
`;

const DisabledCheckBox = styled.div<{ color: ButtonColor}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 2px solid ${({ color, theme }) => color === "blue" ? theme.primaryNormal : theme.statusNegative};
  background-color: ${({ color, theme }) => color === "blue" ? theme.primaryNormal : theme.statusNegative};
  border-radius: 4px;
  cursor: pointer;
`;
