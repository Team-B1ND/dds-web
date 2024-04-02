import { ReactNode } from "react";

export interface DodamErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

export interface DodamErrorBoundaryState {
  hasError: boolean;
}
