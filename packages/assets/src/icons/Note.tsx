import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const Note = ({ size = 24, color = "#000", $svgStyle, $pathStyle }: IconProps) => {
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
        d="M21.6609 2.232C21.4458 2.04821 21.1616 1.96766 20.8813 2.01187L8.62325 3.94735C8.15295 4.02161 7.8065 4.42703 7.8065 4.9032V8.7742V14.9032H5.871C3.73652 14.9032 2 16.495 2 18.4516C2 20.4082 3.73652 22 5.871 22C8.00545 22 9.74195 20.4082 9.74195 18.4516V15.8709V9.6011L20.0646 7.9712V13.2903H18.129C15.9946 13.2903 14.2581 14.8821 14.2581 16.8387C14.2581 18.7953 15.9946 20.3871 18.129 20.3871C20.2635 20.3871 22 18.7952 22 16.8387V14.258V6.8387V2.96774C22 2.68473 21.8761 2.41586 21.6609 2.232Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
