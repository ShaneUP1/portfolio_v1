import React from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-tilt';
import styles from '../styles/Project.module.css';

const Project = ({description, link, image, name}) => {
    return (
      <div className={styles.projectCard}>
        <p className={styles.description}>
          {description}
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
          <a href={link}>
            <img src={`assets/${image}`} alt={name}/>
          </a>
        </Tilt>
      </div>
    ) 
}

Project.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}


export default Project;
