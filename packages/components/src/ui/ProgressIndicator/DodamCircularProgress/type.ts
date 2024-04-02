export interface DodamCircularProgressProps {
  size: number;
  gauge: number;
  strokeWidth: number;

  color?: {
    trail?: string;
    path?: string;
  };

  minValue?: number;
  maxValue?: number;
}
