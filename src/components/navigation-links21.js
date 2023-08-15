import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links21.css'

const NavigationLinks21 = (props) => {
  return (
    <nav className={`navigation-links21-nav ${props.rootClassName} `}>
      <span className="navigation-links21-text">{props.AboutMe}</span>
      <span className="navigation-links21-text1">{props.PastWork}</span>
      <span className="navigation-links21-text2">{props.WebDevelopment}</span>
      <span className="navigation-links21-text3">{props.ContactMe}</span>
      <span className="navigation-links21-text4">{props.BehindTheScenes}</span>
    </nav>
  )
}

NavigationLinks21.defaultProps = {
  PastWork: 'Past Work',
  text: 'Link',
  rootClassName: '',
  link_text: 'https://example.com',
  BehindTheScenes: 'Behind The Scenes',
  ContactMe: 'Contact Me',
  WebDevelopment: 'Web Development',
  AboutMe1: 'About Me',
  AboutMe: 'About Me',
}

NavigationLinks21.propTypes = {
  PastWork: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  link_text: PropTypes.string,
  BehindTheScenes: PropTypes.string,
  ContactMe: PropTypes.string,
  WebDevelopment: PropTypes.string,
  AboutMe1: PropTypes.string,
  AboutMe: PropTypes.string,
}

export default NavigationLinks21
