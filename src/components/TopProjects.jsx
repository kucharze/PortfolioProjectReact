import React from 'react'
import { Link } from 'react-router-dom'

function TopProjects({projects}) {
  return (
    <div className='top'>
      <h1>Completed Projects</h1>
      <div className="projLinks">
        {
            projects.map((item)=>{
                return <Link key={item.name} to={item.url}>
                    <div className='topProjects githubLink'>{item.name}</div></Link>
                
            })
        }
      </div>
      
    </div>
  )
}

export default TopProjects
