import React from 'react'

function About({name,job,description,time}) {
  return (
    <div className='about'>
      <h1>{name}</h1>
      <div className='des'>
        <h2>{job}</h2>
        <ul>
        {
          description && description.map((item)=>{
            return <li>{item}</li>
          })
        }
        </ul>
      </div>
      <div><h3>{time}</h3></div>
    </div>
  )
}

export default About
