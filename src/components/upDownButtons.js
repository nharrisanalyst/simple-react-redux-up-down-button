import React from 'react'
import styles from '../styles'


const UpDownButtons = ({current, handleClickUp, handleClickDown}) =>(
  <div style={styles.buttons}>
    <button style={styles.button} className='button' onClick={()=>handleClickUp()}>+1</button>
      {current}
    <button style={styles.button} className ='button' onClick ={()=>handleClickDown()}>-1</button>
  </div>

)


export default UpDownButtons;