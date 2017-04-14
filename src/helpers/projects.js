import { base } from '../config/constants'

export function saveProject(user, project) {
  return base.post(`projects/${user.uid}`, {
    data: {
      streetAddress: project.streetAddress,
      city:          project.state,
      state:         project.state,
      bedrooms:      project.bedrooms,
      baths:         project.baths,
      squareFeet:    project.squareFeet,
      yearBuilt:     project.yearBuilt,
    },
    then(error) {
      if(!error) {
        return project
      }
    }
  })
}
