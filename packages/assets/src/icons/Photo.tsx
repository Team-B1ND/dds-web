import React from 'react';
import { StyledPath, StyledSvg } from './style';
import { IconProps } from './type';

export const Photo = ({ size = 24, color = 'statiBlack', $pathStyle, $svgStyle }: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
        color={color}
        $pathStyle={$pathStyle!}
      />
    </StyledSvg>
  );
};
