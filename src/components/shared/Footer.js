import React from 'react'

export class Footer extends React.Component {
  footerLink = (linkText, linkAddress) => {
    return (
      <li className="footer-link">
        <a className="footer-li-link" href={linkAddress}>{linkText}</a>
      </li>
    )
  }

  render() {
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
                      {this.footerLink('analyzers', '#')}
                      {this.footerLink('estimators', '#')}
                      {this.footerLink('reports', '#')}
                      {this.footerLink('presentations', '#')}
                    </ul>
                  </div>
                </div>
                <div className="w-col w-col-4">
                  <div className="footer-links-column">
                    <a className="footer-header-link" href="#">Company</a>
                    <ul className="footer-links-list w-list-unstyled">
                      {this.footerLink('about us', '#')}
                      {this.footerLink('blog', '#')}
                      {this.footerLink('faq', '#')}
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
                ©2016 Smarter Flips Inc. Smarter Flips is not a law firm, does not provide legal services or advice, and does not provide or participate in legal representation.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
