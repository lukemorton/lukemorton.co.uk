import React from 'react'
import Prose from '../Prose'

const Project = ({ name, description, url, after }, index) =>
  <li className='post' key={index}>
    <style jsx>{`
      .post {
        margin-bottom: 1.6em;
      }
    `}
    </style>

    <h2 className='h3'>
      <a href={url}>{name}</a>
    </h2>

    <p>
      {description}
    </p>
  </li>

export default ({ title, projects, after, githubUrl }) =>
  <div className='projects'>
    <style jsx>{`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}
    </style>

    <Prose>
      {title}
    </Prose>

    <ul>
      {projects.map(Project)}
    </ul>

    {after && <><hr />{after}</>}
  </div>
