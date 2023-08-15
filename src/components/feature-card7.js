import React from 'react'

import PropTypes from 'prop-types'

import './feature-card7.css'

const FeatureCard7 = (props) => {
  return (
    <div className="feature-card7-feature-card">
      <svg viewBox="0 0 731.4285714285713 1024" className="feature-card7-icon">
        <path d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"></path>
      </svg>
      <h2 className="feature-card7-text">{props.title}</h2>
      <span className="feature-card7-text1">{props.description}</span>
      <button className="feature-card7-past-work button">
        {props.PastWork}
      </button>
    </div>
  )
}

FeatureCard7.defaultProps = {
  title: 'Contact Me',
  description:
    "Send me a job offer! Or get a quote, I'm always looking for ways to get more experience. Money is my last concern when I take jobs, this is my passion and I love helping people!",
  PastWork: 'View',
}

FeatureCard7.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  PastWork: PropTypes.string,
}

export default FeatureCard7
