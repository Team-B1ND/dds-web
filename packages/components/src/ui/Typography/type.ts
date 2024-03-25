import { HTMLAttributes } from "react";

export type Scale = "Large" | "Medium" | "Small";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  scale?: Scale;
  text: string;
}
