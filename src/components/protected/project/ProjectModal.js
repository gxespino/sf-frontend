import React from 'react'

export class ProjectModal extends React.Component {
  render() {
    if (this.props.isOpen === false)
      return null

    return (
      <div>
        <div className="modal-backdrop">
          <div className="modal w-clearfix">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
