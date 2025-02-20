import React from "react";
import { IconProps } from "./type";
import { StyledSvg, StyledPath } from "./style";
import { DODAM_LOGO_PATH_ITEMS } from "./constant";

export const DodamLogo = ({ color = "staticBlack",$svgStyle, $pathStyle}:IconProps)=>{
    return(
        <StyledSvg
        width="84"
        height="21"
        viewBox="0 0 84 21" 
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

