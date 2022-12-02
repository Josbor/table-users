import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsertList } from "../api/api"
import { RootState } from "../app/store"
import { addSelectedUser } from '../features/selectedUserSlice';
import { addUsers } from "../features/usersSlice"
import { User } from "../models/users.model"


export const useStoreControl = () => {
    
    const dispatch=useDispatch()
    const userList=useSelector((state:RootState)=>state.users.value)
    const selectedUser=useSelector((state:RootState)=>state.selectedUser.value)
  
      const getListUsers = async () => {
      const listUsers=await getUsertList();
      dispatch(addUsers(listUsers))
      }
     const selectUser =(user:User)=>{
        dispatch(addSelectedUser(user))
     }
    
    return {
        userList,
        selectedUser,
        getListUsers,
        selectUser,
    }

}