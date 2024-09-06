import { DodamTheme } from "styled-components";
import { DodamColor } from "@dds-web/foundations";

export const DodamLightTheme: DodamTheme = Object.freeze({
  primary: {
    normal: DodamColor.blue45,
    alternative: "rgba(0, 131, 240, 0.65)",
    assisitive: "rgba(0, 131, 240, 0.2)",
  },

  label: {
    normal: DodamColor.netural5,
    strong: DodamColor.common0,
    netural: DodamColor.netural25,
    alternative: DodamColor.netural40,
    assisitive: DodamColor.netural50,
    disabled: DodamColor.netural97,
  },

  line: {
    normal: DodamColor.netural90,
    netural: DodamColor.netural95,
    alternative: DodamColor.netural97,
  },

  fill: {
    normal: DodamColor.netural99,
    netural: DodamColor.netural97,
    alternative: DodamColor.netural95,
    assisitive: DodamColor.common100,
  },

  background: {
    normal: DodamColor.common100,
    netural: DodamColor.netural99,
    alternative: DodamColor.netural99,
  },

  status: {
    negative: DodamColor.red50,
    cautionary: DodamColor.yellow50,
    positive: DodamColor.green50,
  },

  static: {
    white: DodamColor.common100,
    black: DodamColor.common0,
  },
});

export const DodamDarkTheme: DodamTheme = Object.freeze({
  primary: {
    normal: DodamColor.blue45,
    alternative: "rgba(0, 131, 240, 0.65)",
    assisitive: "rgba(0, 131, 240, 0.2)",
  },

  label: {
    normal: DodamColor.netural99,
    strong: DodamColor.common100,
    netural: DodamColor.netural95,
    alternative: DodamColor.netural90,
    assisitive: DodamColor.netural70,
    disabled: DodamColor.netural30,
  },

  line: {
    normal: DodamColor.netural50,
    netural: DodamColor.netural30,
    alternative: DodamColor.netural25,
  },

  fill: {
    normal: DodamColor.netural20,
    netural: DodamColor.netural25,
    alternative: DodamColor.netural30,
    assisitive: DodamColor.netural60,
  },

  background: {
    normal: DodamColor.netural15,
    netural: DodamColor.netural10,
    alternative: DodamColor.netural7,
  },

  status: {
    negative: DodamColor.red50,
    cautionary: DodamColor.yellow50,
    positive: DodamColor.green50,
  },

  static: {
    white: DodamColor.common100,
    black: DodamColor.common0,
  },
});
