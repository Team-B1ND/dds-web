import { Home, Calender , Note, MoonPlus , Dev ,Magnifyingglass} from "@dds-web/assets";

import { type Interpolation } from "styled-components";

export interface StaticIconProps {
  size?: number;
}

export interface IconProps extends StaticIconProps {
  color?: string;
  $svgStyle?: Interpolation<object>;
  $pathStyle?: Interpolation<object>;
}


type SidebarLink = {
  name: string;
  link: string;
  img: ((props: IconProps) => JSX.Element) | null; 
};

export const SIDEBAR_LINKS: readonly SidebarLink[] = [
  { name: "홈", link: "http://dodam.b1nd.com/", img: Home },
  { name: "일정", link: "http://dodam.b1nd.com/schedule", img: Calender },
  { name: "기상송", link: "http://dodam.b1nd.com/wakesong", img: Note },
  { name: "심자신청", link: "http://dodam.b1nd.com/nightstudy", img: MoonPlus },
  { name: "DGIT", link: "http://dgit.b1nd.com/", img: null },
  { name: "WIKI", link: "https://sh031224.github.io/ask-for-information/", img: Dev },
  { name: "리크루트", link: "http://dodam.b1nd.com/recruit", img: Magnifyingglass },
];
