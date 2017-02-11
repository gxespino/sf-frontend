import React from 'react'

export class ProjectRowIncomplete extends React.Component {
  render() {
    return (
      <div className="project w-clearfix">
        <div className="project-left">
          <div className="ltv-div">
            <p className="ltv">---</p>
            <p className="caps ltv-caps">LTV</p>
          </div>
        </div>
        <div className="project-info w-clearfix">
          <div className="info-left">
            <p className="bold paragraph-small">908 Sable Road</p>
          </div>
          <div className="info-right">
            <p className="info-price">---</p>
          </div>
          <div className="info-center-1">
            <p className="caps"><span>Sept 28, 2016</span>
            </p>
          </div>
          <div className="info-center-2">
            <p className="caps">incomplete</p>
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
