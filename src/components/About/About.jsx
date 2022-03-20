import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure maiores, facere doloribus iusto rerum suscipit deleniti soluta quis vel voluptas.
            <hr />

          </p>
        </div>
      </div>
    </section>
  )

}


export default About