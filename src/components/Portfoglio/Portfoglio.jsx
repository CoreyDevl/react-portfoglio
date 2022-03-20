import React from 'react';
import './Portfoglio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17714978-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17714952-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17714959-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17661138-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17661128-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17714965-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]


const Portfoglio = () => {

  return (
    <section id="portfoglio">
      <h5>My Recent Work</h5>
      <h2>Portfoglio</h2>
      <div className="container portfoglio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfoglio_item">
                <div className="portifoglio_item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfoglio_item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )

          })
        }
      </div>

    </section>
  )
}

export default Portfoglio