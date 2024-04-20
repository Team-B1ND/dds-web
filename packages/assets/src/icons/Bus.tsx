import React from "react";
import type { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const Bus = ({
  size = 24,
  pathStyle,
  svgStyle,
  ...props
}: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={svgStyle!}
      {...props}
    >
      <StyledPath
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.25 2C3.00736 2 2 3.00736 2 4.25V17.75C2 18.9926 3.00736 20 4.25 20H4.5V20.5C4.5 21.3284 5.17155 22 6 22H6.5C7.32845 22 8 21.3284 8 20.5V20H16V20.5C16 21.3284 16.6715 22 17.5 22H18C18.8284 22 19.5 21.3284 19.5 20.5V20H19.75C20.9926 20 22 18.9926 22 17.75V4.25C22 3.00736 20.9926 2 19.75 2H4.25ZM5.5 5C4.67158 5 4 5.67155 4 6.5V11.5C4 12.3285 4.67158 13 5.5 13H18.5C19.3284 13 20 12.3285 20 11.5V6.5C20 5.67155 19.3284 5 18.5 5H5.5ZM4 17.25C4 17.6642 4.33578 18 4.75 18H7.25C7.6642 18 8 17.6642 8 17.25V16.75C8 16.3358 7.6642 16 7.25 16H4.75C4.33578 16 4 16.3358 4 16.75V17.25ZM16.75 18C16.3358 18 16 17.6642 16 17.25V16.75C16 16.3358 16.3358 16 16.75 16H19.25C19.6642 16 20 16.3358 20 16.75V17.25C20 17.6642 19.6642 18 19.25 18H16.75Z"
        $pathStyle={pathStyle!}
      />
    </StyledSvg>
  );
};
