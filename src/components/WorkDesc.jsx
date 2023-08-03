import React from 'react'
import Skill from './Skill'

function WorkDesc() {
  return (
    <div className='work'>
      <h1>Work Descriptions</h1>
      <h3>Work experience descriptions</h3>
      <h4>PUT GRAPH IN HERE WITH SKILLS Map out a list (pull in from models folder?)</h4>
      <div className="graph">
        <h1>Hello</h1>
        <Skill level={4}/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </div>
  )
}

export default WorkDesc
