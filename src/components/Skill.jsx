import React,{useState, useEffect} from 'react'

function Skill({skill,level}) {
    const [skills,setSkills] = useState(Array.from({length: level}))

    // useEffect(()=>{
    //     setSkills((prev)=>{
    //         for(let i=0; i<level; i++){
    //             prev.push(i)
    //         }
    //         return prev
    //     })
    // },[])


  return (
    <div className='skill'>
      <h1>The skill</h1>
      {
        skills.map(()=>{
            return <div className='bar'><h1>Open</h1></div>
        })
      }

    </div>
  )
}

export default Skill
