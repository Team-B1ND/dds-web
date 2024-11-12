import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg } from "./style";

export const Gear = ({ size = 24, color = "#000", $svgStyle, $pathStyle }: IconProps) => {
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
        d="M11.1398 22H12.8636C13.4209 22 13.838 21.6641 13.9568 21.1213L14.4311 19.1195C14.7559 19.0107 15.0713 18.8847 15.3464 18.7527L17.1007 19.8264C17.5615 20.1144 18.099 20.0667 18.4854 19.6836L19.6948 18.482C20.0811 18.0956 20.1333 17.5281 19.8264 17.0691L18.7562 15.3336C18.8958 15.0448 19.0201 14.7465 19.1118 14.4466L21.1324 13.9645C21.6752 13.8474 22.0034 13.4287 22.0034 12.8713V11.1792C22.0034 10.6312 21.6752 10.2142 21.1324 10.0937L19.1323 9.61332C19.0235 9.27476 18.8916 8.96711 18.7733 8.70917L19.8469 6.94205C20.1461 6.47791 20.1077 5.93866 19.7102 5.55568L18.4803 4.34289C18.0879 3.98552 17.6042 3.92056 17.1357 4.18134L15.3464 5.28661C15.079 5.1452 14.7713 5.02093 14.4328 4.9104L13.9568 2.88044C13.838 2.3376 13.4209 2 12.8636 2H11.1398C10.5825 2 10.1654 2.3376 10.0406 2.88214L9.56458 4.89157C9.23975 5.00041 8.9227 5.12637 8.63987 5.2755L6.86768 4.18134C6.39752 3.92056 5.90947 3.97611 5.51369 4.34629L4.29318 5.55568C3.89571 5.93866 3.85127 6.47791 4.15818 6.94205L5.22241 8.70917C5.11188 8.96711 4.97988 9.27476 4.87275 9.61332L2.87272 10.0937C2.32819 10.2142 2 10.6312 2 11.1792V12.8713C2 13.4287 2.32819 13.8474 2.87272 13.9645L4.89157 14.4466C4.98497 14.7465 5.10755 15.0448 5.23954 15.3336L4.17701 17.0691C3.86238 17.5281 3.92395 18.0956 4.31032 18.482L5.51199 19.6836C5.89667 20.0667 6.44365 20.1144 6.90439 19.8264L8.64927 18.7527C8.93379 18.8847 9.23975 19.0107 9.56458 19.1195L10.0406 21.1213C10.1654 21.6641 10.5825 22 11.1398 22ZM12.0025 15.297C10.1914 15.297 8.70802 13.8043 8.70802 11.9931C8.70802 10.1914 10.1914 8.70802 12.0025 8.70802C13.812 8.70802 15.2954 10.1914 15.2954 11.9931C15.2954 13.8043 13.812 15.297 12.0025 15.297Z"
        fill-opacity="0.85"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
