import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";
import { STATUS_CODE_PATH_ITEMS }from "./constant";

export const StatusCode = ({ size, color, customStyle }: IconProps) => {
  return (
    <StyledSvg
      width="452"
      height="152"
      viewBox="0 0 452 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      customStyle={customStyle!}>
      {STATUS_CODE_PATH_ITEMS.map((item, idx) => (
        <StyledPath key={idx} d={item} color={color!} /> 
      ))}
    </StyledSvg>
  );
};
