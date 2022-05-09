import React from 'react'
import clsses from './Header.module.css'
import logo from '../../assets/images/logo.svg'
import reactLogo from '../../assets/images/react.svg'
const Header = () => {
  return (
    <header>
        <div className="container react" id="header">
          <div>
            <img className={clsses.logo} src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={reactLogo} alt="React" className={clsses.reactLogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
  )
}

export default Header