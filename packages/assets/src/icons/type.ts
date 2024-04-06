import { SVGAttributes } from "react";
import { RuleSet } from "styled-components";

export interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
  size?: number;
  svgStyle?: RuleSet;
  pathStyle?: RuleSet;
}
