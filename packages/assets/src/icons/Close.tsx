import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

export const Close = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        d="M4.92885 19.071C5.44782 19.59 6.29952 19.5846 6.81306 19.071L12.0015 13.8826L17.1899 19.071C17.7019 19.5831 18.5521 19.59 19.071 19.0711C19.59 18.5522 19.5915 17.6935 19.0794 17.1815L13.891 11.9931L19.0725 6.81161C19.5845 6.29956 19.59 5.44785 19.071 4.92888C18.5521 4.41002 17.6935 4.4085 17.1814 4.92055L12 10.102L6.81998 4.92203C6.30644 4.40849 5.44782 4.41002 4.92885 4.92898C4.40999 5.44785 4.4169 6.29803 4.93044 6.81158L10.1104 11.9916L4.922 17.18C4.40846 17.6935 4.40999 18.5522 4.92885 19.071Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
