import React from 'react'
import { Link } from 'react-router-dom'

function TopProjects({projects}) {
  return (
    <div className='top'>
      <h1 className='divide'>Completed Projects</h1>
      <div className="projLinks">
        {
            projects.map((item)=>{

              if(item.site){
                console.log(item.site)
                return <div key={item.name} className='topProjects githubLink' id='Cardgames'>
                  <Link  to={item.url}>{item.name}</Link>
                  <Link  to={item.site}>Play the game</Link>
                    </div>
              }
              else{
                  return <Link key={item.name} to={item.url}>
                    <div className='topProjects githubLink'>{item.name}</div></Link>
              }
                
                
            })
        }
      </div>
      
    </div>
  )
}

export default TopProjects
