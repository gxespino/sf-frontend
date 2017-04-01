import React from 'react'

// Components
import { TopNav } from './shared/TopNav'
import { Footer } from './shared/Footer'

// Functions
import { login } from '../helpers/auth'

export class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const email = e.currentTarget.email.value
    const pw = e.currentTarget.password.value

    login(email, pw)
  }

  resetLinks = () => {
    return (
      <div className="reset-log-in-links">
        <a className="reset-link-block w-inline-block" href="#">
          <div className="reset-link">Reset Password</div>
        </a>
        <a className="reset-link-block w-inline-block" href="#">
          <div className="reset-link">Resend Verification Email</div>
        </a>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="auth-section">
          <div className="w-container">
            <div className="auth-div">
              <h2>Log In</h2>
              <div className="custom-form">
                <div className="w-form">

                  <form data-name="Email Form" id="email-form" name="email-form" onSubmit={this.handleSubmit}>
                    <input className="form-input w-input" data-name="Email" id="Email" maxLength="256" name="email" placeholder="Email" required="required" type="email"></input>
                    <input className="form-input w-input" data-name="Password" id="Password" maxLength="256" name="password" placeholder="Password" required="required" type="password"></input>
                    <div className="remember-me w-checkbox">
                      <label className="w-form-label">
                        Remember me
                        <input className="w-checkbox-input" data-name="Checkbox" id="checkbox" name="checkbox" type="checkbox"></input>
                      </label>
                    </div>
                    <input className="button sign-in-button w-button" data-wait="Please wait..." type="submit" value="Sign in"></input>
                  </form>

                </div>
              </div>

              {this.resetLinks()}

            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
