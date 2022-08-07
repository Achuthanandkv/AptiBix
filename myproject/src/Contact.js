import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./Login"
import { useNavigate } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css'
import { getmsg } from "./services/messageApi"
const initVal={
conName:"",
conEmail:"",
subject:"",
message:""
}

function Contact(){
    const [msg,setMsg]=useState(initVal);
    const {conName, conEmail, subject, message} = msg;
    let navigate = useNavigate();

    const handleChange=(e)=>{
        setMsg({...msg,[e.target.name]:e.target.value})
    }

    const handleSubmit=async()=>{
    await getmsg(msg)
    navigate('/')
    }


    return(
       <div class="container">
           <div class="row">
               <div class="col-md-3 col-xs-12 col-sm-12">
                   &nbsp;
               </div>
               <div class="col-md-6 col-xs-12 col-sm-12">
               <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">


        <div class="col-md-9 mb-md-0 mb-5">
            <form  name="contact_form" action="" method="POST">

               
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="conName" onChange={(e)=>handleChange(e)} value={conName} class="form-control" />
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="conEmail" onChange={(e)=>handleChange(e)} value={conEmail} class="form-control" />
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                  

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" name="subject" onChange={(e)=>handleChange(e)} value={subject} class="form-control" />
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
               

              
                <div class="row">

                   
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" name="message" onChange={(e)=>handleChange(e)} value={message} rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
               <input type="button" onClick={()=>handleSubmit()} value="Send" />
            </div>
            <div class="status"></div>
        </div>
        

        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fa fa-map-marker fa-2x"></i>
                    <p>Kochi, Kerala India</p>
                </li>

                <li><i class="fa fa-phone mt-4 fa-2x"></i>
                    <p>+ 91 234 567 89</p>
                </li>

                <li><i class="fa fa-envelope mt-4 fa-2x"></i>
                        <p>contact@aptibix.com</p>
                </li>
            </ul>
        </div>
       

    </div>

               </div>
               <div class="col-md-3 col-xs-12 col-sm-12">
                   &nbsp;
               </div>
           </div>
       </div>

   

       
    )
}
export default Contact