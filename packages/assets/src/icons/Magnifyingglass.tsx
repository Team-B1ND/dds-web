import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";

export const Magnifyingglass = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle!}
    >
      <g clip-path="url(#clip0_251_142)">
        <StyledPath
          d="M2 10.1678C2 14.6758 5.65323 18.3374 10.147 18.3374C11.8182 18.3374 13.3518 17.8223 14.6305 16.953L19.2285 21.572C19.5164 21.8607 19.8977 21.9982 20.299 21.9982C21.1507 21.9982 21.7598 21.3527 21.7598 20.5086C21.7598 20.1116 21.6145 19.7411 21.3395 19.4653L16.7769 14.8635C17.7321 13.5458 18.2939 11.9257 18.2939 10.1678C18.2939 5.66158 14.6407 2 10.147 2C5.65323 2 2 5.66158 2 10.1678ZM4.29524 10.1678C4.29524 6.83439 6.8228 4 10.147 4C13.4711 4 15.9378 6.83439 15.9378 10.1678C15.9378 13.503 13.4711 16 10.147 16C6.8228 16 4.29524 13.503 4.29524 10.1678Z"
          color={color!}
          $pathStyle={$pathStyle!}
        />
      </g>
      <defs>
        <clipPath id="clip0_251_142">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(2 2)"
          />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};
