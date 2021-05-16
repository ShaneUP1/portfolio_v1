import React from 'react'
import { Projects } from '../Projects-Data'
import Project from './Project'
import styles from '../styles/ProjectList.module.css'

const ProjectList = () => {
  const projectElements = Projects.map(project => (
    <div>
      <Project project={project} />
    </div>
  ))
  console.log(projectElements);

  return (
    <div className={styles.project_list}>
      {projectElements}
    </div>
  )
}

export default ProjectList
