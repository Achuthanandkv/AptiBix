import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import './Admin.css'
import SideBar from "./SideBar";



class Admin extends Component{

    render(){
        return(
            
        <div class="container-fluid">

              <div class="row">
                <div class="col-md-12" id="ah1" align="right">
                <br></br> 
                        <span id="htag">Hello @User &nbsp;&nbsp;</span>
                        <button class="btn btn-warning" onClick={this.myFunction}>Log Out</button>
                        <h3><span id="date"></span></h3>
                        
                </div>
                </div> 
            
               <div class="row">
                    <div class="col-md-2">
                       <SideBar />
                    </div>

            <div class="col-md-10">
            <div class="col py-3">
            <h3>Student Details</h3>
            <div class="row">
                <div class="col-md-3 col-xs-12 col-sm-12">
                     <div class="card">
                       <h5 class="card-header">Student</h5>
                        <div class="card-body">
                           <h5 class="card-title">View </h5>
                           <p class="card-text">Mark</p>
                           <p class="card-text text-success">view marks of students</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                     <div class="card">
                       <h5 class="card-header">Module</h5>
                        <div class="card-body">
                           <h5 class="card-title">Edit</h5>
                           <p class="card-text">Questions</p>
                           <p class="card-text text-success">select questions to edit</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                     <div class="card">
                       <h5 class="card-header">Module</h5>
                        <div class="card-body">
                           <h5 class="card-title">Add</h5>
                           <p class="card-text">Question Paper</p>
                           <p class="card-text text-success">To add new module</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                     <div class="card">
                       <h5 class="card-header">Edit</h5>
                        <div class="card-body">
                           <h5 class="card-title">Answer</h5>
                           <p class="card-text">Select Module</p>
                           <p class="card-text text-success">Answer updation can be done here</p>
                        </div>
                    </div>
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

export default Admin