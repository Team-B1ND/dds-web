import { ShapeSizeType } from "@dds-web/styles";
import { HTMLAttributes, ReactNode } from "react";
import { CSSProperties, RuleSet } from "styled-components";

export interface DodamFilledButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  text: {
    content: ReactNode;
    color?: string;
  };
  backgroundColor?: CSSProperties["backgroundColor"];
  radius?: ShapeSizeType;
  padding?: CSSProperties["padding"];
  isLoading?: boolean;
  disabled?: boolean;
  customStyle?: RuleSet;
}
