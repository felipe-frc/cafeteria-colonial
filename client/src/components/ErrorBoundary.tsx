import { contactInfo } from "@/data/contact";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

const isDev = import.meta.env.DEV;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      `Unexpected render error in ${contactInfo.businessName}:`,
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--cream-rgb))] p-8 text-[rgb(var(--brown-rgb))]">
          <div className="flex w-full max-w-2xl flex-col items-center p-8">
            <AlertTriangle
              size={48}
              className="mb-6 flex-shrink-0 text-[rgb(var(--terracotta-rgb))]"
            />

            <h2 className="mb-4 text-center text-xl font-semibold text-[rgb(var(--green-rgb))]">
              Algo saiu do esperado por aqui.
            </h2>

            <p className="mb-6 max-w-xl text-center text-sm leading-6 text-[rgb(var(--brown-rgb)/0.84)]">
              Recarregue a página para tentar novamente. Se o problema continuar,
              revise o console e o fluxo que estava em uso.
            </p>

            {isDev && this.state.error?.stack && (
              <div className="mb-6 w-full overflow-auto rounded-2xl border border-[rgb(var(--brown-rgb)/0.12)] bg-[rgb(var(--cream-rgb)/0.72)] p-4">
                <pre className="whitespace-break-spaces text-sm text-[rgb(var(--brown-rgb)/0.82)]">
                  {this.state.error.stack}
                </pre>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[rgb(var(--terracotta-rgb))] px-5 py-3 text-white transition hover:bg-[rgb(var(--terracotta-rgb)/0.92)]"
            >
              <RotateCcw size={16} />
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
