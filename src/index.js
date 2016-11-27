import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

// Components
import App from './components/App'
import Landing from './components/landing/Landing'
import Login from './components/Login'
import Signup from './components/Signup'

// Styles
import './css/webflow.css'
import './css/App.css'
import './css/normalize.css'

// Router
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={ Landing } />
        <Match exactly pattern='/login' component={ Login } />
        <Match exactly pattern='/signup' component={ Signup } />
        <Miss component={ Login } />
      </div>
    </BrowserRouter>
  )
}

// Mounting Point
render(<Root/>, document.querySelector('#main'));
