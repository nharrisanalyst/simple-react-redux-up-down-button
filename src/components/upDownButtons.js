import React from 'react'


const UpDownButtons = ({current, handleClickUp, handleClickDown}) =>(
  <div>
    <button className='button' onClick={()=>handleClickUp()}>+1</button>
      {current}
    <button className ='button' onClick ={()=>handleClickDown()}>-1</button>
  </div>

)


export default UpDownButtons;