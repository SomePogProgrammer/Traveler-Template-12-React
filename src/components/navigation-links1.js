import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <button className="navigation-links1-about-me button">
        {props.AboutMe}
      </button>
      <button className="navigation-links1-past-work button">
        {props.PastWork}
      </button>
      <button className="navigation-links1-web-development button">
        {props.WebDevelopment}
      </button>
      <button className="navigation-links1-contact-me button">
        {props.ContactMe}
      </button>
      <button className="navigation-links1-behind-the-scenes button">
        {props.BehindTheScenes}
      </button>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  PastWork: 'Past Work',
  ContactMe: 'Contact Me',
  text1: 'Features',
  BehindTheScenes: 'Behind The Scenes',
  text2: 'Pricing',
  AboutMe: 'About Me',
  WebDevelopment: 'Web Development',
  text4: 'Blog',
  rootClassName: '',
  text3: 'Team',
  text: 'About',
}

NavigationLinks1.propTypes = {
  PastWork: PropTypes.string,
  ContactMe: PropTypes.string,
  text1: PropTypes.string,
  BehindTheScenes: PropTypes.string,
  text2: PropTypes.string,
  AboutMe: PropTypes.string,
  WebDevelopment: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1
