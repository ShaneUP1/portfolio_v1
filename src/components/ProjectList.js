import React from 'react'
import { Projects } from '../Projects-Data'
import Project from './Project'
import styles from '../styles/ProjectList.module.css'

const ProjectList = () => {
  console.log(Projects)
  const projectElements = Projects.map(project => (
   <div>
      <Project {...project} />
    </div>
  ))
  
  return (
    <div className={styles.project_list}>
      {projectElements}
    </div>
  )
}

export default ProjectList
