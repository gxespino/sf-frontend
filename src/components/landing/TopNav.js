import React from 'react'

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <div className="navigation w-clearfix">
          <div className="left-nav">
            <a className="w-inline-block" href="index.html">
              <img className="logo" sizes="(max-width: 479px) 100vw, 230px" src={require("../../images/logo-with-icon2x.png")} width="230"></img>
              <img className="abbrev-logo" sizes="(max-width: 479px) 40px, 100vw" src={require("../../images/icon-only-logo2x.png")} width="40"></img>
            </a>
          </div>
          <div className="right-nav">
            <a className="clear-button w-button" href="log-in.html">Login</a>
          </div>
          <div className="mobile-profile-nav right-nav">
            <a className="clear-button w-button" href="log-in.html">Login</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TopNav
