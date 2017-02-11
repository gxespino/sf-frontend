import React from 'react'

export class ProjectNav extends React.Component {
  render() {
    return (
      <div className="action-bar w-clearfix">
        <div className="action-bar-left"></div>
        <div className="action-bar-right">
          <a className="button small w-button" href="#">new project</a>
        </div>
      </div>
    )
  }
}
