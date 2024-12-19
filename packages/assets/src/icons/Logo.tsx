import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { DODAM_LOGO_PATH_ITEMS } from "./constant";

export const DodamLogo = ({size = 20, color = "#000",$svgStyle, $pathStyle}:IconProps)=>{
    return(
        <StyledSvg
        width="120"
        height="40"
        viewBox="10 0 100 50" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        $svgStyle={$svgStyle!}
        >
            
        {DODAM_LOGO_PATH_ITEMS.map((item, idx) => (
          <StyledPath 
            key={idx} 
            d={item}
            color={color!}
            $pathStyle={$pathStyle!}
            />
          ))}

        </StyledSvg>
    )
}

