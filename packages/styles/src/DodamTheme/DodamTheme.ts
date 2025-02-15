import { DefaultTheme } from "styled-components";
import { DodamColor } from "@dds-web/foundations";

export const DodamLightTheme: DefaultTheme = Object.freeze({
  primaryNormal: DodamColor.blue45,
  primaryAlternative: "rgba(0, 131, 240, 0.65)",
  primaryAssisitive: "rgba(0, 131, 240, 0.2)",

  labelNormal: DodamColor.netural5,
  labelStrong: DodamColor.common0,
  labelNeutral: DodamColor.netural25,
  labelAlternative: DodamColor.netural40,
  labelAssistive: DodamColor.netural50,
  labelDisabled: DodamColor.netural97,

  lineNormal: DodamColor.netural90,
  lineNetural: DodamColor.netural95,
  lineAlternative: DodamColor.netural97,

  fillNormal: DodamColor.netural99,
  fillNeutral: DodamColor.netural97,
  fillAlternative: DodamColor.netural95,
  fillAssistive: DodamColor.common100,

  backgroundNormal: DodamColor.common100,
  backgroundNeutral: DodamColor.netural99,
  backgroundAlternative: DodamColor.netural99,

  statusNegative: DodamColor.red50,
  statusCautionary: DodamColor.yellow50,
  statusPositive: DodamColor.green50,

  staticWhite: DodamColor.common100,
  staticBlack: DodamColor.common0,
});

export const DodamDarkTheme: DefaultTheme = Object.freeze({
  primaryNormal: DodamColor.blue45,
  primaryAlternative: "rgba(0, 131, 240, 0.65)",
  primaryAssisitive: "rgba(0, 131, 240, 0.2)",

  labelNormal: DodamColor.netural99,
  labelStrong: DodamColor.common100,
  labelNeutral: DodamColor.netural95,
  labelAlternative: DodamColor.netural90,
  labelAssisitive: DodamColor.netural70,
  labelDisabled: DodamColor.netural30,

  lineNormal: DodamColor.netural50,
  lineNeutral: DodamColor.netural30,
  lineAlternative: DodamColor.netural25,

  fillNormal: DodamColor.netural20,
  fillNeutral: DodamColor.netural25,
  fillAlternative: DodamColor.netural30,
  fillAssistive: DodamColor.netural60,

  backgroundNormal: DodamColor.netural15,
  backgroundNeutral: DodamColor.netural10,
  backgroundAlternative: DodamColor.netural7,

  statusNegative: DodamColor.red50,
  statusCautionary: DodamColor.yellow50,
  statusPositive: DodamColor.green50,

  staticWhite: DodamColor.common100,
  staticBlack: DodamColor.common0,
});
