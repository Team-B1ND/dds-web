import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

export const ArrowUp = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      <mask
        id="mask0_3421_64"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="2"
        width="16"
        height="20">
        <path d="M20 22V2H4V22H20Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3421_64)">
        <StyledPath
          d="M12.0162 2C11.7046 2 11.4025 2.13662 11.1769 2.3723L4.38805 9.21925C4.1513 9.4643 4.0344 9.7365 4.0344 10.0287C4.0344 10.6719 4.49105 11.1478 5.11245 11.1478C5.4323 11.1478 5.7188 11.017 5.91245 10.8117L8.2506 8.4861L11.7599 4.61771L11.1005 4.24832L10.8906 7.8399V20.4705C10.8906 21.1524 11.3519 21.6159 12.0162 21.6159C12.6806 21.6159 13.1419 21.1524 13.1419 20.4705V7.8399L12.932 4.24832L12.2623 4.61771L15.7819 8.4861L18.122 10.8117C18.3259 11.017 18.6021 11.1478 18.9219 11.1478C19.5434 11.1478 20 10.6719 20 10.0287C20 9.7365 19.8915 9.4643 19.6294 9.20225L12.8557 2.3723C12.63 2.13662 12.3279 2 12.0162 2Z"
          color={color!}
          $pathStyle={$pathStyle!}
        />
      </g>
    </StyledSvg>
  );
};
