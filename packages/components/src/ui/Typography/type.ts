import { HTMLAttributes } from "react";
import { RuleSet } from "styled-components";

export type FontScale = "Bold" | "Medium" | "Regular";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  fontScale?: FontScale;
  customStyle?: RuleSet;
}
