import React from 'react'
import './styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <span>Built with</span>
        <a
          href='https://reactjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          React.js
        </a>
        &middot;
        <a
          href='https://www.chartjs.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Chart.js
        </a>
        &middot;
        <a
          href='https://github.com/IonicaBizau/node-gh-polyglot'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub Polyglot
        </a>
        &middot;
        <a
          href='https://tsparticles.matteobruni.it/'
          target='_blank'
          rel='noopener noreferrer'
        >
          tsparticles
        </a>
        &middot;
        <a
          href='https://github.com/joshwcomeau/react-flip-move'
          target='_blank'
          rel='noopener noreferrer'
        >
          React Flip Move
        </a>
        and more!
      </div>
    </div>
  )
}

export default Footer
;<span>Built with</span>
