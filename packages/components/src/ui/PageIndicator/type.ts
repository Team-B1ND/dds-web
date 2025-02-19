import { CSSObject } from "styled-components";
export type ButtonSize = "Small" | "Large"

export interface PageIndicatorProps {
  buttonSize: ButtonSize;
  caseBy :Partial<Record<string, JSX.Element | null>>
  defaultComponent?: JSX.Element | null;
  customStyle?: CSSObject;
}