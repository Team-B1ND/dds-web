import { ShapeSizeType } from "@dds-web/styles";
import { HTMLAttributes, ReactNode } from "react";
import { CSSProperties, RuleSet } from "styled-components";

export interface DodamIconButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  radius?: ShapeSizeType;
  customStyle?: RuleSet;
  padding?: CSSProperties["padding"];
}
