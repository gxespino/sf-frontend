import React from 'react'

// Components
import { TopNav } from './shared/TopNav'
import { Footer } from './shared/Footer'

export class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="auth-section">
          <div className="w-container">
            <div className="auth-div">
              <h2>Log In</h2>
              <div className="log-in-form">
                <div className="w-form">

                  <form data-name="Email Form" id="email-form" name="email-form">
                    <input className="form-input w-input" data-name="Email" id="Email-2" maxLength="256" name="Email" placeholder="Email" required="required" type="email"></input>
                    <input className="form-input w-input" data-name="Password" id="Password" maxLength="256" name="Password" placeholder="Password" required="required" type="password"></input>
                    <div className="remember-me w-checkbox">
                      <label className="w-form-label">
                        Remember me
                        <input className="w-checkbox-input" data-name="Checkbox" id="checkbox" name="checkbox" type="checkbox"></input>
                      </label>
                    </div>
                    <input className="button sign-in-button w-button" data-wait="Please wait..." type="submit" value="Sign in"></input>
                  </form>

                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form</div>
                  </div>
                </div>
              </div>

              <div className="reset-log-in-links">
                <a className="reset-link-block w-inline-block" href="#">
                  <div className="reset-link">Reset Password</div>
                </a>
                <a className="reset-link-block w-inline-block" href="#">
                  <div className="reset-link">Resend Verification Email</div>
                </a>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
