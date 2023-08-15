import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card2.css'

const TestimonialCard2 = (props) => {
  return (
    <div
      className={`testimonial-card2-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card2-testimonial">
        <h1 className="testimonial-card2-text">{props.Role}</h1>
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="testimonial-card2-icon"
        >
          <path
            d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"
            className=""
          ></path>
        </svg>
        <span className="testimonial-card2-text1">{props.quote}</span>
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="testimonial-card2-icon2"
        >
          <path
            d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"
            className=""
          ></path>
        </svg>
        <span className="testimonial-card2-text2">{props.name}</span>
        <span className="testimonial-card2-text3">{props.Education}</span>
        <span className="testimonial-card2-text4">{props.role}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="testimonial-card2-image"
        />
      </div>
    </div>
  )
}

TestimonialCard2.defaultProps = {
  image_alt: 'image',
  role: 'PROGRAMMER',
  image_src:
    'https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMyfHxiaW5hcnl8ZW58MHx8fHwxNjkxMDAyMjYzfDA&ixlib=rb-4.0.3&w=300',
  name: 'Kees C. H.',
  Role: 'Past Colleague',
  rootClassName: '',
  quote:
    'An outstanding friend, they effortlessly combined great communication skills with remarkable productivity. Conversations flowed effortlessly, and their ability to get things done was simply impressive.',
  Education: '(Delft University of Technology)',
}

TestimonialCard2.propTypes = {
  image_alt: PropTypes.string,
  role: PropTypes.string,
  image_src: PropTypes.string,
  name: PropTypes.string,
  Role: PropTypes.string,
  rootClassName: PropTypes.string,
  quote: PropTypes.string,
  Education: PropTypes.string,
}

export default TestimonialCard2
