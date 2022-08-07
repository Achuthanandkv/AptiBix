import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class UserMark extends Component{
    render(){
        return(
            <div class="container">
                   <div class="row">
                
                <div class="col-md-2 col-sm-12 col-xs-12">&nbsp;</div>
                <div class="col-md-8 col-sm-12">
                    <h3>Student Marks</h3>
                <table class="table table-striped">
    <thead>
      <tr>
       
        
        <th scope="col">Module</th>
        <th scope="col">Mark</th>
        <th scope="col">Status</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <td>1</td>
        <td>9</td>
        <td>Pass</td>
        
      </tr>
      <tr>
       
        <td>2</td>
        <td>4</td>
        <td>Fail</td>
        
      </tr>
      <tr>
     
        <td>3</td>
        <td>7</td>
        <td>Pass</td>
        
      </tr>
    </tbody>
  </table>
                </div>
                <div class="col-md-2 col-sm-12 col-xs-12">&nbsp;</div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-md-10 col-sm-12" align="right">
                    <button class="btn btn-warning" onClick={this.back}>Back</button>
                </div>
                <div class="col-md-2 col-sm-2"></div>
            </div>
            </div>

        )
    }
    back=()=>{
        window.location.replace("http://localhost:3000/user")
    }
}
export default UserMark