import React from 'react'

// Routing
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router'

// Auth
import { render }       from 'react-dom'
import { logout }       from '../helpers/auth'
import { firebaseAuth } from '../config/constants'

// Components
import Landing   from './landing/Landing'
import TopNav    from './shared/TopNav'
import Login     from './Login'
import Signup    from './Signup'
import Dashboard from './protected/Dashboard'

function MatchWhenAuthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
  )
}

function MatchWhenUnauthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />}
      />
  )
}

// AuthRouter
class App extends React.Component {
  state = {
    authed: false,
    loading: true,
  }

  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        {({router}) => (
          <div>
            <TopNav authed={ this.state.authed } linkText='Login' linkAddr='/login' />

            <div className="container">
              <div className="row">
                <Match
                  pattern='/'
                  exactly component={ Landing }
                />
                <MatchWhenUnauthed
                  authed={ this.state.authed }
                  pattern='/login'
                  component={ Login }
                />
                <MatchWhenUnauthed
                  authed={ this.state.authed }
                  pattern='/signup'
                  component={ Signup }
                />
                <MatchWhenAuthed
                  authed={ this.state.authed }
                  pattern='/dashboard'
                  component={ Dashboard }
                />
                <Miss component={ Landing } />
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    )
  }
}

export default App




// Landing page when Auth   = Landing page with LOGOUT
// Landing page when Unauth = Landing page with LOGIN / SIGNUP

// Login/Signup when Auth   = Dashboard
// Login/Signup when Unauth = Login/Signup pages respectively
