import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";

class EditQ extends React.Component{
    render(){
        return(
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 col-sm-12">
                        <SideBar />
                    </div>
                    <div class="col-md-2 col-sm-12 col-xs-12">&nbsp;</div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                    <br></br>
                        <form action="">
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Please select the module to which question is to be edited</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select><br></br>
                          <input type="submit" class="btn btn-secondary" value="Submit"></input>
                          </form>
                          
                    </div>
                    
                    <div class="col-md-2 col-sm-12 col-xs-12">&nbsp;</div>
                </div>
            </div>
        )
    }
}
export default EditQ