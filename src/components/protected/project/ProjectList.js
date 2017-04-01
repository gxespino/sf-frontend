import React from 'react'

// Components
import { ProjectRow }       from './ProjectRow'

export const ProjectList = (props) => {
  const list = () => {
    return (
      <div>
        {
          Object
          .keys(props.projects)
          .map(
            key =>
            <ProjectRow
              key={key}
              projectDetails={props.projects[key]}
            />
          )
        }
      </div>
    )
  }

  return (
    <div className="project-list">
      {list()}
    </div>
  )
}
