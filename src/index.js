import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Home from './views/home'
import ContactMe from './views/contact-me'
import PastWork from './views/past-work'
import BehindTheScenes from './views/behind-the-scenes'
import Page from './views/page'
import AboutMe from './views/about-me'
import WebDevelopment from './views/web-development'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} exact path="/login" />
        <Route component={Home} exact path="/home" />
        <Route component={ContactMe} exact path="/contact-me" />
        <Route component={PastWork} exact path="/past-work" />
        <Route component={BehindTheScenes} exact path="/behind-the-scenes" />
        <Route component={Page} path="**" />
        <Route component={AboutMe} exact path="/" />
        <Route component={WebDevelopment} exact path="/web-development" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
