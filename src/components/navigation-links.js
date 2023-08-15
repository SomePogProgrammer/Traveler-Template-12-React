import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.AboutMe}</span>
      <span className="navigation-links-text1">{props.PastWork}</span>
      <span className="navigation-links-text2">{props.WebDevelopment}</span>
      <span className="navigation-links-text3">{props.ContactMe}</span>
      <span className="navigation-links-text4">{props.BehindTheScenes}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  BehindTheScenes: 'Behind The Scenes',
  link_text: 'https://example.com',
  AboutMe: 'About Me',
  rootClassName: '',
  ContactMe: 'Contact Me',
  WebDevelopment: 'Web Development',
  PastWork: 'Past Work',
  text: 'Link',
}

NavigationLinks.propTypes = {
  BehindTheScenes: PropTypes.string,
  link_text: PropTypes.string,
  AboutMe: PropTypes.string,
  rootClassName: PropTypes.string,
  ContactMe: PropTypes.string,
  WebDevelopment: PropTypes.string,
  PastWork: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
