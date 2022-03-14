import React from 'react'
import CV from '../../assets/cv.pdf';
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download id="ctaBtn" className="btn">Donwload CV</a>
      <a href="#contact" id="ctaBtn" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA