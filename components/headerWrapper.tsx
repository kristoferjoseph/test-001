import React, { useState } from 'react'
import StickyHeader from './stickyHeader'
import NavMenu from './navMenu'

const HeaderWrapper = (props) => {
  const [showMenu, setShowMenu] = useState(false)
  const menuOpen = () => {
    setShowMenu(!showMenu);
  }
  return (<>
    <StickyHeader menuOpen={() => menuOpen()} />
    {showMenu &&
      <NavMenu
        menuOpen={menuOpen}
      />}
    {props.children}
  </>)
}

export default HeaderWrapper
