import "styled-components";

declare module "styled-components" {
  export interface DodamTheme {
    primary: {
      normal: string;
      alternative: string;
      assisitive: string;
    };

    label: {
      normal: string;
      strong: string;
      netural: string;
      alternative: string;
      assisitive: string;
      disabled: string;
    };

    line: {
      normal: string;
      netural: string;
      alternative: string;
    };

    fill: {
      normal: string;
      netural: string;
      alternative: string;
      assisitive: string;
    };

    background: {
      normal: string;
      netural: string;
      alternative: string;
    };

    status: {
      negative: string;
      cautionary: string;
      positive: string;
    };

    static: {
      white: string;
      black: string;
    };
  }
}
