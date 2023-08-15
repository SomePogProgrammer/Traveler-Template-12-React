import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <span className="navigation-links2-text">{props.AboutMe}</span>
      <span className="navigation-links2-text1">{props.PastWork}</span>
      <span className="navigation-links2-text2">{props.WebDevelopment}</span>
      <span className="navigation-links2-text3">{props.ContactMe}</span>
      <span className="navigation-links2-text4">{props.BehindTheScenes}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  PastWork: 'Past Work',
  AboutMe1: 'About Me',
  rootClassName: '',
  text: 'Link',
  ContactMe: 'Contact Me',
  link_text: 'https://example.com',
  BehindTheScenes: 'Behind The Scenes',
  AboutMe: 'About Me',
  WebDevelopment: 'Web Development',
}

NavigationLinks2.propTypes = {
  PastWork: PropTypes.string,
  AboutMe1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  ContactMe: PropTypes.string,
  link_text: PropTypes.string,
  BehindTheScenes: PropTypes.string,
  AboutMe: PropTypes.string,
  WebDevelopment: PropTypes.string,
}

export default NavigationLinks2
