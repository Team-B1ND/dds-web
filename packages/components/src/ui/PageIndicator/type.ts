export type ButtonSize = "Small" | "Large";

export interface PageIndicatorProps {
  num: number;
  size?: ButtonSize;
  onClick: (idx: number) => void;
}
