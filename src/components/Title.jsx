import React from 'react'

function Title({wave}) {
  return (
    <div className='title'>
      <h1>Zachary Kuchar</h1>
      <img src={wave}
      //"https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" 
      alt="profile pic"
      className='profile' />
      <div className='description'>
        <p>A young software developer with a passion for programming.  
            A college-educated Software Engineer with a strong analytical mind 
            complimented with critical thinking abilities while exercising 
            good customer service etiquette.   
            A quick learner with strong communication skills and an 
            intuitive mind and the ability to work well with others 
            in a busy work environment. 
            </p>
      </div>
        
      
    </div>
  )
}

export default Title
