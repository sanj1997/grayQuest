import React from 'react'
import styles from "../Headings/styles.module.scss"
const Heading = ({text}) => {
  return (
    <h2 className={styles.heading}>{text}</h2>
  )
}

export default Heading