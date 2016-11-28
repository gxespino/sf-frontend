import React from 'react'
import { render } from 'react-dom';

// Components
import App from './components/App'

// Styles
import './assets/css/webflow.css'
import './assets/css/App.css'
import './assets/css/normalize.css'

// Mounting Point
render(<App />, document.querySelector('#main'));
