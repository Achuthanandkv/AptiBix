import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function ForgotPassword(){
    return(
        
        <div class="container">
          <br></br>
	<div class="row">
        <div class="col-md-4 col-xs-12 col-sm-12"></div>
            
        

    
        
            <div class="col-md-4 col-md-offset-4 card">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                            <br></br>
                          <h3><i class="fa fa-lock fa-4x"></i></h3>
                          <h2 class="text-center">Forgot Password?</h2>
                          <p>You can reset your password here.</p>
                            <div class="panel-body">
                              
                              <form class="form">
                                <fieldset>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                      
                                      <input id="emailInput" placeholder="email address" class="form-control" type="email" 
                                      oninvalid="setCustomValidity('Please enter a valid email address!')" onchange="try{setCustomValidity('')}catch(e){}" required="" />
                                    </div>
                                  </div>
                                  <br></br>
                                  <div class="form-group">
                                    <input class="btn btn-lg btn-primary btn-block" value="Send My Password" type="submit" />
                                    <br></br>
                                  </div><br></br>
                                </fieldset>
                              </form>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
   


        <div class="col-md-4 col-xs-12 col-sm-12"></div>
	</div>
  <br></br>
</div>
    )
}
export default ForgotPassword