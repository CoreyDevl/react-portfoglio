import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/raphael-abreu-728287103/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/CoreyDevl" target="_blank"><FaGithub /></a>
      <a href="https://dribbble.com/CoreyPages" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials