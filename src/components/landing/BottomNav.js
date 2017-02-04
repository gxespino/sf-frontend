import React from 'react'

export class BottomNav extends React.Component {
  render() {
    return (
      <div>
        <div className="select-product">
          <div className="w-container">
            <h2>Simplify your flips with our</h2>
            <div className="product-selection-div">
              <a className="product-selection-link-block w-inline-block" href="#">
                <div className="product-selection-text">Rehab Analyzer</div>
              </a>
              <a className="product-selection-link-block w-inline-block" href="#">
                <div className="product-selection-text">Lender Presentations</div>
              </a>
              <a className="product-selection-link-block w-inline-block" href="#">
                <div className="product-selection-text">Repair Estimator</div>
              </a>
              <a className="product-selection-link-block w-inline-block" href="#">
                <div className="product-selection-text">Analysis Reports</div>
              </a>
              <a className="product-selection-link-block w-inline-block" href="#">
                <div className="product-selection-text">Rental Calculator</div>
              </a>
              <a className="product-selection-link-block w-inline-block" href="#">
                <div className="product-selection-text">Alternative Strategies</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
