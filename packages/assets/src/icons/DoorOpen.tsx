import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";
import { DOOR_OPEN_PATH_ITEMS } from "./constant";

export const DoorOpen = ({ size = 24, color = "#000", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      {DOOR_OPEN_PATH_ITEMS.map((item, idx) => (
        <StyledPath
          key={idx}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d={item}
          color={color!}
          $pathStyle={$pathStyle!}
        />
      ))}
    </StyledSvg>
  );
};
