import React from 'react'
import Skill from './Skill'

function WorkDesc() {
  return (
    <div className='work'>
      <div className="graph">
        <h1>Experience level</h1>
        <Skill skill={'Java'} level={7}/>
        <Skill skill={"Javascript"} level={7}/>
        <Skill skill={'C#'} level={6}/>
        <Skill skill={'C++'} level={6}/>
        <Skill skill={'Python'} level={6}/>

      </div>
    </div>
  )
}

export default WorkDesc

