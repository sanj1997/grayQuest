import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialSate={
    loading:false,
    users:[],
    error:false,
    singleUser:{}
}

export const getUsers=createAsyncThunk(
    "users/getUsers",
    async(thunkapi)=>{
        try{
           const res=await axios("https://jsonplaceholder.typicode.com/users")
           return res.data
        }catch(e){
            return thunkapi.rejectWithValue(e.message);
        }
    }
)

export const getSingleUser=createAsyncThunk(
    "users/getSingleUser",
    async(id,thunkapi)=>{
       try{
         const res=await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
         console.log(res.data)
         return res.data
       }catch(e){
        return thunkapi.rejectWithValue(e.message);
       }
    }
)

const usersSlice=createSlice({
    name:"users",
    initialState:initialSate,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getUsers.pending,(state, action)=>{
            state.loading=true
        })
        .addCase(getUsers.fulfilled,(state, action)=>{
            state.loading=false;
            state.error= false;
            state.users = action.payload;
        })
        .addCase(getUsers.rejected,(state, action)=>{
            state.loading=false;
            state.error= true;
        })
        builder.addCase(getSingleUser.pending,(state, action)=>{
            state.loading=true
        })
        .addCase(getSingleUser.fulfilled,(state, action)=>{
            state.loading=false;
            state.error= false;
            state.singleUser = action.payload;
        })
        .addCase(getSingleUser.rejected,(state, action)=>{
            state.loading=false;
            state.error= true;
        })
    }
})

export default usersSlice.reducer

