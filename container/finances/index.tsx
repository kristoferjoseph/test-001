import React, { useState, useEffect } from 'react'
import Title from '../../components/title'
import FinanceDescription from '../../components/financeDescription'
import { VisibleProps } from '../sponsor'
import AnimationWrapper from '../../components/animationWrapper'

const Finances = (props: VisibleProps) => {
  const { isVisible } = props
  const [className, setClass] = useState('')

  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })
  
  return (
    <div className={`bg-white shadow-xs opacity-0  ${className} sm:pb-16 lg:pb-8 `}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">Finances</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center lg:text-left lg:pt-24">
          <h5 className="text-2xl font-extrabold uppercase" >{"where does the money for this event go? "}</h5>
          <p className="text-gray-300 font-medium text-1-2 lg:w-4/6 sm:w-full">{"The pricing of this event is intended to be extremely affordable in order to maximize our reach and accessibility. But there are still many expenses and other plans for the income from the event, and we have chosen to be completely upfront about where that money is going! "}</p>
        </div>
      </div>
      <div className="md:p-10 sm:p-5">
        <Title title="Ticket sales" parentClass="flex justify-center border-solid border border-gray-200" />
      </div>
      <div className="flex flex-wrap lg:mt-6 lg:px-24">
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="donation to freecodecamp"
            description="freeCodeCamp is a 501(c)(3) nonprofit and has done some amazing things for students of web development -- helping thousands around the world to get new jobs as web designers & developers. During this crisis in particular, their monthly active users (MAU) has peaked at 11 million, and settled at 6 million. However, the majority of their donations come from small, independent donors -- mostly from fcc alumni now working as developers. In other words, they're struggling! We hope to change that with direct contributions from our tickets sales in addition to  encouragement of our attendees & sponsors to donate what they can. Will you help fcc in their mission to help people learn to code for free? Donate today!"
            linkText="Send a Donation to freeCodeCamp "
            url="https://www.freecodecamp.org/donate/"
            image="/images/20.svg"
            financeImage="/images/sponsor-freecodecamp.svg"
            parentClass=""
            percentage={20}
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="Payment to speakers and curators"
            description="Putting together a talk is a lot of work! We believe that speakers should be paid for their time and expertise. That’s why we are dedicating a large slice of the event’s earning to paying speakers and curators! "
            linkText="Meet our speakers "
            url="https://www.google.co.in/"
            image="/images/20.svg"
            financeImage=""
            parentClass=""
            percentage={20}
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="Organizing staff"
            description="Our organizing staff shares 20% of the ticket sales earnings"
            linkText=""
            url=""
            image="/images/20.svg"
            financeImage=""
            parentClass=""
            percentage={20}
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="Marketing & Production expenses"
            description="This helps to cover things like web design & development, DJ, artwork, music licensing, and advertising, among other expenses."
            linkText=""
            url=""
            image="/images/20.svg"
            financeImage=""
            parentClass=""
            percentage={20}
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="Finance charges"
            description="We allocate 10% for ticket sales and other processing fees"
            linkText=""
            url=""
            image="/images/10.svg"
            financeImage=""
            parentClass=""
            percentage={10}
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="Miscellaneous Expenses"
            description="We reserve 10% of the ticket sales income for miscellaneous and unanticipated expenses. "
            linkText=""
            url=""
            image="/images/10.svg"
            financeImage=""
            parentClass=""
            percentage={10}
          />
        </AnimationWrapper>
      </div>
      <div className="md:p-10 sm:p-5">
        <Title title="sponsor sales" parentClass="flex justify-center border-solid border border-gray-200" />
      </div>
      <div className="flex flex-wrap lg:mt-6 lg:px-24">
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="A/V Production"
            description="Reserved for professional A/V production crew to take the sessions, sound, and graphics to the next level"
            linkText=""
            url=""
            image="/images/20.svg"
            financeImage=""
            parentClass=""
            percentage={20}
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="lg:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <FinanceDescription
            title="Event hosting & servers"
            description="Video costs a lot of money on the web! Especially livestreaming and many-to-many live discussions. These funds will help to offset these costs, and hopefully cover them in full! "
            linkText=""
            url=""
            image="/images/80.svg"
            financeImage=""
            parentClass=""
            percentage={80}
          />
        </AnimationWrapper>
      </div>
    </div>
  )
}

export default Finances
