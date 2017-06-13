import React from 'react'
import styles from '../styles'


const TotalClicks =({totalClicks})=>(
  <div className='totalClicks' style={styles.totalStyle}>
   The Number Of Times in total these buttons have been Clicked : {totalClicks} 
  </div>



)

export default TotalClicks;