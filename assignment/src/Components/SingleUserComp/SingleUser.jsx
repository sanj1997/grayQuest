import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../Store/users/usersSlice";
import Loader from "../LoaderComp/Loader";
import styles from "../SingleUserComp/styles.module.scss"
const SingleUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {singleUser,loading}=useSelector((store)=>store.users)
  useEffect(() => {
    dispatch(getSingleUser(params.id));
  }, []);

  return (
       <div>
         {loading?<Loader/>:<div className={styles.card}>
            <h2>Name: {singleUser.name}</h2>
            <p>Username: {singleUser.username}</p>
            <p>Email: {singleUser.email}</p>
            <p>Phone Number: {singleUser.phone}</p>
            <p>Website: {singleUser.website}</p>
            <p>Company Name: {singleUser?.company?.name}</p>
            </div>}
       </div>
  );
};

export default SingleUser;
