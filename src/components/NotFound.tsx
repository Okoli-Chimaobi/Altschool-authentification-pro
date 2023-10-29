import { Helmet } from 'react-helmet-async'
import { ReactComponent as ErrorIcon } from 'assets/images/404.svg'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="h-screen bg-light">
      <Helmet>
        <title>Oasis | 404</title>
      </Helmet>

      <div className="container mx-auto">
        <div className="grid place-items-center">
          <ErrorIcon />
          <p className="text-primary mt-8 font-medium"> Oops! Page not found.</p>
          <small className="w-[50ch] text-center text-light mt-2">
            There’s nothing here... The link you followed is probably broken or the page has been
            removed. We’re sorry you had to see this.
          </small>
          <Button className="p-4 rounded-xl w-[25rem] mt-4" onClick={() => navigate('/')}>
            <span>BACK TO HOME</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
