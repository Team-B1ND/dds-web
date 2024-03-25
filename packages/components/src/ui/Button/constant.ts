import { css } from "styled-components";

export const BUTTON_SIZE_STYLE = {
  large: css`
    font-size: 16px;
    padding: 12px 24px;
  `,
  medium: css`
    font-size: 14px;
    padding: 11px 20px;
  `,
  small: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
};

export const BUTTON_PRIMARY_STYLE = {
  primary: css`
    color: #fff;
    background-color: #1ea7fd;
  `,
  notPrimary: css`
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
};
