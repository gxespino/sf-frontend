import React from 'react'
import { Link } from 'react-router'

export const SignedInNav = (props) => {
  const renderLogo = () => {
    return (
      <div className="left-nav">
        <Link to="/" className="w-inline-block">
          <img
            className="logo"
            sizes="(max-width: 479px) 100vw, 230px"
            src={require("../../../assets/images/icon-only-logo2x.png")} width="38"
          />
          <img
            className="abbrev-logo"
            sizes="(max-width: 479px) 40px, 100vw"
            src={require("../../../assets/images/icon-only-logo2x.png")} width="35"
          />
        </Link>
      </div>
    )
  }

  const renderNavLinks = () => {
    return (
      <div className="dashboard-left-nav-links">
        <a className="nav-link w--current" href="/investor/dashboard">projects</a>
        <a className="nav-link" href="/">reports</a>
        <a className="nav-link" href="/">marketing</a>
      </div>
    )
  }

  const renderDropdown = () => {
    return (
      <div>
        <div className="right-nav">
          <a className="nav-link" href="#">{props.user.email}
            <span className="fa dropdown-caret"></span>
          </a>
          <button className="clear-button w-button" onClick={props.handleLogout.bind(this)}>Logout</button>
        </div>
        <div className="mobile-profile-nav right-nav">
          <a className="profile-link-mobile w-inline-block" href="#">
            <img src={require("../../../assets/images/man-user.svg")} width="20" />
          </a>
          <button className="clear-button w-button" onClick={props.handleLogout.bind(this)}>Logout</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="fixed-page-nav navigation w-clearfix">
        {renderLogo()}
        {renderNavLinks()}
        {renderDropdown()}
      </div>
    </div>
  )
}
