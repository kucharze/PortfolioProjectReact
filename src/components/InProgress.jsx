import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Baner from './Baner'

function InProgress({project}) {
    const [open,setOpen] = useState(false)

  return (
    <div className='progress'>
      <h1>In Progress projects</h1>
      <div className="progLinks">
        {
            project.map((item)=>{
                return <Link to={item.url} key={item.name}>
                    <div className='inProgressProjects githubLink'>{item.name}</div>
                    </Link>
            })

        }
      </div>
      <button className='prototype' onClick={()=>{setOpen(!open)}}>Play the Prototype</button>
      {
        open && <Baner/>
      }
      
    </div>
  )
}

export default InProgress
