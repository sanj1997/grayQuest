import React from 'react'
import ActionButton from '../Buttons/Action/ActionButton'
import styles from "../UserCardComp/styles.module.scss"
const UserCard = ({data}) => {
    const {name,username,email,id}=data
  return (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
        <ActionButton id={id}/>
    </div>
  )
}

export default UserCard