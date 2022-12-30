import React from 'react'
import styles from "../LoaderComp/styles.module.scss"
const Loader = () => {
  return (
    <div className={styles.container}>
         <div className={styles.loader}></div>
    </div>
  )
}

export default Loader