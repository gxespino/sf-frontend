import React from 'react'

export class ProjectRowAnalyzed extends React.Component {
  render() {
    return (
      <div className="analyzed project w-clearfix">
        <div className="project-left">
          <div className="ltv-div">
            <p className="ltv">81<span className="percent">%</span>
            </p>
            <p className="caps ltv-caps">LTV</p>
          </div>
        </div>
        <div className="project-info w-clearfix">
          <div className="info-left">
            <p className="bold paragraph-small">1613 West Key Ave</p>
          </div>
          <div className="info-right">
            <p className="green info-price">$7,800</p>
          </div>
          <div className="info-center-1">
            <p className="caps"><span className="info-date">Oct 2, 2016</span>
            </p>
          </div>
          <div className="info-center-2">
            <p className="caps">Analyzed</p>
          </div>
        </div>
        <div className="project-toggle">
          <div>
            <div className="fa large-icon"></div>
          </div>
        </div>
      </div>
    )
  }
}
