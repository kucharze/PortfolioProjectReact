import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
     <Link to={'https://github.com/kucharze'} >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
         alt="" 
         className='github'/>
     </Link>
      <h3>W E L C O M E</h3>
      <h3>zacharyk323@live.com</h3>
    </div>
  )
}

export default Navbar
