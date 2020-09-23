import React from 'react'
import AnimationWrapper from './animationWrapper'

const SponsorDescription = (props: SponsorDescriptionProps) => {
  const {
    description,
    image,
    parentClass,
    descriptionClass,
    innerClass,
    imageClass
  } = props

  return (
    <div className={parentClass}>
      <div className={innerClass} >
        <a href="https://www.google.co.in/">
          <img className={`inline mb-6 opacity-75 hover:opacity-100 ${imageClass}`} src={image} />
        </a>
        <AnimationWrapper parentClass="" effect={"fadeIn"}>
          <p className={descriptionClass}>{description}</p>
        </AnimationWrapper>
      </div>
    </div>
  )

}
export default SponsorDescription

type SponsorDescriptionProps = {
  description: string,
  image: string,
  parentClass: string,
  descriptionClass: string,
  innerClass: string,
  imageClass: string,
}
