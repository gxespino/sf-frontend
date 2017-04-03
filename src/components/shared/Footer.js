import React from 'react'

export const Footer = () => {
  const footerLink = (linkText, linkAddress) => {
    return (
      <li className="footer-link">
        <a className="footer-li-link" href={linkAddress}>{linkText}</a>
      </li>
    )
  }

  return (
    <div>
      <div className="footer">
        <div className="w-container">
          <div className="footer-div">
            <div className="w-row">
              <div className="w-col w-col-4">
                <div className="footer-links-column">
                  <a className="footer-header-link" href="#">Products &amp; Tools</a>
                  <ul className="footer-links-list w-list-unstyled">
                    {footerLink('analyzers', '#')}
                    {footerLink('estimators', '#')}
                    {footerLink('reports', '#')}
                    {footerLink('presentations', '#')}
                  </ul>
                </div>
              </div>
              <div className="w-col w-col-4">
                <div className="footer-links-column">
                  <a className="footer-header-link" href="#">Company</a>
                  <ul className="footer-links-list w-list-unstyled">
                    {footerLink('about us', '#')}
                    {footerLink('blog', '#')}
                    {footerLink('faq', '#')}
                  </ul>
                </div>
              </div>
              <div className="w-col w-col-4">
                <div className="footer-links-column">
                  <a className="footer-header-link" href="#">Contact</a>
                  <p className="footer-contact">
                    1400 Key Blvd. Ste 100
                    <br />
                    <br />Arlington, VA 22209
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              ©2017 Smarter Flips Inc. Smarter Flips is not a law firm, does not provide legal services or advice, and does not provide or participate in legal representation.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
