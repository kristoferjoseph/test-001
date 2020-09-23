import React, { useEffect } from 'react'
import Link from 'next/link'
import { buttonList } from '../utility/constants'

const NavMenu = (props: any) => {
  const { menuOpen } = props
  const buttonClass = "menu-btn border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400 hover:bg-gray-400 focus:outline-none hover:text-white"
  const linkClass = "text-1-2 text-gray-300 font-medium hover:text-blue-100"
  const textClass = 'text-1-2 text-gray-300 font-medium'
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [])

  return (
    <div className="bg-white fixed top-0 inset-x-0 z-50 shadow-xs h-screen">
      <div className="p-3 sm:bg-gray-400 md:bg-white">
        <img src="/images/close.svg" className="sm:hidden md:inline cursor-pointer" onClick={menuOpen} />
        <img src="/images/close-white.svg" className="md:hidden sm:inline cursor-pointer" onClick={menuOpen} />
      </div>
      <div className="flex sm:flex-wrap md:flex-no-wrap md:w-3/5 sm:w-full mx-auto md:my-10 sm:my-5 sm:pb-40 md:pb-0 overflow-auto max-h-full-100">
        <div className="md:w-2/5 sm:w-full sm:mx-5 md:mx-0">
          {/* <p><Link href="/term-service"><a className={linkClass} >Terms of Service</a></Link> </p> */}
          {/* <p><Link href="/privacy-policy"><a className={linkClass} >Privacy Policy</a></Link></p> */}
          {/* <p><a className={linkClass} href="https://www.google.co.in/">Selection Committee</a></p> */}
          <p className={textClass}>
            {/* <a className={linkClass} href="https://www.google.co.in/"> */}
              Workshops - coming soon
              {/* </a> */}
          </p>
          <p className={textClass}>
            {/* <a className={linkClass} href="https://www.google.co.in/"> */}
            Jobs - coming soon
              {/* </a> */}
          </p>
          <p className={textClass}>Schedule - coming soon</p>
        </div>
        <div className="md:w-1/2 sm:w-full flex flex-col mx-5 sm:order-first md:order-none">
          {buttonList.map(b => <>
            <Link href={`/${b.pageName !== '' ? `#${b.pageName}` : ''}`}>
              <button
                onClick={() => menuOpen()}
                className={buttonClass}
                type="button" >
                {b.label}
              </button>
            </Link>
          </>)}
          <Link href="/code-of-conduct">
            <button
              className={buttonClass}
              type="button" >
              code of conduct
            </button>
          </Link>
          <button
            disabled={true}
            className={`menu-btn cursor-not-allowed border-2 mb-5 p-6 border-gray-400 text-xl font-extrabold uppercase text-gray-400  focus:outline-none opacity-50`}
            type="button" >
            schedule - coming soon
            </button>
        </div>
        <div className="md:w-2/5 sm:w-full sm:mx-5 md:ml-16">
          <p>
            <a className={linkClass} href="https://docs.google.com/forms/d/e/1FAIpQLScxt_u_khXb3AAn7zp8clvpktpWHSmx01pN1N0xtTDvQB5aaA/viewform">
              Volunteer
            </a>
          </p>
          <p className={textClass}>Request for Sponsorship</p>
          <p className={textClass}>Apply for Scholarship</p>
          <p className={textClass}>Convince your boss</p>
          <p className={textClass}>Submit a talk proposal</p>

          {/* <p><a className={linkClass} href="https://www.google.co.in/">Request for Sponsorship</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Apply for Scholarship</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Convince your boss</a></p>
          <p><a className={linkClass} href="https://www.google.co.in/">Submit a talk proposal</a></p> */}
        </div>
      </div>
    </div>
  )

}
export default NavMenu