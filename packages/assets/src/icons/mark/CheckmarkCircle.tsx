import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";
import { CHECKMARK_CIRCLE_PATH_ITEMS } from "./constant";

export const CheckmarkCircle = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      <rect width="12" height="12" transform="translate(6 6)" fill="white" />
      {CHECKMARK_CIRCLE_PATH_ITEMS.map((item, idx) => (
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
