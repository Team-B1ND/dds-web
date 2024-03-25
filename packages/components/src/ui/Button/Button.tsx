import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { BUTTON_PRIMARY_STYLE, BUTTON_SIZE_STYLE } from "./constant";

type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
  size?: ButtonSize;
  label: string;
}

export const Button = ({
  isPrimary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton isPrimary={isPrimary} size={size} {...props}>
      {label}
    </StyledButton>
  );
};

const BaseButton = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;

  border: 0;
  border-radius: 3em;
  cursor: pointer;

  display: inline-block;
  line-height: 1;
`;

const StyledButton = styled(BaseButton)<{
  size: ButtonSize;
  isPrimary: boolean;
}>`
  ${({ size }) => BUTTON_SIZE_STYLE[size]}
  ${({ isPrimary }) =>
    BUTTON_PRIMARY_STYLE[isPrimary ? "primary" : "notPrimary"]}
`;
