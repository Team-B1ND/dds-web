import { RuleSet } from "styled-components";

export interface StaticIconProps {
  size?: number;
}

export interface IconProps extends StaticIconProps {
  color?: string;
  $svgStyle?: RuleSet;
  $pathStyle?: RuleSet;
}
