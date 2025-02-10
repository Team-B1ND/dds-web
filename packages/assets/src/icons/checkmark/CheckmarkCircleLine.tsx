import React from "react";
import { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";
import { CHECKMARK_CIRCLE_LINE_PATH_ITEMS } from "./constant";

export const CheckmarkCircleLine = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      {CHECKMARK_CIRCLE_LINE_PATH_ITEMS.map((item, idx) => (
        <StyledPath 
          key={idx} 
          d={item} 
          color={color!}
          $pathStyle={$pathStyle!}
        />
      ))}
    </StyledSvg>
  );
};
