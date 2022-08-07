import axios from "axios";

const url="http://localhost:4000/ques";


export const addquestion=async(addQ)=>{
    return await axios.post(`${url}/addq`,addQ);            //for adding new question in a module
}


export const getQ = async(id)=>{
    id = id || ""
    return await axios.get(`${url}/${id}`);
}

export const editquestion= async(id,editq)=>{
    return await axios.put(`${url}/${id}`,editq);
}

export const deletequestion=async(id)=>{
    return await axios.delete(`${url}/${id}`);
}