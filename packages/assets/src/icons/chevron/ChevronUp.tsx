import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

export const ChevronUp = ({ size = 24, color = "staticBlack" , $svgStyle, $pathStyle }: IconProps) => {
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
        d="M11.999 6.25C11.6149 6.2541 11.2839 6.3977 10.991 6.702L2.371 15.507C2.124 15.7635 2 16.0691 2 16.4384C2 17.1655 2.5707 17.75 3.3046 17.75C3.6622 17.75 3.9932 17.6044 4.2504 17.3523L11.997 9.403L19.7477 17.3523C20.0027 17.6024 20.3264 17.75 20.6954 17.75C21.4273 17.75 22 17.1655 22 16.4384C22 16.0732 21.876 15.7635 21.6197 15.507L13.0069 6.702C12.7048 6.3956 12.381 6.25 11.999 6.25Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
