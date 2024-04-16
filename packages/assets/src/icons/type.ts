import type { SVGAttributes } from "react";
import type { RuleSet } from "styled-components";

export interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
  size?: number;
  svgStyle?: RuleSet;
  pathStyle?: RuleSet;
}
