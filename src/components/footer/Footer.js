import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      Powered by{' '}
      <a href='https://newsapi.org/' target='_blank' rel='noopener noreferrer'>
        NewsAPI.org
      </a>
      {' - '}Credit to all sources published in this webapp
    </div>
  )
}

export default Footer
