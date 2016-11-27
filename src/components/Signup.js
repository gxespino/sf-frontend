import React from 'react'

// Components
import TopNav from './shared/TopNav'
import Footer from './shared/Footer'

class Signup extends React.Component {
  render() {
    return (
      <div>
        <TopNav linkText='log in' linkAddr='/login' />
        <div className="sign-up-section">
          <div className="sign-up-header-container w-container">
            <div className="sign-up-header">
              <h2 className="sign-up-header-h2">Intelligent tools &amp; automatically generated reports for the world's best real estate investors</h2>
              <h4>Trusted by 2000+ Investors globally</h4>
            </div>
          </div>
          <div className="sign-up-body-container w-container">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-stack">
                <div className="auth-div sign-up">
                  <div className="log-in-form">
                    <div className="w-form">
                      <form data-name="Email Form" id="email-form" name="email-form">
                        <div className="input-group">
                          <label className="caps-label">Email
                            <input className="form-input w-input" data-name="Email" id="Email-2" maxLength="256" name="Email" placeholder="your@email.com" required="required" type="email" />
                          </label>
                        </div>
                        <div className="input-group">
                          <label className="caps-label">Full name
                            <input className="form-input w-input" data-name="Full Name" id="Full-Name" maxLength="256" name="Full-Name" placeholder="Jane Smith" required="required" type="text" />
                          </label>
                        </div>
                        <div className="input-group">
                          <label className="caps-label">Password
                            <input className="form-input w-input" data-name="Password" id="Password-2" maxLength="256" name="Password" placeholder="Password" required="required" type="email" />
                          </label>
                        </div>
                        <div className="input-group">
                          <label className="caps-label">Company name (optional)
                            <input className="form-input w-input" data-name="Company Name" id="Company-Name" maxLength="256" name="Company-Name" placeholder="Flip Corp" required="required" type="email" />
                          </label>
                        </div>
                        <input className="button sign-in-button w-button" data-wait="Please wait..." type="submit" value="Sign Up" />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form</div>
                      </div>
                    </div>
                  </div>
                  <div className="acceptance-div">
                    <p className="acceptance-paragraph">By creating an account,
                      <br />you accept our&nbsp;<a className="acceptance-link" href="#">Terms of Use</a>.</p>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-6 w-col-stack">
                <div className="testimonials-div">
                  <div className="benefit-group">
                    <div className="benefit-icon">
                      <img src={require("../assets/images/contract.svg")} width="60"></img>
                    </div>
                    <div className="benefit-blurb">
                      <p className="paragraph-small">Get in depth investment analysis
                        <br />faster than ever before</p>
                    </div>
                  </div>
                  <div className="benefit-group">
                    <div className="benefit-icon">
                      <img src={require("../assets/images/check.svg")} width="60"></img>
                    </div>
                    <div className="benefit-blurb">
                      <p className="paragraph-small">Generate &amp; send professional
                        <br />lender presentations</p>
                    </div>
                  </div>
                  <div className="testimonial-blurb">
                    <p className="testimonial-paragraph">I analyzed a handful of potential flips this morning and already made offers on the best ones. Awesome experience!</p>
                  </div>
                  <div className="testimonial-author w-clearfix">
                    <img className="testimonial-avatar" src={require("../assets/images/avatar.jpg")} width="40"></img>
                    <p className="testimonial-author-text">Glenn Espinosa, Alexandria, VA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Signup
