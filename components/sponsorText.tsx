import React from 'react'

const SponsorText = (props: SponsorTextProps) => {
  const { image, imageClass, parentClass } = props
  return (
    <div className={parentClass}>
      <a href="https://www.google.co.in/">
        <img src={image} className={`inline opacity-75 hover:opacity-100 ${imageClass} `} />
      </a>
    </div>
  )
}
export default SponsorText

type SponsorTextProps = {
  imageClass: string,
  image: string,
  parentClass: string
}
