import React from 'react'

// Components
import { ProjectRowBase }       from './ProjectRowBase'
import { ProjectRowAnalyzed }   from './ProjectRowAnalyzed'
import { ProjectRowCompleted }  from './ProjectRowCompleted'
import { ProjectRowIncomplete } from './ProjectRowIncomplete'

export class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list">
        <ProjectRowAnalyzed />
        <ProjectRowAnalyzed />
        <ProjectRowIncomplete />
        <ProjectRowCompleted />
        <ProjectRowAnalyzed />
        <ProjectRowCompleted />
        <ProjectRowIncomplete />
      </div>
    )
  }
}
