import { Home, Calender,Note, MoonPlus, Dev, Magnifyingglass, Chart, People } from "@dds-web/assets";

import { type Interpolation } from "styled-components";

export interface StaticIconProps {
  size?: number;
}

export interface IconProps extends StaticIconProps {
  color?: string;
  $svgStyle?: Interpolation<object>;
  $pathStyle?: Interpolation<object>;
}

export type Eigenvalues =
  | "home"
  | "schedule"
  | "wakesong"
  | "nightstudy"
  | "dgit"
  | "ask"
  | "recruit"
  | "club";

type NavLink = {
  name: string;
  link: string;
  img: ((props: IconProps) => JSX.Element) | null;
  values: Eigenvalues;
};

export const NAV_LINKS: readonly NavLink[] = [
  { name: "홈", link: "http://dodam.b1nd.com/", img: Home, values: "home" },
  { name: "일정", link: "http://dodam.b1nd.com/schedule", img: Calender, values: "schedule" },
  { name: "기상송", link: "http://dodam.b1nd.com/wakesong", img: Note, values: "wakesong" },
  { name: "심자신청", link: "http://dodam.b1nd.com/nightstudy", img: MoonPlus, values: "nightstudy" },
  { name: "DGIT", link: "http://dodam.b1nd.com/dgit", img: Chart, values: "dgit" },
  { name: "WIKI", link: "https://sh031224.github.io/ask-for-information/", img: Dev, values: "ask" },
  { name: "리크루트", link: "http://dodam.b1nd.com/recruit", img: Magnifyingglass, values: "recruit" },
  { name: "동아리", link: "http://dodam.b1nd.com/club", img: People, values: "club" },
];

export const NAV_BAR_MODAL_DAUTH = {
  name: "Dauth",
  link: "https://dauth.b1nd.com/",
};

export const NAV_BAR_MODAL_ITEM = [
  {
    name: "서비스 운영 정책",
    link: "https://b1nd.com/detailed-information/service-policy",
  },
  {
    name: "개인정보 처리 방침",
    link: "https://b1nd.com/detailed-information/personal-information",
  },
  {
    name: "로그아웃",
    link: "logout",
  },
];
