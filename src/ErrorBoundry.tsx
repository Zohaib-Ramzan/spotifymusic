import React, { Component, ErrorInfo, ReactNode } from 'react';
import MusicPlayer from './screens/MusicPlayer';

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error): { hasError: true } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by error boundary:', error, errorInfo);
    // You can log the error or perform any other actions here.
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <MusicPlayer />; // Replace with your custom error screen component
    }

    return this.props.children;
  }
}

export default ErrorBoundary;