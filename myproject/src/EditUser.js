import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate,useParams } from "react-router-dom";
import { editUser,getUsers } from "./services/registerApi";
const initialValues={
  regName:"",
  regUserName:"",
  regEmail:"",
  regPassword:"",
  regRePassword:""
  }

function EditUser(){
  const [user,setUser]=useState(initialValues);
  const {regName, regUserName, regEmail, regPassword, regRePassword}=user;
  let navigate=useNavigate()
  const {id}=useParams();

  const handleChange=(e)=>{
    
      setUser({...user,[e.target.name]:e.target.value})
      console.log(user);
  }
  useEffect(()=>{
    loadusers();
},[]);

  const loadusers=async()=>{
        
    let res=await getUsers(id);
    setUser(res.data);
}

const editUserDetails=async ()=>{
    await editUser(id,user)
    
    navigate('/studentlist')
}

    return(
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12 col-sm-12">
                </div>
                <div class="col-md-4 col-xs-12 col-sm-12">
                <form method="POST"  action="">
        
                <button type="button" class="btn btn-primary btn-lg">Update</button>

      <div class="text-center mb-3">
        <p>Update User Details:</p>

      </div>

      

     
      <div class="form-outline mb-4">
        <input type="text" id="registerName" name="regName" onChange={(e)=>handleChange(e)} value={regName} class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

    
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" name="regUserName" onChange={(e)=>handleChange(e)} value={regUserName} class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

 
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" name="regEmail" onChange={(e)=>handleChange(e)} value={regEmail} class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

   
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" name="regPassword" onChange={(e)=>handleChange(e)} value={regPassword} class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

  
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" name="regRePassword" onChange={(e)=>handleChange(e)} value={regRePassword} class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

   
 

   
      <input type="button" onClick={()=>editUserDetails()}  class="btn btn-primary btn-block mb-3" value="Update" />
    </form>
                </div>
            
            
            <div class="col-md-4 col-xs-12 col-sm-12">
            </div>    
            </div>
        </div>


    )
}
export default EditUser