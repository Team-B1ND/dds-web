import { HTMLAttributes } from "react";
import { RuleSet } from "styled-components";

export type Scale = "Large" | "Medium" | "Small";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  scale?: Scale;
  customStyle?: RuleSet;
}
