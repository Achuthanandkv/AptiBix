import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Guidelines.css'

class Guidelines extends Component{
    render(){

   
    return(
         <div class="container">
            <div class="row">
                    <div class="col-md-12" align="right">
                        <span id="htag"><b>Hello @User &nbsp;&nbsp;</b></span>
                        <button class="btn btn-outline-secondary" onClick={this.myFunction}>Log Out</button>
                    </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-12">
                <br></br><br></br>
                <img class="img-fluid" src="aptitude.jpg" alt="Apti img"></img>
                    
                </div>
                <div class="col-md-5 col-sm-12">
                    <br></br>
                    <h3>Read Carefully</h3>
                            
                                <ul class="list-type3">
                                <li><span>10 questions in total.</span></li>
                                <li><span>You must answer all questions.</span></li>
                                <li><span>No negative marks.</span></li>
                                <li><span>50% required to pass</span>.</li>
                                <li><span>Marks can be viewed.</span></li>
                                <li><span>Time limit will be 20 minutes.</span></li>
                                </ul>
                             
                                                  
                        <button class="btn btn-success" onClick={this.startFunction}>Start</button><br></br>
                    
                </div>
                <div class="col-md-2 col-sm-12">
                  <br></br><br></br><br></br><br></br>
                  <img class="img-fluid" src="AptiBix3.png" alt="Logo"></img>
                </div>
            </div><br></br>
         </div>
    )
    }
   myFunction=()=>{
        if(window.confirm ("Do you want to signout?")){
          window.location.replace("http://localhost:3000")
        }
        else{
            window.location.reload("/guidelines")
        }
    }
    startFunction=()=>{
        window.location.replace("http://localhost:3000/exam")
    }
}
export default Guidelines