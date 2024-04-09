import React from "react";
import type { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const ChevronDown = ({ size = 24, pathStyle, svgStyle }: IconProps) => {
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
        d="M12.001 17.75C12.3851 17.7459 12.7161 17.6023 13.009 17.298L21.629 8.49295C21.876 8.2365 22 7.93085 22 7.5616C22 6.83445 21.4293 6.25 20.6954 6.25C20.3378 6.25 20.0068 6.3956 19.7496 6.6477L12.003 14.597L4.2523 6.6477C3.9973 6.39765 3.6736 6.25 3.3046 6.25C2.5727 6.25 2 6.83445 2 7.5616C2 7.92675 2.124 8.2365 2.3803 8.49295L10.9931 17.298C11.2952 17.6044 11.619 17.75 12.001 17.75Z"
        pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};
