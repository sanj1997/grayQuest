import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../../Store/users/usersSlice";
import Heading from "../../atoms/Headings/Heading";
import Loader from "../../atoms/Loader/Loader";
import Text from "../../atoms/Texts/Text";
import styles from "../SingleUser/styles.module.scss"
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
            <Heading text={`Name: ${singleUser.name}`}/>
            <Text text={`Username: ${singleUser.username}`}/>
            <Text text={`Email: ${singleUser.email}`}/>
            <Text text={`Phone Number: ${singleUser.phone}`}/>
            <Text text={`Website: ${singleUser.website}`}/>
            <Text text={`Company Name: ${singleUser?.company?.name}`}/>
            </div>}
       </div>
  );
};

export default SingleUser;
