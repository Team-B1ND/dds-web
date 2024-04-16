import React from "react";
import type { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const CheckmarkCircleFilled = ({
  size = 24,
  pathStyle,
  svgStyle,
  ...props
}: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      svgStyle={svgStyle!}
      {...props}
    >
      <StyledPath
        d="M22.0017 12C22.0017 17.4707 17.4786 22 12 22C6.53105 22 2 17.4707 2 12C2 6.52138 6.52312 2 11.9921 2C17.4707 2 22.0017 6.52138 22.0017 12ZM14.8923 8.18281L10.8892 14.5922L9.0233 12.223C8.77429 11.9036 8.54213 11.8007 8.23525 11.8007C7.74388 11.8007 7.35277 12.2008 7.35277 12.6939C7.35277 12.9392 7.44164 13.1626 7.61473 13.3841L9.98711 16.2701C10.258 16.6211 10.5569 16.7792 10.9209 16.7792C11.2832 16.7792 11.5971 16.6017 11.8195 16.2631L16.3486 9.20725C16.484 8.98476 16.6011 8.74814 16.6011 8.52472C16.6011 8.01746 16.1572 7.67824 15.6737 7.67824C15.3767 7.67824 15.1024 7.8523 14.8923 8.18281Z"
        pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};
