import React from 'react'
import { Link } from 'react-router'

// Functions
import { logout } from '../../helpers/auth'

export const TopNav = (props) => {
  const renderLogo = () => {
    return (
      <Link to="/" className="w-inline-block">
        <img
          className="logo"
          sizes="(max-width: 479px) 100vw, 230px"
          src={require("../../assets/images/logo-with-icon2x.png")} width="230"
        />
        <img
          className="abbrev-logo"
          sizes="(max-width: 479px) 40px, 100vw"
          src={require("../../assets/images/icon-only-logo2x.png")} width="40"
        />
      </Link>
    )
  }

  const authLink = () => {
    return props.authed === true ?
      <button className="clear-button w-button" onClick={props.handleLogout.bind(this)}>Logout</button> :
      <Link to='/login' className="clear-button w-button">Login</Link>
  }

  return (
    <div>
      <div className="fixed-page-nav navigation w-clearfix">
        <div className="left-nav">
          {renderLogo()}
        </div>
        <div className="right-nav">
          {authLink()}
        </div>
        <div className="mobile-profile-nav right-nav">
          {authLink()}
        </div>
      </div>
    </div>
  )
}
