import React from 'react'
import Skill from './Skill'

function WorkDesc() {
  return (
    <div className='work'>
      <div className="graph">
        <h1>Experience level</h1>
        <Skill skill={'Java'} level={4}/>
        <Skill skill={"Javascript"} level={4}/>
        <Skill skill={'C#'} level={3}/>
        <Skill skill={'python'} level={3}/>
        <Skill skill={'C++'} level={3}/>
      </div>
    </div>
  )
}

export default WorkDesc
