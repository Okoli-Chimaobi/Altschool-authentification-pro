import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { ReactComponent as Success } from 'assets/icons/success.svg'

export default function Profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  return (
    <>
        <div>
          <div className="flex justify-between items-center mx-2 mt-5 px-2 lg:text-lg">
           
              <header className="flex items-center mb-4">
                <Button
                  onClick={() => navigate(-1)}
                  className="p-0 hover:bg-transparent"
                  variant="text"
                  startIcon={<KeyboardArrowLeft className="text-primary text-md" />}
                >
                  <p className="hidden lg:block font-medium text-primary text-sm">Go back</p>
                </Button>
              </header>
        
            <div className="flex flex-col">
              <p className="">
                Welcome
              </p>
              <p className="text-sm text-primary">
                Personal Info.
              </p>
            </div>
          </div>
        </div>
     
        <div className="p-20 hidden lg:block">
            <div className='flex justify-center'>
                <Success className='mb-5'/>
            </div>
          <div className="w-5/6">
            <h1 className="text-2xl mb-4 text-black font-bold text-center">Welcome, {user?.name}</h1>
            <p className="leading-7 text-md ">
              We are thrilled and ectatic to welcome you to our team! Your decision to to join us brings an incredible sense of anthusiasm and anticpation. 
              We're excited about the incredible future we'll create together!  
            </p>
           
          </div>
        </div>
        <div className="p-5 w-full mt-10 block lg:hidden">
          <div className="">
          <div className='flex justify-center'>
                <Success className='mb-5'/>
            </div>
            <h1 className="text-2xl mb-4 text-black font-bold text-center">Welcome, {user?.name}</h1>
            <p className="leading-7 text-lg mb-10 pl=4">
              We are thrilled and ectatic to welcome you to our team! Your decision to to join us brings an incredible sense of anthusiasm and anticpation. 
              We're excited about the incredible future we'll create together!  
            </p>
          </div>
        </div>
      
    </>
  )
}
