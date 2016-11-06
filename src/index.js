import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

// Components
import App from './components/App'
import Landing from './components/landing/Landing'

// Router
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern='/' component={ Landing } />
        <Miss component={ Landing } />
      </div>
    </BrowserRouter>
  )
}

// Mounting Point
render(<Root/>, document.querySelector('#main'));
