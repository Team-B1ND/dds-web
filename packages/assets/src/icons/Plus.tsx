import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const Plus = ({ size = 20, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      <StyledPath
        d="M0 9.99993C0 10.7339 0.606057 11.3323 1.33231 11.3323H8.66986V18.6698C8.66986 19.3939 9.26614 20 9.99993 20C10.7339 20 11.3421 19.3939 11.3421 18.6698V11.3323H18.6698C19.3939 11.3323 20 10.7339 20 9.99993C20 9.26614 19.3939 8.65793 18.6698 8.65793H11.3421V1.33231C11.3421 0.606057 10.7339 0 9.99993 0C9.26614 0 8.66986 0.606057 8.66986 1.33231V8.65793H1.33231C0.606057 8.65793 0 9.26614 0 9.99993Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
