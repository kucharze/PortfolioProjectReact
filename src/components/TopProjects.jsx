import React from 'react'
import { Link } from 'react-router-dom'

function TopProjects({projects}) {
  return (
    <div className='top'>
      <h1>Top Projects</h1>
      {
        projects.map((item)=>{
            return <div>
                <Link className='githubLink' key={item.name} to={item.url}>{item.name}</Link>
            </div>
        })
      }
    </div>
  )
}

export default TopProjects
