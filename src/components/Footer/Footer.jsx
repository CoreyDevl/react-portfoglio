import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
const Footer = () => {
  return (
    <footer className="footer_logo" >
      <h1>Corey Pages</h1>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfoglio">Portfoglio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://instagramk.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy;Corey Pages - All Rights Reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer