import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Action/styles.module.scss"
const ActionButton = ({id}) => {
  return (
   <Link style={{"textDecoration":"none","color":"black"}} to={`/${id}`}><button className={styles.customButton}>More details</button></Link>
  )
}

export default ActionButton