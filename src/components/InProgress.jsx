import React from 'react'
import { Link } from 'react-router-dom'

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
      
    </div>
  )
}

export default InProgress
