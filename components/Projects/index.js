import React from 'react'

const Project = ({ name, desc, url }) =>
  <li>
    <h3>
      <a href={url}>{name}</a>
    </h3>

    <div className='content'>
      <p>
        {desc}
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

    <p>
      You can find even more of my open source work on my <a href={githubUrl}>GitHub profile</a>.
    </p>
  </div>
