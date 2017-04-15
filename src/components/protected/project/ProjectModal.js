import React from 'react'

// Functions
import { saveProject } from '../../../helpers/projects'

export const ProjectModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const project = {
     name:          e.currentTarget.name.value,
     streetAddress: e.currentTarget.streetAddress.value,
     city:          e.currentTarget.city.value,
     state:         e.currentTarget.state.value,
     bedrooms:      e.currentTarget.bedrooms.value,
     baths:         e.currentTarget.baths.value,
     squareFeet:    e.currentTarget.squareFeet.value,
     yearBuilt:     e.currentTarget.yearBuilt.value,
    }

    saveProject(props.user, project)
    props.closeModal()
  }

  const renderHeader = () => {
    return (
      <div className="modal-header">
        <div className="close-button">
          <div className="text-block" onClick={props.closeModal}>X</div>
        </div>
        <div className="div-block modal-title">
          <h2 className="heading">Create a Project</h2>
        </div>
      </div>
    )
  }

  const renderInputGroup = (labelText, dataName, name, placeholder, required) => {
    return (
      <div className="input-group">
        <label className="caps-label">{labelText}</label>
        <input className="form-input w-input" data-name={dataName} id={name} name={name} placeholder={placeholder} required={required} type="text" />
      </div>
    )
  }

  return props.isOpen === true ? (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-clearfix">

          {renderHeader(props)}

          <div className="custom-form">
            <div className="w-form">
              <form data-name="Email Form" id="email-form" name="email-form" onSubmit={handleSubmit}>

                {renderInputGroup("New Project Name", "Project Name", "name", "Main Street Project", true)}
                {renderInputGroup("Street Address", "Street Address", "streetAddress", "1234 Main Street", true)}

                <div className="double-input-group">
                  <div className="w-row">
                    <div className="input-column-left w-col w-col-6">
                      {renderInputGroup("City", "City", "city", "Springfield", true)}
                    </div>
                    <div className="input-column-right w-col w-col-6">
                      {renderInputGroup("State", "State", "state", "Virginia", true)}
                    </div>
                  </div>
                </div>

                <div className="double-input-group">
                  <div className="w-row">
                    <div className="input-column-left w-col w-col-6">
                      {renderInputGroup("Bedrooms", "Bedrooms", "bedrooms", "3", true)}
                    </div>
                    <div className="input-column-right w-col w-col-6">
                      {renderInputGroup("Baths", "Baths", "baths", "2", true)}
                    </div>
                  </div>
                </div>

                <div className="double-input-group">
                  <div className="w-row">
                    <div className="input-column-left w-col w-col-6">
                      {renderInputGroup("Square Feet", "Square Feet", "squareFeet", "1,200", true)}
                    </div>
                    <div className="input-column-right w-col w-col-6">
                      {renderInputGroup("Year Built", "Year", "yearBuilt", "2010", true)}
                    </div>
                  </div>
                </div>

                <input className="button sign-in-button w-button" type="submit" value="Create Project"></input>

              </form>
            </div>
          </div>


        </div>
    </div>
  </div>
  ) : (
    null
  )
}
