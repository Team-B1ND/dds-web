import { Component, ErrorInfo, type ReactNode } from "react";

export interface DodamErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

export interface DodamErrorBoundaryState {
  hasError: boolean;
}

export class DodamErrorBoundary extends Component<
  DodamErrorBoundaryProps,
  DodamErrorBoundaryState
> {
  state: DodamErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(_: Error): DodamErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
