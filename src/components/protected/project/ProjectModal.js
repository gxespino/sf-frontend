import React from 'react'

export const ProjectModal = (props) => {
  return props.isOpen === true ? (
    <div>
      <div className="modal-backdrop">
        <div className="modal w-clearfix">
          {this.props.children}
        </div>
      </div>
    </div>
  ) : (
    null
  )
}
