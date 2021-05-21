import React from 'react'
import { Projects } from '../../Projects-Data'
import Project from './Project'
import Title from '../Title.js'
import styles from '../../styles/ProjectList.module.css'
import { Fade } from 'react-awesome-reveal'

const ProjectList = () => {
  const projectElements = Projects.map(project => (
   <div>
      <Fade direction="up" duration={1000} triggerOnce >
        <Project {...project} />
      </Fade>
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
