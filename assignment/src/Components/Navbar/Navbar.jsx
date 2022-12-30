import React from 'react'
import {Link} from "react-router-dom"
import styles from "../Navbar/styles.module.scss"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <h1>GitHub Users</h1>
        <Link style={{"textDecoration":"none","color":"black"}} to={"/"}><h2>Home</h2></Link>
    </div>
  )
}

export default Navbar