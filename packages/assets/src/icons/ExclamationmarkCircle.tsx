import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const ExclamationmarkCircle = ({
  size = 24,
  color,
  customStyle,
}: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      customStyle={customStyle!}
    >
      <mask
        id="mask0_2_962"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path d="M22 2H2V22H22V2Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_962)">
        <StyledPath
          d="M21.6481 11.997C21.6481 17.4659 17.205 21.9939 11.8232 21.9939C6.45095 21.9939 2 17.4659 2 11.997C2 6.52 6.44315 2 11.8154 2C17.1971 2 21.6481 6.52 21.6481 11.997ZM10.6588 15.8973C10.6588 16.5293 11.1875 17.0026 11.8266 17.0026C12.464 17.0026 12.9894 16.5372 12.9894 15.8973C12.9894 15.2626 12.4718 14.7877 11.8266 14.7877C11.1798 14.7877 10.6588 15.2689 10.6588 15.8973ZM10.7983 7.8962L10.9321 12.7788C10.9502 13.3527 11.267 13.6681 11.8266 13.6681C12.3654 13.6681 12.6807 13.3623 12.6987 12.7753L12.8404 7.9041C12.8584 7.3128 12.4223 6.8918 11.8154 6.8918C11.2024 6.8918 10.7802 7.30485 10.7983 7.8962Z"
          color={color!}
        />
      </g>
    </StyledSvg>
  );
};
