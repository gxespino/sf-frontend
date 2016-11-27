import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="w-container">
            <h1>The easiest way to analyze<br />your flips and rehabs</h1>
            <a className="button w-button" href="#">Analyze a deal now</a>
            <div className="hero-banner-div">
              <img sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src={require("../../assets/images/hero-ss-browser2x.png")}></img>
              <img className="hero-banner" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px" src={require("../../assets/images/hero-ss.png")}></img>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="w-container">
            <h2>Crunch the numbers and analyze your deals—then generate professional investment reports for you and your investors!</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
