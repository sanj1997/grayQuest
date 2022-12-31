import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.scss"
const ActionButton = ({text}) => {
  return (
   <button className={styles.customButton}>{text}</button>
  )
}

export default ActionButton