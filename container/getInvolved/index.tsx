import React, { useEffect, useState } from 'react'
import Button from '../../components/button'

const involvmentList = [
  {
    buttonText: 'sponsor',
    description: 'Want to be an intimate part of the web event of the year? Register your interest here!',
    buttonClick: ''
  },
  {
    buttonText: 'submit a talk',
    description: 'Fancy giving a talk, participating in a panel, or leading a discussion group? Apply here!',
    buttonClick: ''
  },
  {
    buttonText: 'volunteer',
    description: 'Do you have skills in design, music, animation, or managing communities and forums? Request to volunteer here!',
    buttonClick: '',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScxt_u_khXb3AAn7zp8clvpktpWHSmx01pN1N0xtTDvQB5aaA/viewform'
  },
  {
    buttonText: 'edit this website',
    description: 'See any errors? Have a clever design idea or animation? Send us a PR on GitHub!',
    buttonClick: ''
  },
  {
    buttonText: 'contact us',
    description: 'Send us an email with any questions, or tweet/message us on Twitter! ',
    buttonClick: ''
  }
]

const GetInvolved = (props: VisibleProps) => {
  const { isVisible } = props
  const [className, setClass] = useState('')
  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })

  return (
    <div className={`bg-white shadow-xs opacity-0  ${className}`}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">GET INVOLVED</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center lg:text-left lg:pt-24">
          <h5 className="text-2xl font-extrabold uppercase" >{"Want to get more involved?"}</h5>
          <p className="text-gray-300 font-medium text-1-2 lg:w-3/4 sm:w-full">
            {"We’re looking for committed people who are excited about community events, networking, and love geeking out on web dev and design!"}</p>
        </div>
      </div>

      <div className="p-10 flex sm:flex-wrap lg:flex-no-wrap justify-between">
        {involvmentList.map((i, index) =>
          <div key={index} className="sm:w-full lg:w-1/5 text-center p-5">
            <Button link={i.link} text={i.buttonText} handleButtonClick={() => { }} />
            <p className="text-gray-300 font-medium text-lg mt-5">
              {i.description}</p>
          </div>)}
      </div>
    </div>
  )
}
export default GetInvolved

export type VisibleProps = {
  isVisible: boolean
}
