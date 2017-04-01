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

export class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {}
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
          <ProjectList />

        </div>
      </div>
    )
  }
}
