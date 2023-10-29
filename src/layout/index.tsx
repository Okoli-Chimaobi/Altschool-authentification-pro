import backgroundImage from 'assets/images/bg-image.webp'
import {ReactComponent as Check} from 'assets/icons/checkicon.svg'
import {ReactComponent as Logo} from 'assets/icons/app-logo.svg'
import {ReactComponent as Border} from 'assets/icons/border-bottom-right.svg'
import {ReactComponent as BorderTop} from 'assets/icons/border-top.svg'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const firstChildStyle = {
    background: `linear-gradient(rgba(18, 90, 200, 0.7), rgba(18, 90, 200, 0.7)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1,
  }

  return (
    <div className="flex h-screen relative">
      <div className="w-3/6 hidden lg:block" style={firstChildStyle}>
        <h1 className="text-2xl text-white mt-20 mb-5 mx-20 flex">
          <Logo />
          Oasis.
        </h1>
        <div className="text-white h-2/3 flex flex-col justify-center px-20 mb-20 pt-10">
          <div className="flex">
            <BorderTop className="mb-5"/>
          </div>
          <p className="leading-10 text-xl mr-20">
            The passage experienced a surge in popularity during the 1960s when Letraset used it on
            their dry-transfer sheets, and again during the 90s as desktop publishers bundled the
            text with their software.
          </p>
          <div className="flex items-center text-2xl mt-10">
            <h2 className="mr-2">Chimaobi Okoli</h2>
            <Check />
          </div>
          <div className="flex justify-end mt-10 mr-5">
            <Border />
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-3/6 overflow-y-auto">
        <Outlet />
      </div>
      <div className="lg:hidden">
        <Outlet />
      </div>
    </div>
  )
}
