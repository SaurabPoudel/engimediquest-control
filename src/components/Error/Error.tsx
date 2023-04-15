import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  message?: string;
}

interface State {
  hasError: boolean;
  error: {
    message: string;
    stack: string | undefined;
  };
  errorInfo: {
    componentStack: string;
  };
}
class ErrorBoundary extends Component<Props, State> {
  public state: Readonly<State> = {
    hasError: false,
    error: {
      message: "",
      stack: "",
    },
    errorInfo: { componentStack: "" },
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: {
        message: "",
        stack: "",
      },
      errorInfo: {
        componentStack: "",
      },
    };
  }

  public static getDerivedStateFromError(error: any, errorInfo: any) {
    return { hasError: true, error, errorInfo };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      error: { message: error.message, stack: error.stack },
      errorInfo,
    });
  }

  render(): ReactNode {
    const { error, errorInfo, hasError } = this.state;
    const { message } = this.props;
    if (hasError) {
      return (
        <>
          <h1>{message}</h1>
          <h3>ERROR</h3>
          <p style={{ color: `brown` }}>{error.message}</p>
          <br />
          <h3>Stack</h3>
          <p>{error.stack}</p>
          <br />
          <h3>Component Stack</h3>
          <p>{errorInfo?.componentStack}</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
