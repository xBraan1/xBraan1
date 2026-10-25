import { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-neutral-950 px-4">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            
            <h1 className="text-2xl font-serif font-semibold text-neutral-900 dark:text-white mb-3">
              Something went wrong
            </h1>
            
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or returning to the home page.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                <RefreshCw size={16} />
                Try Again
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium rounded-md hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <Home size={16} />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
