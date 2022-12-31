import React from 'react'
import { Link } from 'react-router-dom'
import ActionButton from '../../atoms/Buttons/Action/ActionButton'
import Heading from '../../atoms/Headings/Heading'
import Text from '../../atoms/Texts/Text'
import styles from "../UserCard/styles.module.scss"
const UserCard = ({data}) => {
    const {name,username,email,id}=data
  return (
    <div className={styles.card}>
        <Heading text={name}/>
        <Text text={username}/>
        <Text text={email}/>
        <Link style={{"textDecoration":"none","color":"black"}} to={`/${id}`}><ActionButton text={"More Details"} id={id}/></Link>
    </div>
  )
}

export default UserCard