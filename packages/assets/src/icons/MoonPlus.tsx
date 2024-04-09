import React from "react";
import type { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";
import { MOON_PLUS_PATH_ITEMS } from "./constant";

export const MoonPlus = ({ size = 24, pathStyle, svgStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      svgStyle={svgStyle!}
    >
      {MOON_PLUS_PATH_ITEMS.map((item, idx) => (
        <StyledPath key={idx} d={item} pathStyle={pathStyle!} />
      ))}
    </StyledSvg>
  );
};
