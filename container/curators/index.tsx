import React, { useState, useEffect } from 'react'
import Title from '../../components/title'
import ProfileCard from '../../components/profileCard'
import AnimationWrapper from '../../components/animationWrapper'
import { VisibleProps } from '../sponsor'
import CuratorsList from '../../utility/curatorList.json'
import Link from 'next/link'

const Curators = (props: any) => {
  const { isVisible, onSelectSpeaker } = props
  const [className, setClass] = useState('')

  useEffect(() => {
    if (isVisible) {
      setClass('animated fadeInUp opacity-1')
    }
  })

  return (
    <div className={`bg-white shadow-xs opacity-0  ${className} lg:pb-10 `}>
      <div className="flex sm:flex-wrap lg:flex-no-wrap">
        <div className="bg-black lg:w-23 sm:w-full sm:flex-none lg:flex-23 h-32 flex items-end self-start justify-center">
          <h4 className="text-5xl text-white leading-7 uppercase">Curators</h4>
        </div>
        <div className="flex flex-col p-6 sm:text-center lg:text-left lg:pt-24">
          <h5 className="text-2xl font-extrabold uppercase" >{"expert talk selection"}</h5>
          <p className="text-gray-300 font-medium text-1-2 lg:w-4/6 sm:w-full">{"We’ve assembled a team of experts well-known for their knowledge in and contributions to their industry & specialization. Track curators also work together to select the general session keynotes!"}</p>
        </div>
      </div>

      <div className="flex flex-wrap md:mt-6">
        {CuratorsList.map((curator, i) => {
          const { track, name, image, title, company, location, bio, allLink, twitterURL } = curator;
          return (<div key={i} className="lg:w-1/2 sm:w-full md:p-10 sm:p-5">
            <AnimationWrapper parentClass="" >
              <Title title={track} parentClass="flex justify-center border-solid border border-gray-200" />
              <div className="flex pt-10 sm:flex-wrap md:flex-no-wrap justify-center">
                <div className="md:w-1/3 sm:w-3/4">
                  <ProfileCard
                    isForDescription={true}
                    imageClass="border border-2 filter-none"
                    isLast={i === CuratorsList.length - 1}
                    key={1}
                    imageUrl={image}
                    name={name}
                    designation={title}
                    companyName={company}
                    locationFull={location}
                  />
                </div>
                <div className="flex flex-col md:w-2/3 sm:w-full md:pl-10 sm:pl-0 md:text-left sm:text-center">
                  <p className="text-gray-300 text-1-2 font-medium">{bio}</p>
                  {twitterURL !== '' && <a href={'https://twitter.com/mwSummit'}
                  className="text-blue-100 text-1-2 font-medium cursor-pointer">
                    {"Send us your best guesses on twitter!"}
                    </a>}
                  {allLink && 
                  <Link href='/#speakers'>
                  <a onClick={() => {onSelectSpeaker(track)}} 
                  className="md:self-start sm:self-center arrow-link">
                    {allLink}
                    <span className="arrow">{' > '}</span> </a></Link>}
                </div>
              </div>
            </AnimationWrapper>
          </div>)
        }
        )}

      </div>
    </div>
  )
}

export default Curators
