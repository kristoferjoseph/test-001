import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

const FinanceDescription = (props: FinanceDescriptionProps) => {
  const {
    image,
    parentClass,
    description,
    title,
    url,
    linkText,
    percentage,
    financeImage
  } = props

  const [isVisible, setVisible] = useState(false)

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible} >
      <div className={parentClass}>
        <div className="flex">
          <img src={image} />
          {isVisible && <p className="text-4xl pl-4"><CountUp end={percentage} delay={0.5} duration={5} /> %</p>}
        </div>
        <p className="text-2xl uppercase text-black font-extrabold mb-2" >{title}</p>
        {financeImage && <img src={financeImage} className="my-6 opacity-50" />}
        <p className="text-gray-300 font-medium text-1-2 sm:w-full mb-8">{description}</p>
        {linkText && <a href={url} className="sm:mt-5 md:mt-0 md:self-start sm:self-center text-lg font-bold border-l-4 border-lightGreen-200 pl-2 uppercase arrow-link leading-6 hover:text-black">{linkText} <span className="arrow">{' > '}</span></a>}
      </div>
    </VisibilitySensor>
  )

}
export default FinanceDescription

type FinanceDescriptionProps = {
  financeImage: string,
  percentage: number,
  title: string,
  image: string,
  parentClass: string,
  description: string,
  linkText: string,
  url: string
}
