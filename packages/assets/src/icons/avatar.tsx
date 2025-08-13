import React from "react";
import { IconProps } from "./type";
import { StyledPath, StyledSvg,StyledCicle } from "./style";
import { AVATAR_ITEMS } from "./constant";

type sizeType = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'xxl';

interface Avatar extends Omit<IconProps, "size"> {
  size?: sizeType;
}

export const Avatar = ({ size = 'small', color="fillAlternative", $svgStyle, $pathStyle }: Avatar) => {
  const sized = {
    extraSmall: 16,
    small: 24,
    medium: 32,
    large: 36,
    extraLarge: 64,
    xxl: 128
  }[size] || 24;

  const paths = AVATAR_ITEMS[size] || AVATAR_ITEMS.small;

  return (
    <StyledSvg
      width={sized}
      height={sized}
      viewBox={`0 0 ${sized} ${sized}`} 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      $svgStyle={$svgStyle}
    >
      <g clipPath="url(#clip0_1877_22)">
        <StyledCicle color="fillNormal" cx={sized / 2} cy={sized / 2} r={sized / 2} />
        <StyledPath
          fillRule="evenodd"
          clipRule="evenodd"
          d={paths.path1}
          color={color}
          $pathStyle={$pathStyle}
        />
      </g>
      <defs>
        <clipPath id="clip0_1877_22">
          <StyledPath d={paths.path2} color={color} $pathStyle={$pathStyle} />
        </clipPath>
      </defs>
    </StyledSvg>
  );
};

