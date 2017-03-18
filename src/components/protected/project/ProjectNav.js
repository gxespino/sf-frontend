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
    console.log('MODAL OPEN!')
  }

  closeModal() {
    this.setState({ isModalOpen: false })
    console.log('MODAL CLOSED!')
  }

  render() {
    return (
      <div className="action-bar w-clearfix">
        <div className="action-bar-left"></div>
        <div className="action-bar-right">
          <button className="button small w-button" onClick={() => this.openModal()}>
            new project!
          </button>
          <ProjectModal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            <h1>New Project Form</h1>
            <p>YES!</p>
            <p><button onClick={() => this.closeModal()}>Close</button></p>
          </ProjectModal>
        </div>
      </div>
    )
  }
}
