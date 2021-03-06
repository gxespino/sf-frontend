import React from 'react'

// Routing
import { BrowserRouter, Match, Miss, Link, Redirect } from 'react-router'

// Auth
import { render } from 'react-dom'
import { logout } from '../helpers/auth'
import { base }   from '../config/constants'

// Components
import { TopNav }    from './shared/TopNav'
import { Footer }    from './shared/Footer'
import { Landing }   from './landing/Landing'
import { Login }     from './Login'
import { Signup }    from './Signup'
import { Dashboard } from './protected/Dashboard'

function MatchWhenAuthed ({component: Component, authed, ...rest}) {
  return (
    <Match
      {...rest}
      render={(props) => authed === true
        ? <Component {...rest} />
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
        : <Redirect to='/investor/dashboard' />}
      />
  )
}

// AuthRouter
export class App extends React.Component {
  constructor() {
    super()

    this.state = {
      authed: false,
      loading: true,
    }
  }

  componentDidMount() {
    this.removeListener = base.onAuth((user) => {
      if (user) {
        this.setState({
          authed: true,
          user: user,
          loading: false,
        })
      } else {
        this.setState({
          loading: true,
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  handleLogout = (e) => {
    e.preventDefault()
    logout()
    this.setState({authed: false})
  }

  render() {
    return this.state.loading === true ? <h1>Loading...</h1> : (
      <BrowserRouter>
        {({router}) => (
          <div>
            <TopNav
              authed={this.state.authed}
              handleLogout={this.handleLogout}
              user={this.state.user}
            />

            <div className="container">
              <div className="row">
                <MatchWhenUnauthed
                  authed={this.state.authed}
                  pattern='/login'
                  component={Login}
                />
                <MatchWhenUnauthed
                  authed={this.state.authed}
                  pattern='/signup'
                  component={Signup}
                />
                <MatchWhenAuthed
                  authed={this.state.authed}
                  user={this.state.user}
                  pattern='/investor/dashboard'
                  component={Dashboard}
                />
                <Miss component={Landing} />
              </div>
            </div>

            <Footer />
          </div>
        )}
      </BrowserRouter>
    )
  }
}
