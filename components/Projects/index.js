import React from 'react'

const Project = ({ name, description, url, after }) =>
  <li className="post">
    <h3>
      <a href={url}>{name}</a>
    </h3>

    <div className='content'>
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

    ---

    {after}
  </div>
