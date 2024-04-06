import React from "react";
import { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const Eye = ({ size = 24, pathStyle, svgStyle }: IconProps) => {
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
        id="mask0_2_920"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="6"
        width="20"
        height="12"
      >
        <path d="M22 6H2V18H22V6Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_920)">
        <StyledPath
          d="M11.9462 18.0001C17.8773 18.0001 21.8903 13.4198 21.8903 12.0049C21.8903 10.5855 17.8712 6.01218 11.9462 6.01218C6.0961 6.01218 2 10.5855 2 12.0049C2 13.4198 6.0961 18.0001 11.9462 18.0001ZM11.9488 15.8324C9.71335 15.8324 7.9261 14.0908 7.9261 12.0062C7.9261 9.86547 9.71335 8.17986 11.9488 8.17986C14.1663 8.17986 15.9655 9.86677 15.9655 12.0062C15.9655 14.0908 14.1663 15.8324 11.9488 15.8324ZM11.9462 13.4305C12.7697 13.4305 13.4477 12.7873 13.4477 12.0087C13.4477 11.2231 12.7697 10.5774 11.9462 10.5774C11.1192 10.5774 10.4439 11.2231 10.4439 12.0087C10.4439 12.7873 11.1192 13.4305 11.9462 13.4305Z"
          pathStyle={pathStyle!}
        />
      </g>
    </StyledSvg>
  );
};
