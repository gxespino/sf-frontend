import React from 'react'

// Components
import { TopNav }    from '../shared/TopNav'
import { Header }    from '../landing/Header'
import { BottomNav } from '../landing/BottomNav'

// Project Components
import { ProjectList } from './project/ProjectList'
import { ProjectNav }  from './project/ProjectNav'

// Database
import { base } from '../../config/constants'

// Sample Projects
import sampleProjects from './sampleProjects'

export class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      projects: sampleProjects
    }
  }

  // componentWillMount() {
  //   // This runs right before the app is rendered
  //   this.ref = base.syncState(
  //     'USER NAME', {
  //       context: this,
  //       state: 'USER PROJECTS'
  //     }
  //   )
  // }

  // componentWillUnmount() {
  //   base.moveBinding(this.ref)
  // }

  render() {
    return (
      <div className="dashboard-section">
        <div className="w-container">

          <ProjectNav />
          <ProjectList projects={this.state.projects} />

        </div>
      </div>
    )
  }
}
