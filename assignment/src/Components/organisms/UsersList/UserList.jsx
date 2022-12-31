import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../Store/users/usersSlice'
import UserCard from '../../molecules/UserCard/UserCard'
import styles from "../UsersList/styles.module.scss"
import Loader from "../../atoms/Loader/Loader"
const UserList = () => {
  const dispatch=useDispatch()
  const {users,loading}=useSelector((store)=>store.users)
  console.log(users)
  useEffect(()=>{
    dispatch(getUsers())
  },[])
  return (
    <div className={styles.container}>
      {!loading?users?.map((el)=>{
        return <UserCard key={el.id} data={el}/>
      }):<Loader/>}
    </div>
  )
}

export default UserList