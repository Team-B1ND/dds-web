import type { HTMLAttributes } from "react";
import type { RuleSet } from "styled-components";

export type FontScale = "Large" | "Medium" | "Small";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  fontScale?: FontScale;
  customStyle?: RuleSet;
}
