import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

export const ArrowRight = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        style={{ maskType: "luminance"}}
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="20"
        height="16">
        <path d="M2 20H22V4H2V20Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3421_64)">
        <StyledPath
          d="M22 12.0162C22 11.7046 21.8634 11.4025 21.6277 11.1769L14.7808 4.38805C14.5357 4.1513 14.2635 4.0344 13.9713 4.0344C13.3281 4.0344 12.8522 4.49105 12.8522 5.11245C12.8522 5.4323 12.983 5.7188 13.1883 5.91245L15.5139 8.2506L19.3823 11.7599L19.7517 11.1005L16.1601 10.8906H3.5295C2.84765 10.8906 2.3841 11.3519 2.3841 12.0162C2.3841 12.6806 2.84765 13.1419 3.5295 13.1419H16.1601L19.7517 12.932L19.3823 12.2623L15.5139 15.7819L13.1883 18.122C12.983 18.3259 12.8522 18.6021 12.8522 18.9219C12.8522 19.5434 13.3281 20 13.9713 20C14.2635 20 14.5357 19.8915 14.7978 19.6294L21.6277 12.8557C21.8634 12.63 22 12.3279 22 12.0162Z"
          color={color!}
          $pathStyle={$pathStyle!}
        />
      </g>
    </StyledSvg>
  );
};
