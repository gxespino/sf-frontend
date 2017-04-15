import React from 'react'

// Components
import { TopNav } from './shared/TopNav'
import { Footer } from './shared/Footer'

// Auth
import { auth } from '../helpers/auth'

export class Signup extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const email    = e.currentTarget.email.value
    const password = e.currentTarget.password.value
    const fullName = e.currentTarget.fullName.value
    const company  = e.currentTarget.company.value

    auth(email, password, fullName, company)
  }

  signupForm = () => {
    return (
      <form data-name="Email Form" id="email-form" name="email-form" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label className="caps-label">Email
            <input className="form-input w-input" id="Email" maxLength="256" name="email" placeholder="your@email.com" required="required" type="email" />
          </label>
        </div>
        <div className="input-group">
          <label className="caps-label">Full name
            <input className="form-input w-input" id="Full-Name" maxLength="256" name="fullName" placeholder="Jane Smith" required="required" type="text" />
          </label>
        </div>
        <div className="input-group">
          <label className="caps-label">Password
            <input className="form-input w-input" id="Password" maxLength="256" name="password" placeholder="Password" required="required" type="password" />
          </label>
        </div>
        <div className="input-group">
          <label className="caps-label">Company name (optional)
            <input className="form-input w-input" id="Company" maxLength="256" name="company" placeholder="Flip Corp" type="text" />
          </label>
        </div>
        <input className="button sign-in-button w-button" data-wait="Please wait..." type="submit" value="Sign Up" />
      </form>
    )
  }

  testimonials = () => {
    return (
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
    )
  }

  render() {
    return (
      <div>
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
                  <div className="custom-form">
                    <div className="w-form">

                      {this.signupForm()}

                    </div>
                  </div>
                  <div className="acceptance-div">
                    <p className="acceptance-paragraph">By creating an account,
                      <br />you accept our&nbsp;<a className="acceptance-link" href="#">Terms of Use</a>.</p>
                  </div>
                </div>
              </div>

              {this.testimonials()}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
