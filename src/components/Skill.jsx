import React,{useState, useEffect} from 'react'

function Skill({skill,level}) {
    const [skills,setSkills] = useState(Array.from({length: 10}))


  return (
    <div className='skill'>
      <h1 className='skillName'>{skill}</h1>
      {
        skills.map((index,i)=>{
            if(i<level){
             return <div className='bar' key={i}><h1>{i+1}</h1></div>
            }
            else{
                return <div className='barAbove' key={i}><h1>{i+1}</h1></div>
            }
           
        })
      }

    </div>
  )
}

export default Skill
