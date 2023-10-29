import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import { HelmetProvider } from 'react-helmet-async'
import theme from './theme'
import * as Sentry from '@sentry/react'
import { SnackbarProvider } from 'notistack'
import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material'
import ErrorBoundary from 'components/ErrorBoundary'
import reportWebVitals from './reportWebVitals'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN?.toString(),
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  environment: import.meta.env.NODE_ENV ?? 'staging',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <HelmetProvider>
      <ThemeProvider theme={theme}>
        <ErrorBoundary onReset={() => (window.location.pathname = '/')}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            className="rounded-lg text-xs"
            iconVariant={{
              success: (
                <div className="circular-container h-10 w-10 bg-success/10 mr-[0.625rem] text-sm">
                  <CheckCircleOutline className="text-2xl" />
                </div>
              ),
              error: (
                <div className="circular-container w-10 mr-[0.625rem] text-xs">
                  <ErrorOutline className="text-2xl" />
                </div>
              ),
            }}
          >
            <App />
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
