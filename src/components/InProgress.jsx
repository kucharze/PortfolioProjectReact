import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Baner from './Baner'

function InProgress({project}) {
    const [open,setOpen] = useState(false)

  return (
    <div className='progress'>
      <h1 className='divide'>In Progress projects</h1>
      <div className="progLinks">
        {
            project.map((item)=>{
                return <Link to={item.url} key={item.name}>
                    <div className='inProgressProjects githubLink'>{item.name}</div>
                    </Link>
            })

        }
        <h2>See protoype below</h2>
      </div>
      
    </div>
  )
}

export default InProgress
