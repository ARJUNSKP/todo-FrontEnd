import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonrequest";

export const registerUser=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/express/user/registration`,body)
}

export const userLogin=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/express/user/login`,body)
}
export const addTask=async(uid,body)=>{
   return await commonRequest("POST",`${BASE_URL}/express/user/added/`+uid,body)
}
export const getAlltask=async(uid)=>{
   return await commonRequest("GET",`${BASE_URL}/express/user/task/`+uid)
}
export const deleteTaskData=async(uid,body)=>{
    console.log({uid,body})
    return await commonRequest("POST",`${BASE_URL}/express/user/task/delete/`+uid,body)
}