import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { DEV_PATH_ITEMS } from "./constant";

export const Dev = ({ size = 24, color = "#000", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      {DEV_PATH_ITEMS.map((item, idx) => (
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
