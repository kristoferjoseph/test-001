import React, { useRef, useState, useEffect } from 'react'
import Logo from '../../components/logo'
import NotifyForm from '../../components/notify'
import Modern from '../modern'
import Speaker from '../speaker'
import Sponsor from '../sponsor'
import Curators from '../curators'
import About from '../about'
import ShareSocial from '../../components/shareSocial'
import Footer from '../footer/footer'
import NavMenu from '../../components/navMenu'
import Finances from '../finances'
import GetInvolved from '../getInvolved'
import SectionWrapper from '../../components/sectionWrapper'
import ReactVisibilitySensor from 'react-visibility-sensor'
import StickyHeader from '../../components/stickyHeader'
import Link from 'next/link'

const Home = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState('')

  const menuOpen = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const homePage = document.getElementById('home')
      if (homePage && (homePage.offsetTop + (homePage.offsetHeight / 2) < window.scrollY)) {
        setDisplayMenu(true)
      } else {
        setDisplayMenu(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', () => { })
    }
  }, [])

  return (
    <div className='h-full'>
      <div className='flex items-center justify-between w-full absolute md:-mt-10 pt-1'>
        <div onClick={() => menuOpen()}>
          <img className="sm:hidden md:inline p-2 ml-2 mt-1 cursor-pointer" src="/images/menu.svg" alt="logo" />
          <img className="md:hidden sm:inline p-2 ml-2 mt-1 cursor-pointer" src="/images/menu-white.svg" alt="logo" />
        </div>
        {showMenu && <NavMenu menuOpen={menuOpen} />}
        <div className="items-center mr-10 sm:hidden md:flex">
          <a href="https://twitter.com/mwSummit">
            <img className="inline p-2" src="/images/Twitter.svg" alt="logo" />
          </a>
          {/* <a href="https://www.google.co.in/">
            <img className="inline p-2" src="/images/LinkedIn.svg" alt="logo" />
          </a> */}
          <a href="https://github.com/event-loop/modern-web-summit">
            <img className="inline p-2" src="/images/github.svg" alt="logo" />
          </a>
        </div>
      </div>
      {displayMenu &&
        <StickyHeader menuOpen={() => menuOpen()} />
      }
      <div id='home' className='bg-white flex shadow-xs md:h-100-5 sm:h-auto sm:m-0 md:m-10 main-wrap'>
        <div className="sm:hidden md:flex -mt-10 left-bar">
          <img className="inline self-start ml-8 animated fadeInDownBig" src="/images/left-bar-1.svg" alt="logo" />
          <img className="inline self-start -ml-5 animated fadeInDownBig slow" src="/images/left-bar-2.svg" alt="logo" />
          <img className="inline self-start -ml-5 animated fadeInDownBig slower" src="/images/left-bar-3.svg" alt="logo" />
        </div>
        <div className='md:w-2/4 sm:w-full mx-auto text-center md:-mt-10 sm:mt-0 flex flex-col'>
          <Logo />
          <p className='text-gray-300 font-medium text-1-2 md:mb-5 sm:p-5 md:p-0'>
            {"Connecting the world’s top designers and developers to redefine the bounds of possibility through an exciting exploration of cutting-edge technologies, lessons, & patterns"}</p>
          <NotifyForm buttonClass="" textClass="text-black" />
          <div className="my-3 flex justify-center flex-grow items-end">

            {/* <Link href="/term-service"><a className="text-gray-300 font-medium sm:text-sm lg:text-base hover:text-blue-100">Terms of Service</a></Link>
            <span className="px-1 sm:text-sm lg:text-base">•</span>
            <Link href="/privacy-policy"><a className="text-gray-300 font-medium sm:text-sm lg:text-base hover:text-blue-100">Privacy Policy</a></Link>
            <span className="px-1 sm:text-sm lg:text-base">•</span> */}
            <Link href="/code-of-conduct"><a className="text-gray-300 font-medium sm:text-sm lg:text-1-2 hover:text-blue-100" >Code of Conduct</a></Link>
          </div>
        </div>
        <div className="sm:hidden md:flex mr-8 relative top-1/2 transform -translate-y-48 right-bar">
          <img className="inline self-end animated fadeInUpBig slower" src="/images/right-bar-1.svg" alt="logo" />
          <img className="inline self-end animated fadeInUpBig slow -ml-5 mb-10" src="/images/right-bar-2.svg" alt="logo" />
          <img className="inline self-end animated fadeInUpBig -ml-5 mb-20" src="/images/right-bar-3.svg" alt="logo" />
        </div>
      </div>

      <div className='bg-darkBg md:m-10 text-center flex items-center justify-center min-h-778'>
        <ReactVisibilitySensor
          partialVisibility
        >
          {({ isVisible }) => <Modern isVisible={isVisible} />}
        </ReactVisibilitySensor>
      </div>
      <div id='about' className='sm:m-0 md:m-10'>
        <SectionWrapper Component={About} />
      </div>
      <div id="speakers" className='sm:m-0 md:m-10'>
        <SectionWrapper Component={Speaker} selectedSpeaker={selectedSpeaker} onSelectSpeaker={() => setSelectedSpeaker('')}/>
      </div>
      <div id="curators" className="sm:m-0 md:m-10">
        <SectionWrapper Component={Curators} onSelectSpeaker={(type) => setSelectedSpeaker(type)}/>
      </div>
      <div id="sponsors" className='sm:m-0 md:m-10'>
        <SectionWrapper Component={Sponsor} />
      </div>
      <div id='finances' className='sm:m-0 md:m-10'>
        <SectionWrapper Component={Finances} />
      </div>
      <div id='get-involved' className='sm:m-0 md:m-10'>
        <SectionWrapper Component={GetInvolved} />
      </div>
      <div className="sm:m-0 md:m-10 sm:p-2 md:p-0">
        <ShareSocial />
      </div>
      <Footer isHomePage />
    </div>
  )
}
export default Home
