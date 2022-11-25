import axios from "axios";
import { RootUsers, User } from "../models/users.model";



 const url= axios.create({
    baseURL:'https://dummyjson.com/'
}
)

export  const getUsertList=async ()=>{
    const response =  await url.get<RootUsers>('users?limit=100');
    const UsersList:User[]=response.data.users
   
     return UsersList
    
}