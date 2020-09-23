import React, { useState, useEffect } from 'react'
import AboutDescription from '../../components/aboutDescription'
import { VisibleProps } from '../sponsor'
import AnimationWrapper from '../../components/animationWrapper'

const About = (props: VisibleProps) => {
  const { isVisible } = props
  const [className, setClass] = useState('')

  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })

  return (
    <div className={`bg-white shadow-xs opacity-0  ${className} sm:pb-16 `}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">About</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center lg:text-left lg:pt-24">
          <h5 className="text-2xl font-extrabold uppercase" >{"the modern web is constantly evolving"}</h5>
          <p className="text-gray-300 font-medium text-1-2 md:w-full sm:w-full">{"Each one of us have contributed to the modern web in our own way. We discover technologies that solve our problems (and perhaps inspire us), join a community, and get to work. We share our experience with our coworkers, colleagues, and online network. But there is much more to the web community than our own little islands."}</p>
          <p className="text-gray-300 font-medium text-1-2 md:w-full sm:w-full pt-8">{"The Modern Web Summit not only to provides you with in-depth knowledge about the technologies you’re currently working with, but also exposes you to new ways of thinking and approaches from adjacent communities. You’ll learn from thought-leaders in your community and beyond, and connect with like-minded individuals with unique, thought-provoking perspectives. "}</p>
        </div>
      </div>
      <div className="flex flex-wrap lg:mt-6 lg:px-24">
        <AnimationWrapper parentClass="md:w-3/5 sm:w-full md:p-10 sm:p-5">
          <p className="text-2xl uppercase text-black font-extrabold">More than just a livestream</p>
          <p className="text-gray-300 font-medium text-1-2 sm:w-full pt-4">{"Let’s face it: a livestream of talks is not a real conference. There is so much more to a conference than the presentations, and the online events we’ve seen in 2020 simply don’t achieve a true conference experience."}</p>
          <p className="text-gray-300 font-medium text-1-2 sm:w-full pt-8">{"The Modern Web Summit is different. It takes place on a new, revolutionary events platform called EventLoop -- a web app that’s purpose-built for online meetups and conferences. It provides attendees, speakers, and sponsors alike with an all-encompassing experience that inspires and facilitates true connections between people.  "}</p>
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-2/5 sm:w-full sm:p-5 md:pt-24">
          <img src="/images/mws_plus_eventloop.svg" />
        </AnimationWrapper>
        <div className="md:p-10 w-full">
          <p className="text-2xl uppercase text-black font-extrabold sm:text-center md:text-left">What you’ll experience</p>
        </div>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/keynotes-icon.svg"
            title="General Session Keynotes"
            firstDescription="Hear from some of the world’s foremost experts in our opening & closing keynotes each day. Their talk subjects will be of relevance to everyone across all tracks! "
            secondDescription=""
            parentClass=""
            url="https://www.google.co.in/"
            // linkText="See all the keynotes "
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/tracks-icon.svg"
            title="multiple targeted tracks"
            firstDescription="With over 100 sessions across multiple tracks, you’ll be certain to find content that is interesting to you and relevant to your professional work. You’ll be able to dive deeper into the subjects that you are already familiar with, and learn new things about subjects and technologies that was not yet on your radar. "
            secondDescription=""
            parentClass=""
            url="https://www.google.co.in/"
            // linkText="See all the tracks and speakers "
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/breakouts-icon.svg"
            title="Discussion Breakouts & topic tables"
            firstDescription="With moderated & open discussion breakouts, you’ll connect with others around a specific subject. Browse a wide variety of open discussions happening now, or add upcoming discussion sessions to your calendar."
            secondDescription="With discussion sessions, you can participate in a number of ways: passively watch and listen, engage with the discussion group via the in-app chat room, or join the video discussion to get face-time with your fellow attendees and speakers!  "
            parentClass=""
            url="https://www.google.co.in/"
            // linkText="See all the SCHEDULED DISCUSSION BREAKOUTS "
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/meetings-icon.svg"
            title="Meet and connect with other professionals"
            firstDescription="With EventLoop, you have many opportunities to meet up with new and old friends alike. You’ll be able to chat in-app (as opposed to a third-party app), see custom profiles of other attendees and connect with them, and even initiate/receive video meeting requests from  right inside the app. Once accepted, it’s added to your calendar, and you’ll receive a notification before the meeting! You’ll meet within the app so you don’t need to worry about managing other applications.  "
            secondDescription=""
            parentClass=""
            url=""
            // linkText=""
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/workshops-icon.svg"
            title="Workshops"
            firstDescription="From beginner to advanced, taking place over a few hours to two days, we have the workshop for you. Featuring instructors renowned for their contributions and educating abilities, across all tracks, you can choose the workshop that is most interesting and valuable to you."
            secondDescription="The Full Access ticket includes access to the daily Mini Workshops. Full Day & 2-day Workshops are sold separately from the conference."
            parentClass=""
            url="https://www.google.co.in/"
            // linkText="See all the workshops available  "
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/sponsor-booths-icon.svg"
            title="Sponsorship booths"
            firstDescription="Connect with companies on the cutting-edge of web development. Whether you’re looking to learn more about their APIs and products, or are interested in joining their team, mingling with our sponsors is a great way to build connections for your company and your professional career.  "
            secondDescription=""
            parentClass=""
            url="https://www.google.co.in/"
            // linkText="See all of our sponsors "
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/activities-icon.svg"
            title="Activities"
            firstDescription="Are you the type of person who likes hands-on activities at events? Then you’re going to love the Modern Web Summit! We’ll have a number of fun activities throughout the event: From active competitions that test your web dev skills (for prizes), to fun networking activities that help you to meet new friends -- we’ll be getting creative and competitive. "
            secondDescription=""
            parentClass=""
            url=""
            // linkText=""
          />
        </AnimationWrapper>
        <AnimationWrapper parentClass="md:w-1/2 sm:w-full md:p-10 md:pt-0 sm:p-5">
          <AboutDescription
            image="/images/jobs-icon.svg"
            title="Hiring Mixer"
            firstDescription="The current crisis has put a lot of stress on individuals and companies. But many companies are still hiring, including our sponsors!"
            secondDescription="Join us at the Modern Web Summit hiring mixer, where you’ll choose which companies you’re interested in sending your information, and companies will follow up via email or schedule a video meeting. "
            parentClass=""
            url="https://www.google.co.in/"
            // linkText="LEARN MORE ABOUT THE HIRING MIXER "
          />
        </AnimationWrapper>
      </div>
    </div>
  )
}

export default About
