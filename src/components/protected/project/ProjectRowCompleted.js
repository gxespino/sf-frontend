import React from 'react'

export class ProjectRowCompleted extends React.Component {
  render() {
    return (
      <div className="project sent-to-lender w-clearfix">
        <div className="project-left">
          <div className="ltv-div">
            <p className="ltv">45<span className="percent">%</span>
            </p>
            <p className="caps ltv-caps">LTV</p>
          </div>
        </div>
        <div className="project-info w-clearfix">
          <div className="info-left">
            <p className="bold paragraph-small">1660 East Key Ave</p>
          </div>
          <div className="info-right">
            <p className="green info-price">$27,600</p>
          </div>
          <div className="info-center-1">
            <p className="caps"><span>Aug 15, 2016</span>
            </p>
          </div>
          <div className="info-center-2">
            <p className="caps">sent to lender</p>
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
