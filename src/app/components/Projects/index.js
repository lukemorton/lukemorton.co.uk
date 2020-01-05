import React from 'react'

const Project = ({ name, description, url, after }, index) =>
  <li className='post' key={index}>
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
      }
    `}</style>

    {title}

    <ul>
      {projects.map(Project)}
    </ul>

    {after && <><hr />{after}</>}
  </div>
