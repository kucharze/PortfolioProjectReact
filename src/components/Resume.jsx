import React from 'react'

function Resume({com}) {
  return (
    <div className='resume'>
      <button className='btn'><img src={com} alt="" className='com'/></button>
    </div>
  )
}

export default Resume
