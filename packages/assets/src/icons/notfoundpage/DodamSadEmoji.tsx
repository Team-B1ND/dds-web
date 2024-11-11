import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";
import { DODAM_SAD_EMOJI_PATH_ITEMS } from "./constant";

export const DodamSadEmoji = ({ size, color = "#000", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width="38"
      height="30"
      viewBox="0 0 38 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      {DODAM_SAD_EMOJI_PATH_ITEMS.map((item, idx) => (
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