import React from "react";
import { IconProps } from "../type";
import { StyledPath, StyledSvg } from "../style";

export const EyeSlash = ({ size = 24, color = "staticBlack", $svgStyle, $pathStyle }: IconProps) => {
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
        d="M8.2585 10.361C8.037 10.881 7.924 11.441 7.926 12.006C7.926 14.2375 9.7135 16.1015 11.949 16.1015C12.514 16.1015 13.0515 15.9805 13.539 15.762L15.5285 17.7975C14.3795 18.2115 13.1675 18.4225 11.946 18.4215C6.096 18.4215 2 13.52 2 12.005C2 11.135 3.342 9.16002 5.591 7.63152L8.2585 10.361ZM21.8905 12.005C21.8905 12.872 20.5755 14.849 18.3335 16.379L15.6355 13.617C15.8485 13.121 15.9655 12.5755 15.9655 12.006C15.9655 9.71602 14.1665 7.91102 11.949 7.91102C11.4075 7.91002 10.871 8.01852 10.373 8.23102L8.401 6.21202C9.5375 5.80102 10.7375 5.59102 11.946 5.59102C17.871 5.59102 21.8905 10.486 21.8905 12.005ZM12.2435 14.437C12.147 14.451 12.0485 14.457 11.9485 14.457C10.6265 14.457 9.556 13.3605 9.556 12.005C9.556 11.904 9.562 11.805 9.575 11.7075L12.2435 14.437ZM14.336 12.005C14.336 12.095 14.331 12.1845 14.321 12.272L11.688 9.57652C11.773 9.56652 11.8605 9.56152 11.949 9.56152C13.271 9.56152 14.336 10.652 14.336 12.005ZM17.6045 18.6145C17.8305 18.8535 18.1895 18.8655 18.428 18.6145C18.6595 18.381 18.6595 18.0045 18.428 17.771L6.0375 5.09402C5.8175 4.86102 5.44 4.86102 5.2065 5.09402C4.988 5.31902 4.988 5.71352 5.2065 5.93752L17.6045 18.6145Z"
        color={color!}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
