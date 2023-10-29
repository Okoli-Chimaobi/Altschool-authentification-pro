import { Transition } from '@headlessui/react'
import { useLocation, useNavigationType } from 'react-router-dom'

interface Props {
  appear?: boolean
  show: boolean
  transitionKey?: string
  className?: string
  children: React.ReactNode
}

export default function PageTransition(props: Props) {
  const { appear, show, transitionKey, className = '', children } = props
  const location = useLocation()
  const routerAction = useNavigationType()
  const transitionDirection =
    (location.state as any)?.transitionDirection ?? routerAction === 'POP' ? 'backward' : 'forward'

  const leaveToTop = 'opacity-0 -translate-y-20'
  const leaveToBottom = 'opacity-0 translate-y-20'
  const enterFromBottom = 'opacity-0 translate-y-10'
  const enterFromTop = 'opacity-0 -translate-y-10'
  const animatedContainer = 'translate-y-100 transition-all ease-default'

  return (
    //@ts-ignore
    <Transition
      aria-hidden={!show}
      appear={appear}
      show={show}
      key={transitionKey}
      enter={animatedContainer}
      enterFrom={transitionDirection === 'backward' ? enterFromTop : enterFromBottom}
      enterTo={animatedContainer}
      leave={animatedContainer}
      leaveFrom={animatedContainer}
      leaveTo={transitionDirection === 'forward' ? leaveToTop : leaveToBottom}
      className={`col-span-full row-span-full lg:bg-transparent bg-white h-full-page duration-300 ${className}`}
    >
      {children}
    </Transition>
  )
}
