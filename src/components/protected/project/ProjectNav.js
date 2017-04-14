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

          <ProjectModal
            isOpen={this.state.isModalOpen}
            closeModal={() => this.closeModal()}
          />

        </div>
      </div>
    )
  }
}
