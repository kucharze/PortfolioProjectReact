import React, {useState} from 'react'
import About from './About'
import WorkDesc from './WorkDesc'

function Resume({com}) {
  const [open,setOpen] = useState(false)
  return (
    <div className='resume'>
      <button className='btn' onClick={()=>{setOpen(!open)}}><img src={com} alt="" className='com'/><br />"More about me"</button>
      
        {
          open &&     (<div className="dispplay">

          
          <div className="aboutsection">
          <About name={"Professional experience"}
          job={"Siemens V&V Test Engineer"}
          description={[" - Monitored and verified that adhered requirements met standards.",
        " - Executed test requirements using analysis tools on circuit boards so that the appropriate fix can be made if necessary."
        ]}
        time={"August 2020 - October 2020"}
          />
          <About name={"Current Education"} job={"Per Scholas(Software Engineering Bootcamp)"}
          description={[" -HTML, CSS, ",
        "- JavaScript, Node.js, Express.js, React.js, " , 
        '- MongoDB, SQL queries, Java'
        ]}
        time={"May 2023 - September 2023"}
        />
          <About name={"College education"} job={"Duqueuse University"}
          description={['- BS Computer Science','- GPA, 3.4; ',
          '- Phi-Eta-Sigma National Honor Society'
          ]}
          time={"September 2015 - May 2019"}
          />
          </div>
                {/* <h1>Description of types of work that I have done</h1> */}
      <WorkDesc />
          
          </div>)
        }


    </div>
  )
}

export default Resume
