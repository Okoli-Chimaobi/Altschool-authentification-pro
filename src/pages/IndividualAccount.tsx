import { Button, CircularProgress, IconButton, TextField } from '@mui/material'
import { Formik } from 'formik'
import { Outlet, useMatch, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import PageTransition from 'components/PageTransition'
import yup from '../utils/yup'

const initialUser = {
  isAuthenticated: false,
  name: '',
  email: '',
  password: '',
}
const validationSchema = yup.object().shape({
  name: yup.string().required('enter full name'),
  email: yup.string().required('enter email'),
  password: yup.string().required('create password'),
})

function FormikFields() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false)
  const navigate = useNavigate()
  const [user, setUser]= useState(initialUser)

  useEffect(()=>{
    const storedUser = localStorage.getItem('user')
    if(storedUser){
      setUser(JSON.parse(storedUser))
    }
  }, [])
  
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const authenticatedUser = { ...values, isAuthenticated: true}
        setUser(authenticatedUser)
        localStorage.setItem('user', JSON.stringify(authenticatedUser))
        navigate('/profile')
      }}    >
      {({ values, handleChange, isSubmitting, touched, errors, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          <div className="w-full mb-6">
            <div className="w-full space-y-4 mb-3">
              <p className="text-md font-medium  mt-5">Your fullname*</p>
              <TextField
                id="name"
                type="text"
                placeholder="please enter full name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && !!errors.name}
                helperText={touched.name ? errors.name : ''}
                inputProps={{
                  className: 'rounded-[11px] text-md',
                }}
                fullWidth
              />{' '}
            </div>
            <div className="w-full space-y-4 mb-3">
              <p className="text-md font-medium  mt-5">Email address</p>
              <TextField
                id="email"
                type="email"
                placeholder="please enter email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && !!errors.email}
                helperText={touched.email ? errors.email : ''}
                inputProps={{
                  className: 'rounded-[11px] text-md',
                }}
                fullWidth
              />{' '}
            </div>
            <div className="w-full space-y-4 mb-2">
              <p className="text-md font-medium  mt-3">Create password</p>
              <TextField
                id="password"
                type={isPasswordVisible ? 'text' : 'password'}
                className="border-red mb-4"
                value={values.password}
                onChange={handleChange}
                error={touched.password && !!errors.password}
                placeholder="Type your password"
                helperText={touched.password ? errors.password : ''}
                fullWidth
                inputProps={{
                  className: 'rounded-[11px] text-md',
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => setPasswordVisibility(!isPasswordVisible)}
                      className="mr-2"
                    >
                      {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                      <span className="sr-only">
                        {isPasswordVisible ? 'Hide Password' : 'Show Password'}
                      </span>
                    </IconButton>
                  ),
                }}
              />
            </div>
          </div>

          <Button disabled={isSubmitting} className="w-full bg-primary p-5" type="submit">
            {isSubmitting ? (
              <>
                <CircularProgress color="inherit" className="text-white" size={22} />
              </>
            ) : (
              'Register Account'
            )}
          </Button>
        </form>
      )}
    </Formik>
  )
}
export default function IndividualAccount() {
  const isPage = !!useMatch('/')

  return (
   <>
      <PageTransition show={!isPage}>
         <Outlet />
      </PageTransition>
      <PageTransition show={isPage}>
        <div className="mx-20 py-15 mt-10 hidden lg:block">
          <div className="w-fit">
            <h1 className="text-2xl mb-4 text-black font-bold">Register Individual Account!</h1>
            <p className="leading-7 text-lg mb-5">
              For the purpose of industry regulation, your details are required.
            </p>
            <FormikFields />
          </div>
        </div>
        <div className="p-5 w-full mt-5 block lg:hidden">
          <div className="">
            <h1 className="text-2xl mb-4 text-black font-bold">Register Individual Account!</h1>
            <p className="leading-7 text-lg mb-10">
              For the purpose of industry regulation, your details are required.
            </p>
            <FormikFields />
          </div>
        </div>
      </PageTransition>
    </>
  )
}
