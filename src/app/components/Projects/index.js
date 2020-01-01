import React from 'react'

const Project = ({ name, description, url, after }, index) =>
  <li className='post' key={index}>
    <h3>
      <a href={url}>{name}</a>
    </h3>

    <div className='post__content'>
      <p>
        {description}
      </p>
    </div>
  </li>

export default ({ title, projects, after, githubUrl }) =>
  <div className='projects'>
    {title}

    <ul>
      {projects.map(Project)}
    </ul>

    {after && <><hr />{after}</>}
  </div>
