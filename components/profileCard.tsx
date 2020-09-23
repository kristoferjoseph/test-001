import React from 'react'
import AnimationWrapper from './animationWrapper'

const ProfileCard = (props: ProfileCardProps) => {
  const { imageUrl, name, designation, companyName, locationFull, isLast, imageClass, isForDescription } = props
  const content = isLast ?
    <>
      <div className="bg-gray-500" >
        <img src="/images/silhouette.svg" alt="image" className={`w-full ${imageClass}`} />
      </div>
      {!isForDescription ? <div className="h-32 flex items-center justify-center cursor-pointer bg-lightGreen-200 hover:bg-lightGreen-100">
        <p className="text-lg text-black font-bold tracking-wide uppercase">See all speakers {'>'}</p>
      </div> : <div className="bg-gray-400 p-5">
          <h5 className="text-white uppercase text-1-2">{name}</h5>
          <p className="capitalize text-white opacity-75 text-sm">{designation}</p>
          {companyName !== '' && <p className="text-white opacity-75 text-sm mt-2 flex items-baseline"><img className="inline mr-2 h-3" src="/images/office.svg" alt="office" /> <span>{companyName}</span></p>}
          <p className="text-white opacity-75 text-sm flex items-baseline"><img className="inline mr-2 h-3" src="/images/map-pin.svg" alt="address" /> <span>{locationFull}</span></p>
        </div>}
    </>
    :
    <>
      <img src={imageUrl} alt="image" className={`w-full ${imageClass}`} />
      <div className="bg-gray-400 p-5">
        <h5 className="text-white uppercase text-1-2">{name}</h5>
        <p className="capitalize text-white opacity-75 text-sm">{designation}</p>
        {companyName !== '' && <p className="text-white opacity-75 text-sm mt-2 flex items-baseline"><img className="inline mr-2 h-3" src="/images/office.svg" alt="office" /> <span>{companyName}</span></p>}
        <p className="text-white opacity-75 text-sm flex items-baseline"><img className="inline mr-2 h-3" src="/images/map-pin.svg" alt="address" /> <span>{locationFull}</span></p>
      </div>
    </>
  if (isForDescription) {
    return (
      <div className="md:mb-2 sm:mb-5 profile-card">
        {content}
      </div>
    )
  }
  else {
    return (
      <AnimationWrapper parentClass="md:mb-2 sm:mb-5 profile-card">
        {content}
      </AnimationWrapper>
    )
  }
}

export default ProfileCard

type ProfileCardProps = {
  imageUrl: string,
  name: string,
  designation: string,
  companyName: string,
  locationFull: string,
  isLast: boolean,
  imageClass: string,
  isForDescription: boolean
}
