import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

export const Pen = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.90893 21.2922L3.62893 22.0522C3.18418 22.1133 2.73657 21.9619 2.42012 21.6435C2.10367 21.3251 1.95511 20.8765 2.01893 20.4322L2.77893 15.1522C2.8776 14.4365 3.20773 13.7727 3.71893 13.2622L13.4689 3.52219C14.7243 2.2224 16.5833 1.70112 18.3315 2.1587C20.0796 2.61628 21.4448 3.9815 21.9024 5.72965C22.36 7.4778 21.8387 9.33681 20.5389 10.5922L10.7989 20.3522C10.2884 20.8634 9.62464 21.1935 8.90893 21.2922ZM12.2989 10.7022C12.0065 10.995 12.0065 11.4694 12.2989 11.7622C12.5918 12.0546 13.0661 12.0546 13.3589 11.7622L17.5689 7.55219C17.8443 7.25668 17.8362 6.79618 17.5506 6.51056C17.2649 6.22495 16.8044 6.21683 16.5089 6.49219L12.2989 10.7022Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
