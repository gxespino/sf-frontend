import React from 'react'

// Components
import { ProjectModal }  from './ProjectModal'

export class ProjectNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="action-bar w-clearfix">
        <div className="action-bar-left"></div>
        <div className="action-bar-right">
          <button className="button small w-button" onClick={() => this.openModal()}>
            new project
          </button>

          <ProjectModal isOpen={this.state.isModalOpen}>
            <div className="modal-header">
              <div className="close-button">
                <div className="text-block" onClick={() => this.closeModal()}>X</div>
              </div>
              <div className="div-block modal-title">
                <h2 className="heading">Create a Project</h2>
              </div>
            </div>
            <div className="custom-form">
              <div className="w-form">
                <form data-name="Email Form" id="email-form" name="email-form">
                  <div className="input-group">
                    <label className="caps-label">new project name</label>
                    <input className="form-input w-input" data-name="Project Name" id="Project-Name" name="Project-Name" placeholder="Suburban Bungalow" required="required" type="text" />
                  </div>
                  <div className="input-group">
                    <label className="caps-label">street address</label>
                    <input className="form-input w-input" data-name="Street Address" id="Street-Address" name="Street-Address" placeholder="1234 Main Street" required="required" type="text" />
                  </div>
                  <div className="double-input-group">
                    <div className="w-row">
                      <div className="input-column-left w-col w-col-6">
                        <div className="input-group">
                          <label className="caps-label">city</label>
                          <input className="form-input w-input" data-name="City" id="City" name="City" placeholder="Springfield" required="required" type="text" />
                        </div>
                      </div>
                      <div className="input-column-right w-col w-col-6">
                        <div className="input-group">
                          <label className="caps-label">State</label>
                          <input className="form-input w-input" data-name="State" id="State" name="State" placeholder="Virginia" required="required" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="double-input-group">
                    <div className="w-row">
                      <div className="input-column-left w-col w-col-6">
                        <div className="input-group">
                          <label className="caps-label">Bedrooms</label>
                          <input className="form-input w-input" data-name="Bedrooms" id="Bedrooms" name="Bedrooms" placeholder="3" required="required" type="text" />
                        </div>
                      </div>
                      <div className="input-column-right w-col w-col-6">
                        <div className="input-group">
                          <label className="caps-label">Baths</label>
                          <input className="form-input w-input" data-name="Baths" id="Baths" name="Baths" placeholder="2" required="required" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="double-input-group">
                    <div className="w-row">
                      <div className="input-column-left w-col w-col-6">
                        <div className="input-group">
                          <label className="caps-label">Square Feet</label>
                          <input className="form-input w-input" data-name="Square Feet" id="Square-Feet" name="Square-Feet" placeholder="1,200" required="required" type="text" />
                        </div>
                      </div>
                      <div className="input-column-right w-col w-col-6">
                        <div className="input-group">
                          <label className="caps-label">Year</label>
                          <input className="form-input w-input" data-name="Year Built" id="Year-Built" name="Year-Built" placeholder="2010" required="required" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="button sign-in-button w-button" onClick={() => this.closeModal()}>Create Project</button>
                </form>
              </div>
            </div>
          </ProjectModal>

        </div>
      </div>
    )
  }
}
