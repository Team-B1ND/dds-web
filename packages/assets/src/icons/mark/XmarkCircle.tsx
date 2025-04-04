import React from "react";
import { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const XmarkCircle = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        id="mask0_2_940"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path d="M22 2H2V22H22V2Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2_940)">
        <StyledPath
          d="M21.8559 11.9969C21.8559 17.4659 17.3657 21.9938 11.927 21.9938C6.498 21.9938 2 17.4659 2 11.9969C2 6.51995 6.49015 2 11.9192 2C17.3578 2 21.8559 6.51995 21.8559 11.9969ZM13.9331 7.8017L12.0372 10.6449H11.9788L10.0471 7.79205C9.76625 7.38385 9.54465 7.2371 9.1495 7.2371C8.6436 7.2371 8.2448 7.61765 8.2448 8.10075C8.2448 8.3547 8.30835 8.5303 8.5029 8.78945L10.7452 11.8796L8.38125 15.1426C8.21995 15.3701 8.15635 15.5456 8.15635 15.7837C8.15635 16.2572 8.5219 16.6077 9.02785 16.6077C9.40725 16.6077 9.6052 16.4672 9.90965 16.0351L11.8745 13.1902H11.9251L13.8684 16.0351C14.1562 16.4637 14.3752 16.6077 14.7501 16.6077C15.2797 16.6077 15.6628 16.2572 15.6628 15.7502C15.6628 15.5121 15.5896 15.3303 15.4204 15.1109L13.0897 11.9192L15.4361 8.71625C15.6149 8.4888 15.6785 8.28945 15.6785 8.069C15.6785 7.59385 15.3033 7.2371 14.7975 7.2371C14.4225 7.2371 14.1895 7.38905 13.9331 7.8017Z"
          color={color!}
          $pathStyle={$pathStyle!}
        />
      </g>
    </StyledSvg>
  );
};
