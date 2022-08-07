import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./SideBar"
import AddQ from "./AddQ"

function StudentMarks(){
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                 <SideBar/>
                </div>
                <div class="col-md-1 col-sm-12 col-xs-12">&nbsp;</div>
                <div class="col-md-8 col-sm-12">
                    <h3>Student Marks</h3>
                <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Module</th>
        <th scope="col">Mark</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>std1223@12</td>
        <td>Otto Mott</td>
        <td>1</td>
        <td>9</td>
        <td>
          <button type="button" class="btn btn-warning">Edit</button>&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-success">Delete</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>std1@#1234</td>
        <td>Jacob Thornton</td>
        <td>2</td>
        <td>8</td>
        <td>
          <button type="button" class="btn btn-warning">Edit</button>&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-success">Delete</button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>std5674%^12</td>
        <td>Larry the Bird</td>
        <td>3</td>
        <td>7</td>
        <td>
          <button type="button" class="btn btn-warning">Edit</button>&nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-success">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
                </div>
                <div class="col-md-1 col-sm-12 col-xs-12">&nbsp;</div>
            </div>
        </div>
    )
}
export default StudentMarks