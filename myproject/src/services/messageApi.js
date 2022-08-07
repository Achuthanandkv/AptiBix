import axios from "axios";
const url="http://localhost:4000/message"

export const getmsg=async(message)=>{
    return await axios.post(`${url}/contact`,message);
}