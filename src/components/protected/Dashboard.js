import React from 'react'

// Components
import { TopNav }    from '../shared/TopNav'
import { Header }    from '../landing/Header'
import { Features }  from '../landing/Features'
import { BottomNav } from '../landing/BottomNav'
import { Promo }     from '../landing/Promo'

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-section">
        <div className="w-container">
          <div className="action-bar w-clearfix">
            <div className="action-bar-left"></div>
            <div className="action-bar-right"><a className="button small w-button" href="#">new project</a>
            </div>
          </div>
          <div className="project-list">
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
            <div className="analyzed project w-clearfix">
              <div className="project-left">
                <div className="ltv-div">
                  <p className="ltv">65<span className="percent">%</span>
                  </p>
                  <p className="caps ltv-caps">LTV</p>
                </div>
              </div>
              <div className="project-info w-clearfix">
                <div className="info-left">
                  <p className="bold paragraph-small">1221 Houston Road</p>
                </div>
                <div className="info-right">
                  <p className="info-price red">- $6,340</p>
                </div>
                <div className="info-center-1">
                  <p className="caps"><span className="caps">Sept 26, 2016</span>
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
            <div className="project sent-to-lender w-clearfix">
              <div className="project-left">
                <div className="ltv-div">
                  <p className="ltv">68<span className="percent">%</span>
                  </p>
                  <p className="caps ltv-caps">LTV</p>
                </div>
              </div>
              <div className="project-info w-clearfix">
                <div className="info-left">
                  <p className="bold paragraph-small">89 16th NW</p>
                </div>
                <div className="info-right">
                  <p className="green info-price">$31,995</p>
                </div>
                <div className="info-center-1">
                  <p className="caps"><span>Oct 9, 2016</span>
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
          </div>
        </div>
      </div>
    )
  }
}
