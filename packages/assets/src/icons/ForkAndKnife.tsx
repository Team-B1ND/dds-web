import React from "react";
import type { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const ForkAndKnife = ({ size = 24, pathStyle, svgStyle }: IconProps) => {
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
        d="M7.53775 22C8.6591 22 9.3504 21.5774 9.33765 20.8581L9.07865 11.2566C9.07635 10.9158 9.25575 10.7107 9.67535 10.5829C11.4096 10.0655 12.1736 9.52115 12.0732 7.9544L11.71 2.76365C11.68 2.36335 11.3309 2.13321 10.775 2.13321C10.2399 2.13321 9.91395 2.37488 9.9186 2.78213L10.0099 7.81965C10.0145 8.12685 9.7346 8.31635 9.3125 8.31635C8.87535 8.31635 8.5792 8.1369 8.5769 7.84355L8.4451 2.62197C8.43235 2.23472 8.0914 2 7.53775 2C6.9841 2 6.6536 2.23472 6.64085 2.62197L6.51135 7.84355C6.50905 8.13385 6.2106 8.31635 5.77345 8.31635C5.35135 8.31635 5.06105 8.12685 5.06335 7.81965L5.15925 2.78213C5.16155 2.37488 4.84832 2.13321 4.3028 2.13321C3.74685 2.13321 3.39546 2.36488 3.36544 2.76365L3.0105 7.9544C2.89956 9.52115 3.66594 10.0655 5.4025 10.5829C5.82205 10.7107 5.99915 10.9158 5.99685 11.2566L5.7483 20.8581C5.731 21.5789 6.421 22 7.53775 22ZM17.649 14.5026L17.4002 20.8234C17.3643 21.5789 18.0729 22 19.1792 22C20.3132 22 21 21.6067 21 20.9013V2.65994C21 2.2232 20.557 2 20.06 2C19.5652 2 19.2357 2.17405 18.8172 2.57842C16.7414 4.51332 15.3173 8.2472 15.3173 11.6291V12.0809C15.3173 12.6885 15.6285 13.1146 16.3356 13.4263L17.0106 13.7317C17.48 13.9465 17.6721 14.1731 17.649 14.5026Z"
        pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};
