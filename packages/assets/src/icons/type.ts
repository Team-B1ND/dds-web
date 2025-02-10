import {DodamTheme} from "@dds-web/styles";
import { type Interpolation } from "styled-components";

export interface StaticIconProps {
  size?: number;
}

export interface IconProps extends StaticIconProps {
  color?: keyof DodamTheme | string;
  $svgStyle?: Interpolation<object>;
  $pathStyle?: Interpolation<object>;
}


