import { type Interpolation } from "styled-components";

export interface StaticIconProps {
  size?: number;
}

export interface IconProps extends StaticIconProps {
  color?: string;
  $svgStyle?: Interpolation<object>;
  $pathStyle?: Interpolation<object>;
}
