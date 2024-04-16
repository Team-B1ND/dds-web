import React from "react";
import type { IconProps } from "./type";
import styled, { type RuleSet } from "styled-components";
import { StyledSvg } from "./style";

export const Megaphone = ({
  size = 24,
  pathStyle,
  svgStyle,
  ...props
}: IconProps) => {
  return (
    <StyledMegaphoneSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      svgStyle={svgStyle!}
      pathStyle={pathStyle!}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.0312 2C18.1719 2 17.4688 2.70312 17.4688 3.5625V20.4375C17.4688 21.2969 18.1719 22 19.0312 22C19.8906 22 20.5938 21.2969 20.5938 20.4375V14.6547C21.4375 14.1078 22 13.1703 22 12.0922C22 11.0141 21.4375 10.0453 20.5938 9.51405V3.5625C20.5938 2.70312 19.8906 2 19.0312 2ZM8.7031 16.6875H7.78125V21.2188C7.78125 21.6562 7.4375 22 7 22H4.8125C4.375 22 4.03125 21.6562 4.03125 21.2188V16.667C2.88277 16.5148 2 15.5346 2 14.3438V9.65625C2 8.3594 3.04688 7.3125 4.34375 7.3125H8.7031C9.03125 7.3125 9.34375 7.25 9.6406 7.125L16.375 4.1875V19.8125L9.6406 16.875C9.34375 16.75 9.03125 16.6875 8.7031 16.6875Z"
      />
    </StyledMegaphoneSvg>
  );
};

const StyledMegaphoneSvg = styled(StyledSvg)<{ pathStyle: RuleSet }>`
  path {
    fill: ${({ pathStyle, theme }) => pathStyle || theme.onSurface};
  }
`;
