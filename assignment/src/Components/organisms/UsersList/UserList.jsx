import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../Store/users/usersSlice'
import UserCard from '../../molecules/UserCard/UserCard'
import styles from "./styles.module.scss"
import Loader from "../../atoms/Loader/Loader"
const UserList = () => {
  const dispatch=useDispatch()
  const {users,loading}=useSelector((store)=>store.users)
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  return (
    <>
    {!loading?<div className={styles.container}>
      {users?.map((el)=>{
        return <UserCard key={el.id} data={el}/>
      })}
    </div>:<Loader/>}
    </>
  )
}

export default UserList