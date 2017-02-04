import React from 'react'

export class BottomNav extends React.Component {
  productLink(linkText) {
    return (
      <a className="product-selection-link-block w-inline-block" href="#">
        <div className="product-selection-text">{linkText}</div>
      </a>
    )
  }

  render() {
    return (
      <div>
        <div className="select-product">
          <div className="w-container">
            <h2>Simplify your flips with our</h2>

            <div className="product-selection-div">
              {this.productLink("Rehab Analyzer")}
              {this.productLink("Lender Presentations")}
              {this.productLink("Repair Estimator")}
              {this.productLink("Analysis Reports")}
              {this.productLink("Rental Calculator")}
              {this.productLink("Alternative Strategies")}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
