import React from 'react';
import {Projects} from '../Projects-Data';
import Tilt from 'react-tilt';
import styles from '../styles/ProjectList.module.css';

function ProjectList() {
  const projectElements = Projects.map(project => {
    return (
      <>
      <div className={styles.projectDisplay}>
        <p className={styles.description}>
          {project.description}
        </p>
        <Tilt 
           options={{
           reverse: false,
           max: 10,
           perspective: 500,
           scale: 1,
           speed: 100,
           transition: true,
           axis: null,
           reset: true,
           easing: 'cubic-bezier(.03,.98,.52,.99)',
         }}>
          <a className={styles.image} href={project.link}>
            <img src={`assets/${project.image}`} alt={project.name}/>
          </a>
        </Tilt>
      </div>
      </>
    )
   
  })
  
  return (
    <>
      {projectElements}
    </>
  )
}

export default ProjectList;
