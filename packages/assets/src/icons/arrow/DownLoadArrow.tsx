import React from "react";
import { IconProps } from "../type";
import { StyledSvg, StyledPath } from "../style";

export const DownLoadArrow = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
    return(
         <StyledSvg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              $svgStyle={$svgStyle!}
            >
                <StyledPath 
                    d="M19.7071 10.8107C20.0976 10.4202 20.0976 9.78699 19.7071 9.39646C19.3166 9.00594 18.6834 9.00594 18.2929 9.39646L12.8839 14.8055L12.8839 3.00002C12.8839 2.50002 12.5 2.00002 12 2.00002C11.4788 2.00002 11.1161 2.50002 11.1161 3.00002L11.1161 14.8055L5.70711 9.39646C5.31658 9.00594 4.68342 9.00594 4.29289 9.39646C3.90237 9.78699 3.90237 10.4202 4.29289 10.8107L11.1161 17.6339C11.6043 18.1221 12.3957 18.1221 12.8839 17.6339L19.7071 10.8107Z"
                    color={color!}
                    $pathStyle={$pathStyle!}
                />
                <StyledPath 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M4.95652 21C4.95652 20.4477 5.4237 20 6 20H18C18.5763 20 19.0435 20.4477 19.0435 21C19.0435 21.5523 18.5763 22 18 22L6 22C5.4237 22 4.95652 21.5523 4.95652 21Z"
                    color={color!}
                    $pathStyle={$pathStyle!}
                />
        </StyledSvg>
    )
}