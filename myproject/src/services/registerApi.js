import axios from "axios";

const url="http://localhost:4000/user";
                                                                               
export const addUser = async(user)=>{    
    alert(user.regName) 
                   //for registering user
    return await axios.post(`${url}/reg`,user);
   
}

export const getUsers = async(id)=>{                           //for display of all student data
    id=id || ""
    return await axios.get(`${url}/${id}`);
}

export const editUser=async(id,user)=>{
                                      //for editing user data
return await axios.put(`${url}/${id}`,user);
}

export const deleteUserData = async(id)=>{
    return await axios.delete(`${url}/${id}`);                   //for deleting user data
}


export const loguser = async(login)=>{
    const res=await axios.post(`${url}/logchk`,login)
    return res
}



