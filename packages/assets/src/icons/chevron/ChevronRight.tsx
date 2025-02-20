import React from "react";
import { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const ChevronRight = ({ size = 24, color = "staticBlack" , $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      <StyledPath
        d="M17.75 11.999C17.7459 11.6149 17.6023 11.2839 17.298 10.991L8.49295 2.37099C8.2365 2.12404 7.93085 2 7.5616 2C6.83445 2 6.25 2.57072 6.25 3.30457C6.25 3.66223 6.3956 3.99323 6.6477 4.25035L14.597 11.997L6.6477 19.7477C6.39765 20.0027 6.25 20.3264 6.25 20.6954C6.25 21.4273 6.83445 22 7.5616 22C7.92675 22 8.2365 21.876 8.49295 21.6197L17.298 13.0069C17.6044 12.7048 17.75 12.381 17.75 11.999Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
