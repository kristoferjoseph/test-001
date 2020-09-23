import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react';

const SectionWrapper = (props) => {
  const [isVisible, setVisible] = useState(false)
  const { Component } = props
  return (
    <VisibilitySensor
      partialVisibility
      onChange={(visible) => setVisible(visible)}
      active={!isVisible}>
      <Component isVisible={isVisible} {...props}/>
    </VisibilitySensor>
  )
}
export default SectionWrapper
