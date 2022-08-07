import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from "react-router-dom";
import {loguser} from "./services/registerApi";



function Login(){
  const initVal = {logName:"", logPass:""} 
  const [login,setLogin]=useState(initVal)
  const { logName, logPass} = login;
  let navigate=useNavigate();

  const handleChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }

  const handleSubmit=async ()=>{
   const res=await loguser(login)
   alert(res)
   if(res!=[])
   {
    navigate('/user')
   }
   else{
    navigate('/login')
   }  
    
    

  }
    return(
      <div class="container">
      <div class="row">
          <div class="col-md-4">
              &nbsp;
          </div>
          <div class="col-md-4"><br></br>
         
        
          <button type="button" class="btn btn-primary btn-lg">Login</button>
  
  


<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form method="POST" action="">
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

    
      <div class="form-outline mb-4">
        <input type="email" id="loginName" name="logName" onChange={(e)=>handleChange(e)} value={logName} class="form-control" />
        <label class="form-label" for="loginName">Email or username</label>
      </div>

   
      <div class="form-outline mb-4">
        <input type="password" id="loginPassword" name="logPass" onChange={(e)=>handleChange(e)} value={logPass} class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>

     
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
     
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
       
          <Link  to="/forgotpassword">Forgot password?</Link>
        </div>
      </div>

    
      <input type="button" class="btn btn-primary btn-block mb-4" onClick={()=>handleSubmit()} value="Sign in" />

     
      <div class="text-center">
        <p>Not a member? <Link to="/register">Register</Link></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fa fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

     
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

    
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

 
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

   
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

  
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>

   
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

   
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>


          </div>
          <div class="col-md-4">
              &nbsp;
          </div>
      </div>
  </div>
        
    )
}
export default Login