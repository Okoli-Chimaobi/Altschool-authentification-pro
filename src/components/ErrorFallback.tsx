import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'

interface ErrorFallback {
  message?: string
  description?: string
  reset?: () => void
  buttonText?: string
}

export default function ErrorFallback(props: ErrorFallback) {
  const { message, description, reset, buttonText = 'Try again' } = props

  return (
    <div className="h-96 grid place-items-center">
      <div className="rounded-lg bg-light  flex flex-col items-center w-full mx-auto max-w-md p-10">
        <div className="rounded-full h-[5rem] w-[5rem] bg-error/5 text-error-900 flex items-center justify-center">
          <Close className="text-4xl" />
        </div>
        {message && <p className="mt-8 font-medium text-xl text-center">{message}</p>}
        {description && <p className="mt-4 text-soft text-center">{description}</p>}
        {reset && (
          <Button className="w-full mt-8 p-4" onClick={reset}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  )
}
