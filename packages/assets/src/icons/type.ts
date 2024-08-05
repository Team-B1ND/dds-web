import type { ComponentProps, SVGAttributes } from "react";
import type { RuleSet } from "styled-components";

export interface IconProps extends ComponentProps<"svg"> {
  size?: number;
  svgStyle?: RuleSet;
  pathStyle?: RuleSet;
}
