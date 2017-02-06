import React from 'react'
import { Link } from 'react-router'

export const SignedOutNav = (props) => {
  const renderLogo = () => {
    return (
      <div className="left-nav">
        <Link to="/" className="w-inline-block">
          <img
            className="logo"
            sizes="(max-width: 479px) 100vw, 230px"
            src={require("../../../assets/images/logo-with-icon2x.png")} width="230"
          />
          <img
            className="abbrev-logo"
            sizes="(max-width: 479px) 40px, 100vw"
            src={require("../../../assets/images/icon-only-logo2x.png")} width="40"
          />
        </Link>
      </div>
    )
  }

  const renderAuthLink = () => {
    return (
      <div>
        <div className="right-nav">
          <Link to='/login' className="clear-button w-button">Login</Link>
        </div>
        <div className="mobile-profile-nav right-nav">
          <Link to='/login' className="clear-button w-button">Login</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="fixed-page-nav navigation w-clearfix">
        {renderLogo()}
        {renderAuthLink()}
      </div>
    </div>
  )
}
