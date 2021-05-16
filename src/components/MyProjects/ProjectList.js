import React from 'react'
import { Projects } from '../../Projects-Data'
import Project from './Project'
import Title from '../Title.js'
import styles from '../../styles/ProjectList.module.css'

const ProjectList = () => {
  console.log(Projects)
  const projectElements = Projects.map(project => (
   <div>
      <Project {...project} />
    </div>
  ))
  
  return (
    <>
      <Title title="PROJECTS" />
      <div className={styles.project_list}>
        {projectElements}
      </div>
    </>
  )
}

export default ProjectList
