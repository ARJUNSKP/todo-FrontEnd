import axios from 'axios';

export const commonRequest=async(method,url,body)=>{
    let requestConfig={
        method,
        url,
        data:body
    }
    return await axios(requestConfig).then(Responce=>{
        return Responce
    }).catch(Responce=>{
        return Responce
    })
}