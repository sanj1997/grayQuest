import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../Store/users/usersSlice'
import UserCard from '../UserCardComp/UserCard'
import styles from "../UsersListComp/styles.module.scss"
const UserList = () => {
  const dispatch=useDispatch()
  const {users}=useSelector((store)=>store.users)
  console.log(users)
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  return (
    <div className={styles.container}>
      {users?.map((el)=>{
        return <UserCard key={el.id} data={el}/>
      })}
    </div>
  )
}

export default UserList