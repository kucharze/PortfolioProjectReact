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
      <h2>Zachary Kuchar</h2>
      <h2>zacharyk323@live.com</h2>
    </div>
  )
}

export default Navbar
