import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Main = lazy(() => import('./../layout'))
const NotFound = lazy(() => import('components/NotFound'))
const IndividualAccount = lazy(() => import('pages/IndividualAccount'))
const Profile = lazy(() => import('pages/Profile'))

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<IndividualAccount />}>
            <Route path="profile" element={<Profile />}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AllRoutes
