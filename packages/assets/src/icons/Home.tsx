import React from "react";
import { IconProps } from "./type";
import styled from "styled-components";
import { StyledSvg } from "./style";

export const Home = ({ size = 24, color, customStyle }: IconProps) => {
  return (
    <StyledHomeSvg
      width={size}
      height={size}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      customStyle={customStyle!}
      color={color!}
    >
      <path d="M2 11.9225C2 10.9779 2 10.5056 2.19739 10.0949C2.39479 9.68417 2.7636 9.38912 3.50122 8.79902L9.50122 3.99902C10.6994 3.04051 11.2984 2.56125 12 2.56125C12.7016 2.56125 13.3006 3.04051 14.4988 3.99902L20.4988 8.79902C21.2364 9.38912 21.6052 9.68417 21.8026 10.0949C22 10.5056 22 10.9779 22 11.9225V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H16C15.0572 22 14.5858 22 14.2929 21.7071C14 21.4142 14 20.9428 14 20V18C14 17.0572 14 16.5858 13.7071 16.2929C13.4142 16 12.9428 16 12 16C11.0572 16 10.5858 16 10.2929 16.2929C10 16.5858 10 17.0572 10 18V20C10 20.9428 10 21.4142 9.70711 21.7071C9.41421 22 8.94281 22 8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V11.9225Z" />
    </StyledHomeSvg>
  );
};

const StyledHomeSvg = styled(StyledSvg)<{ color: string }>`
  path {
    fill: ${({ color, theme }) => color || theme.onSurface};
  }
`;
