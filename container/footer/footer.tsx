import React from 'react'
import NotifyForm from '../../components/notify'
import FooterLink from '../../components/footerLinks'

const Footer = (props) => <div className="bg-gray-400 md:p-10 sm:p-5 flex relative flex-wrap">
  <div className="lg:w-2/5 md:w-1/2 sm:w-full justify-center text-center flex-col flex">
    <img className="md:h-20 sm:h-24" src="/images/mws-logo.svg" />
    <div className="mt-10 sm:mb-5 md:mb-0 flex justify-center">
      <NotifyForm buttonClass="sm:text-lg md:text-xl border-solid border-2 border-lightGreen-200" textClass={'text-white'} />
    </div>
  </div>
  <div className="lg:w-3/5 md:w-1/2 sm:w-full flex-col flex">
    <FooterLink isHomePage={props.isHomePage} />
    <div className="md:items-end sm:items-center flex flex-col mt-10 md:mr-12">
      <img className="h-10" src="/images/event-loop-footer.svg" />
      <p className="mt-5 text-gray-200 text-1-2">Copyright 2020 Event Loop, Inc.</p>
      <div className="flex items-center mt-2">
        <p className="text-gray-200 text-1-2 mr-2">Deployed with</p>
        <a href="https://begin.com">
          <img className="h-6" src="/images/begin.svg" />
        </a>
      </div>
      <p className="mt-2 text-gray-200 text-1-2">No 🍪 or 🕵️ here</p>
    </div>
  </div>
</div>

export default Footer
