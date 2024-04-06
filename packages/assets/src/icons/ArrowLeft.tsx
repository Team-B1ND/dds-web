import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const ArrowLeft = ({ size = 24, pathStyle, svgStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      svgStyle={svgStyle!}
    >
      <mask
        id="mask0_2_901"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="20"
        height="16"
      >
        <path d="M22 4H2V20H22V4Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_901)">
        <StyledPath
          d="M2 11.9838C2 12.2954 2.13662 12.5975 2.3723 12.8231L9.21925 19.6119C9.4643 19.8487 9.7365 19.9656 10.0287 19.9656C10.6719 19.9656 11.1478 19.509 11.1478 18.8876C11.1478 18.5677 11.017 18.2812 10.8117 18.0875L8.4861 15.7494L4.61771 12.2401L4.24832 12.8995L7.8399 13.1094H20.4705C21.1524 13.1094 21.6159 12.6481 21.6159 11.9838C21.6159 11.3194 21.1524 10.8581 20.4705 10.8581H7.8399L4.24832 11.068L4.61771 11.7377L8.4861 8.2181L10.8117 5.87805C11.017 5.6741 11.1478 5.3979 11.1478 5.07805C11.1478 4.45663 10.6719 4 10.0287 4C9.7365 4 9.4643 4.10848 9.20225 4.37062L2.3723 11.1443C2.13662 11.37 2 11.6721 2 11.9838Z"
          pathStyle={pathStyle!}
        />
      </g>
    </StyledSvg>
  );
};
