import React from 'react'

// Components
import { TopNav }    from '../shared/TopNav'
import { Header }    from '../landing/Header'
import { BottomNav } from '../landing/BottomNav'

// Project Components
import { ProjectList } from './project/ProjectList'
import { ProjectNav }  from './project/ProjectNav'

export class Dashboard extends React.Component {
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
