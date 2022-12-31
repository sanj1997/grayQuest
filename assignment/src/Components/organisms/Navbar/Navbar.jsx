import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../../atoms/Logos/Logo'
import styles from "./styles.module.scss"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Link style={{"textDecoration":"none","color":"black"}} to={"/"}><Logo/></Link>
    </div>
  )
}

export default Navbar