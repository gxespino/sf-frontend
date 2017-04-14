import React from 'react'

export const ProjectModal = (props) => {
  const renderHeader = (props) => {
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
              <form data-name="Email Form" id="email-form" name="email-form">

                {renderInputGroup("New Project Name", "Project Name", "Project-Name", "Main Street Project", true)}
                {renderInputGroup("Street Address", "Street Address", "Street-Address", "1234 Main Street", true)}

                <div className="double-input-group">
                  <div className="w-row">
                    <div className="input-column-left w-col w-col-6">
                      {renderInputGroup("City", "City", "City", "Springfield", true)}
                    </div>
                    <div className="input-column-right w-col w-col-6">
                      {renderInputGroup("State", "State", "State", "Virginia", true)}
                    </div>
                  </div>
                </div>

                <div className="double-input-group">
                  <div className="w-row">
                    <div className="input-column-left w-col w-col-6">
                      {renderInputGroup("Bedrooms", "Bedrooms", "Bedrooms", "3", true)}
                    </div>
                    <div className="input-column-right w-col w-col-6">
                      {renderInputGroup("Baths", "Baths", "Baths", "2", true)}
                    </div>
                  </div>
                </div>

                <div className="double-input-group">
                  <div className="w-row">
                    <div className="input-column-left w-col w-col-6">
                      {renderInputGroup("Square Feet", "Square Feet", "Square-Feet", "1,200", true)}
                    </div>
                    <div className="input-column-right w-col w-col-6">
                      {renderInputGroup("Year", "Year", "Year", "2010", true)}
                    </div>
                  </div>
                </div>

                <button className="button sign-in-button w-button" onClick={() => props.closeModal()}>
                  Create Project
                </button>

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
