import React from 'react'

export const BottomNav = () => {
  const productLink = (linkText) => {
    return (
      <a className="product-selection-link-block w-inline-block" href="#">
        <div className="product-selection-text">{linkText}</div>
      </a>
    )
  }

  return (
    <div>
      <div className="select-product">
        <div className="w-container">
          <h2>Simplify your flips with our</h2>

          <div className="product-selection-div">
            {productLink("Rehab Analyzer")}
            {productLink("Lender Presentations")}
            {productLink("Repair Estimator")}
            {productLink("Analysis Reports")}
            {productLink("Rental Calculator")}
            {productLink("Alternative Strategies")}
          </div>
        </div>
      </div>
    </div>
  )
}
