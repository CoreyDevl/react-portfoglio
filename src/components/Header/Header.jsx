import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Sample name</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA className="cta" />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header