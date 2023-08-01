import React from 'react'
import { Link } from 'react-router-dom'
import Baner from './Baner'

function InProgress({project}) {
  return (
    <div className='progress'>
      <h1>In Progress projects</h1>
      <div className="progLinks">
        {
            project.map((item)=>{
                return <Link to={item.url} key={item.name} className='githubLink'>{item.name}</Link>
            })

        }
      </div>
      <h2>Play the Prototype</h2>
      <Baner/>
    </div>
  )
}

export default InProgress
