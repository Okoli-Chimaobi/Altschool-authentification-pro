import * as Sentry from '@sentry/react'
import { ReactElement, ReactNode } from 'react'
import ErrorFallback from './ErrorFallback'

type FallbackRender = (errorData: {
  error: Error
  componentStack: string | null
  eventId: string | null
  resetError(): void
}) => ReactElement

interface ErrorBoundaryProps {
  fallback?: ReactElement | FallbackRender
  onError?(error: Error, componentStack: string, eventId: string): void
  onReset?(error: Error | null, componentStack: string | null, eventId: string | null): void
  children: ReactNode
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const { children, ...rest } = props

  return (
    <Sentry.ErrorBoundary
      fallback={({ resetError }) => (
        <div className="px-5">
          <ErrorFallback
            message="Something went wrong"
            description="Oops! That wasn't supposed to happen. Please bear with us while this is resolved"
            reset={resetError}
            buttonText="Go back"
          />
        </div>
      )}
      {...rest}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}
