import commonAPI from '../services/commonAPI'
import server from '../services/serverURL'

export const addStudent = async(addingDetails)=>{
    return await commonAPI("POST",`${server}/add`,addingDetails)
}
export const displayStudent = async()=>{
    return await commonAPI("GET",`${server}/add`,"")
}

export const deleteStudent = async(id)=>{
    try{
    return await commonAPI("DELETE",`${server}/add/${id}`,{})
    }
    catch(err){
        console.log(err)
    }
}

export const updateStudent = async(id,updateDetails)=>{
    try{
 return await commonAPI("PUT",`${server}/add/${id}`,updateDetails)
}
catch(err){
    console.log(err)
}
}