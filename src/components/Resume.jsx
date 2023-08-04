import React, {useState} from 'react'
import About from './About'

function Resume({com}) {
  const [open,setOpen] = useState(false)
  return (
    <div className='resume'>
      <button className='btn' onClick={()=>{setOpen(!open)}}><img src={com} alt="" className='com'/><br />"More about me"</button>
      
        {
          open &&     (
          <div className="aboutsection">
          <About/>
          <About/>
          <About/>
          <About/>
          </div>)
        }


    </div>
  )
}

export default Resume
