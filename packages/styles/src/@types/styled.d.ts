import "styled-components";

declare module "styled-components" {
  export interface DodamTheme {
    primaryNormal: string;
    primaryAlternative: string;
    primaryAssisitive: string;

    labelNormal: string;
    labelStrong: string;
    labelNetural: string;
    labelAlternative: string;
    labelAssisitive: string;
    labelDisabled: string;

    lineNormal: string;
    lineNetural: string;
    lineAlternative: string;

    fillNormal: string;
    fillNetural: string;
    fillAlternative: string;
    fillAssistive: string;

    backgroundNormal: string;
    backgroundNetural: string;
    backgroundAlternative: string;

    statusNegative: string;
    statusCautionary: string;
    statusPositive: string;

    staticWhite: string;
    staticBlack: string;
  }
}
