import React from 'react'
import { Link } from 'react-router'

// sign up/log in
// sign up link/log in link

const TopNav = (props) => {
  return (
    <div>
      <div className="fixed-page-nav navigation w-clearfix">
        <div className="left-nav">
          <Link to="/" className="w-inline-block">
            <img className="logo" sizes="(max-width: 479px) 100vw, 230px" src={require("../../images/logo-with-icon2x.png")} width="230"></img>
            <img className="abbrev-logo" sizes="(max-width: 479px) 40px, 100vw" src={require("../../images/icon-only-logo2x.png")} width="40"></img>
          </Link>
        </div>
        <div className="right-nav">
          <Link to={ props.linkAddr } className="clear-button w-button">{ props.linkText }</Link>
        </div>
        <div className="mobile-profile-nav right-nav">
          <Link to={ props.linkAddr } className="clear-button w-button">{ props.linkText }</Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav
