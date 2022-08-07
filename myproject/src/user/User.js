import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import './User.css'




class User extends Component{
    constructor(props){
        super(props)
        this.state={date:new Date().toLocaleString()}
    }
    render(){
   
        return(
              
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6" align="left">
                  <div id="time">
                    <p>{this.state.date}</p>
                  </div>
                    </div>
                    <div class="col-md-6" align="right">
                        <span id="htag"><b>Hello @User &nbsp;&nbsp;</b></span>
                        <button class="btn btn-outline-secondary" onClick={this.myFunction}>Log Out</button>
                    </div>
                </div>
                <br></br>
            <div class="row">
                <div class="col-md-4">
                    <div class="card p-3">
                        <div class="d-flex flex-row mb-3"><img src="B.png" width="70" />
                            <div class="d-flex flex-column ml-2"><span>Module 1</span><span class="text-black-50">Beginner</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                        </div>
                        <h6>Get more context on your users with stripe data inside our platform.</h6>
                        <div class="d-flex justify-content-between install mt-3"><span></span><Link to="/guidelines"><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></Link></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3">
                        <div class="d-flex flex-row mb-3"><img src="I.jpg" width="70" />
                            <div class="d-flex flex-column ml-2"><span>Module 2</span><span class="text-black-50">Intermediate</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                        </div>
                        <h6>Get more context on your users with stripe data inside our platform.</h6>
                        <div class="d-flex justify-content-between install mt-3"><span></span><Link to="/guidelines"><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></Link></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card p-3">
                        <div class="d-flex flex-row mb-3"><img src="E.jpg" width="70" />
                            <div class="d-flex flex-column ml-2"><span>Module 3</span><span class="text-black-50">Expert</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                        </div>
                        <h6>Use dropbox to sync your photos to our platform and share it with others.</h6>
                        <div class="d-flex justify-content-between install mt-3"><span></span><Link to="/guidelines"><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></Link></div>
                    </div>
                </div>
          
          
                
            </div>
            

            <br></br>
            <br></br>
            <div class="row">
                <div class="col-md-4 col-sm-12"></div>
                <div class="col-md-4 col-sm-12">
                
                
                    <div class="card p-3">
                        <div class="d-flex flex-row mb-3"><img src="m.png" width="70" />
                            <div class="d-flex flex-column ml-2">
                                <span>&nbsp;View</span><span class="text-black-50">&nbsp;Marks</span>
                                <span class="ratings">&nbsp;<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                            </div>
                        </div>
                        <h6>You can view your marks here.</h6>
                        <div class="d-flex justify-content-between install mt-3"><span></span><Link to="/usermark"><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></Link></div>
                    </div>
               
                
                </div>
                <div class="col-md-4 col-sm-12"></div>
            </div>
            
        </div>

        )
    }
           

    myFunction=()=>{
        if(window.confirm ("Do you want to signout?")){
          window.location.replace("http://localhost:3000")
        }
        else{
            window.location.reload("/user")
        }
    }
}
export default User
