import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";

function Message(){
    return(
          <div class="container-fluid">
              <div class="row">
                <div class="col-md-2 col-sm-12">
                  <SideBar />
                </div>
                  <div class="col-md-1 col-sm-12"></div>
                  <div class="col-md-8 col-sm-12">
                      <h3>Messages</h3>
                      
                          <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Email Id</th>
        <th scope="col">Message</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>123@gmail.com</td>
         <td> <textarea class="form-control" disabled="true"></textarea></td>
         <td><button type="button" class="btn btn-outline-secondary"><i class="fa fa-reply" aria-hidden="true"></i></button>&nbsp;&nbsp;&nbsp;
         <button type="button" class="btn btn-outline-secondary"><i class="fa fa-trash" aria-hidden="true"></i></button>
         </td>
        </tr>
        <tr>
         <td>xyz@live.com</td>
         <td> <textarea class="form-control" disabled="true"></textarea></td>
         <td><button type="button" class="btn btn-outline-secondary"><i class="fa fa-reply" aria-hidden="true"></i></button>&nbsp;&nbsp;&nbsp;
         <button type="button" class="btn btn-outline-secondary"><i class="fa fa-trash" aria-hidden="true"></i></button>
         </td>
        </tr>
        <tr>
         <td>asd@twitter.com</td>
         <td> <textarea class="form-control" disabled="true"></textarea></td>
         <td><button type="button" class="btn btn-outline-secondary"><i class="fa fa-reply" aria-hidden="true"></i></button>&nbsp;&nbsp;&nbsp;
         <button type="button" class="btn btn-outline-secondary"><i class="fa fa-trash" aria-hidden="true"></i></button>
         </td>
        </tr>
    </tbody>
  </table>
                  </div>
                  <div class="col-md-1 col-sm-12"></div>
              </div>
          </div>
    )
}
export default Message