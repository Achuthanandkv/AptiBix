import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js';
import {Link} from 'react-router-dom'

class SideBar extends Component{
   
    render(){
      
        return(
                 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                    
    <div class="row flex-nowrap">
        <div class="bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    
            
                
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu" >
                    <li class="nav-item">
                        <Link to="/admin" class="nav-link align-middle px-0">
                            <i class="fs-4 fa fa-home"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 fa fa-graduation-cap"></i> <span class="ms-1 d-none d-sm-inline">Student</span> </a>
                        <ul class="collapse show nav  flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <Link to="/studentlist" class="nav-link px-0"> <span class="d-none d-sm-inline"></span> List </Link>
                            </li>
                            <li>
                                <Link to="/marks" class="nav-link px-0"> <span class="d-none d-sm-inline"></span> Mark </Link>
                            </li>
                        </ul>
                    </li>
                  
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 fa fa-bar-chart"></i> <span class="ms-1 d-none d-sm-inline">Question</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu2" data-bs-parent="#menu1">
                            <li class="w-100">
                                <Link to="/addq" class="nav-link px-0"> <span class="d-none d-sm-inline"></span>Add </Link>
                            </li>
                            <li>
                                <Link to="/editq" class="nav-link px-0"> <span class="d-none d-sm-inline"></span>Edit </Link>
                            </li>
                        </ul>
                    </li>
                
                    <li>
                        <Link to="/message" class="nav-link px-0 align-middle">
                            <i class="fs-4 fa fa-envelope"></i> <span class="ms-1 d-none d-sm-inline">Messages</span> </Link>
                    </li>
                   
                </ul>
                <hr />

                
                
    </div>
</div>
            </div>
                    </div>
                </div>
                </div>
            
        
        )
    }
    myFunction=()=>{
        if(window.confirm ("Do you want to signout?")){
          window.location.replace("http://localhost:3000")
        }
        else{
            window.location.reload("/admin")
        }
    }
}
export default SideBar