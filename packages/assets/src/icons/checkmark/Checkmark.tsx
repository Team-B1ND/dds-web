import React from "react";
import { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const Checkmark = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        d="M9.75225 22C10.5365 22 11.2193 21.6046 11.6839 20.8719L21.4597 5.34984C21.7355 4.86953 22 4.35273 22 3.85204C22 2.74032 21.0313 2 20.0032 2C19.3624 2 18.7688 2.38751 18.3063 3.11977L9.67671 17.2124L5.61493 11.947C5.07863 11.244 4.56239 11.0263 3.90319 11.0263C2.84925 11.0263 2 11.8959 2 12.9853C2 13.5221 2.2045 14.0046 2.56558 14.4867L7.73324 20.8879C8.31896 21.645 8.96026 22 9.75225 22Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
