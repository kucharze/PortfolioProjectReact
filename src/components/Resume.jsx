import React from 'react'
import {Link} from 'react-router-dom'

function Resume({com}) {
  return (
    <div className='resume'>
      <Link className='btn'><img src={com} alt="" className='com'/><br />"More about me"</Link>
    </div>
  )
}

export default Resume
