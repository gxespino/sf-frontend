import React from 'react'

export class ProjectRow extends React.Component {
  profitColor = (str) => {
    if (str.includes('-$')) {
      return 'negative'
    } else if (str === '---') {
      return ''
    } else {
      return 'positive'
    }
  }

  render() {
    const details = this.props.projectDetails
    const showPercentSign = details.loanToValue === '---' ? '' : '%'

    return (
      <div className={details.status + " project w-clearfix"}>
        <div className="project-left">
          <div className="ltv-div">
            <p className="ltv">{details.loanToValue}<span className="percent">{showPercentSign}</span>
            </p>
            <p className="caps ltv-caps">LTV</p>
          </div>
        </div>
        <div className="project-info w-clearfix">
          <div className="info-left">
            <p className="bold paragraph-small">{details.address}</p>
          </div>
          <div className="info-right">
            <p className={this.profitColor(details.profit) + " info-price"}>{details.profit}</p>
          </div>
          <div className="info-center-1">
            <p className="caps"><span className="info-date">{details.dateCreated}</span>
            </p>
          </div>
          <div className="info-center-2">
            <p className="caps">{details.status}</p>
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
