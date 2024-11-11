import React from "react";
import { StaticIconProps } from "../type";

export const School = ({ size = 24 }: StaticIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="24" height="24" fill="url(#pattern0_3395_139)" />
      <defs>
        <pattern
          id="pattern0_3395_139"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use xlinkHref="#image0_3395_139" transform="scale(0.000976562)" />
        </pattern>
        <image
          id="image0_3395_139"
          width="1024"
          height="1024"
        />
      </defs>
    </svg>
  );
};