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
  constructor(props) {
    super(props)

    this.state = {
      user: this.props.user,
      projects: {},
    }
  }

  // componentWillMount() {
  //   const endpoint = `projects/${this.state.user.uid}`

  //   base.syncState(endpoint, {
  //     context: this,
  //     state: 'projects'
  //   });
  // }

  render() {
    return (
      <div className="dashboard-section">
        <div className="w-container">

          <ProjectNav user={this.props.user} />
          <ProjectList projects={this.state.projects} />

        </div>
      </div>
    )
  }
}
