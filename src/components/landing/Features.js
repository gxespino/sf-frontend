import React from 'react'

class Features extends React.Component {
  render() {
    return (
      <div>
      <div className="feature-section">
        <div className="w-container">
          <div className="w-row">
            <div className="w-col w-col-6 w-col-stack">
              <div className="feature-content-left-column">
                <h2>Analyze Prospective Deals With Ease</h2>
                <div className="feature-copy">
                  <p>Answer a few questions about your deals to automagically generate the data and analysis you'll need to make the best investment decisions. Analyze more deals &amp; grow your bottomline.</p>
                </div>
                <a className="w-inline-block" href="#">
                  <div className="learn-more">
                    Learn More <span className="fa"></span>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-col w-col-6 w-col-stack">
              <div>
                <img className="private-talent-image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 514px, 460px" src={require("../../images/wlecome-talent-pool.png")} width="514"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-feature feature-section">
        <div className="w-container">
          <div className="w-row">
            <div className="w-col w-col-6 w-col-stack">
              <div>
                <img className="enterprise-tools-image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 488px, 460px" src={require("../../images/welcome-enterprise-tools.png")} width="488"></img>
              </div>
            </div>
            <div className="w-col w-col-6 w-col-stack">
              <div>
                <div className="feature-content-right-column">
                  <h2>Generate &amp; Send Professional Lender Presentations</h2>
                  <div className="feature-copy">
                    <p>Smarter Flips automatically creates beautiful lender presentations from your deal analyses. You can tweak and customize presentations with your company logo before sending it to lenders.</p>
                  </div>
                  <a className="w-inline-block" href="#">
                    <div className="learn-more">
                      Learn More <span className="fa"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Features
