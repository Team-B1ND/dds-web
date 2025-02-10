import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

export const ArrowDown = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        <path d="M4 2V22H20V2H4Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3421_64)">
        <StyledPath
          d="M11.9838 22C12.2954 22 12.5975 21.8634 12.8231 21.6277L19.6119 14.7808C19.8487 14.5357 19.9656 14.2635 19.9656 13.9713C19.9656 13.3281 19.509 12.8522 18.8876 12.8522C18.5677 12.8522 18.2812 12.983 18.0875 13.1883L15.7494 15.5139L12.2401 19.3823L12.8995 19.7517L13.1094 16.1601V3.5295C13.1094 2.84765 12.6481 2.3841 11.9838 2.3841C11.3194 2.3841 10.8581 2.84765 10.8581 3.5295V16.1601L11.068 19.7517L11.7377 19.3823L8.2181 15.5139L5.87805 13.1883C5.6741 12.983 5.3979 12.8522 5.07805 12.8522C4.45663 12.8522 4 13.3281 4 13.9713C4 14.2635 4.10848 14.5357 4.37062 14.7978L11.1443 21.6277C11.37 21.8634 11.6721 22 11.9838 22Z"
          color={color!}
          $pathStyle={$pathStyle!}
        />
      </g>
    </StyledSvg>
  );
};
