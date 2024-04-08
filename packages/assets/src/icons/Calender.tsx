import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { CALENDER_PATH_ITEMS } from "./constant";

export const Calender = ({ size = 24, pathStyle, svgStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      svgStyle={svgStyle!}
    >
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM5 7C4.44772 7 4 7.44771 4 8V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V8C20 7.44772 19.5523 7 19 7H5Z"
        pathStyle={pathStyle!}
      />

      {CALENDER_PATH_ITEMS.map((item, idx) => (
        <StyledPath key={idx} d={item} pathStyle={pathStyle!} />
      ))}
    </StyledSvg>
  );
};
