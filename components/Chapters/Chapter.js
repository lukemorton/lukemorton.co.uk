import React from 'react'
import Link from 'next/link'

export default ({ label, url }, index) =>
  <li key={index}>
    <Link href={url} id={`nav_${index}`}>{label}</Link>
  </li>
