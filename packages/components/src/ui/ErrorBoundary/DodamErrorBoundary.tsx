import { Component, ErrorInfo } from "react";
import { DodamErrorBoundaryProps, DodamErrorBoundaryState } from "./type";

export class DodamErrorBoundary extends Component<
  DodamErrorBoundaryProps,
  DodamErrorBoundaryState
> {
  public state: DodamErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): DodamErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
