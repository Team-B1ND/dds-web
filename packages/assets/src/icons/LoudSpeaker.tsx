import React from "react";
import { StaticIconProps } from "./type";
import { LOUD_SPEAKER_PATH_ITEMS } from "./constant";

export const LoudSpeaker = ({ size = 24 }: StaticIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {LOUD_SPEAKER_PATH_ITEMS.map((item, idx) => (
        <path
          key={idx}
          d={item.d}
          fill={item.fill}
        />
      ))}
    </svg>
  );
};
