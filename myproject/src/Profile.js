import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'



function Profile(){
    return(
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xs-12 col-sm-12">
                    <h3 style={{fontWeight:'bold',color:'blueviolet'}}>Company Profile</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 col-xs-12 col-sm-12">
                    &nbsp;
                </div>
                <div class="col-md-8 col-xs-12 col-sm-12">
                    Our company is formed in the year 2010 and our website has reached a billion views since then. Here we are
                    concentrating mainly on improving Aptitude level of candidates. We offer various levels of aptitude such as Logical,
                    decision making, numerical etc.<br></br><br></br>
                    Aptitude Test: Get free Online Quantitative Aptitude Test questions and answers for the examinations. Aptitude Tests 
                    are conducted to assess the logical thinking, decision making and problem solving skills of a person. Evaluate your 
                    Aptitude skills by trying the free Aptitude Test online at this page.
                    <br></br><br></br>

                </div>
                <div class="col-md-2 col-xs-12 col-sm-12">
                    &nbsp;
                </div>
            </div>
            <div class="row">
                <div class="col-md-2 col-xs-12 col-sm-12">
                    &nbsp;
                </div>
                <div class="col-md-8 col-sm-12 col-xs-12">
                <img src="partners.png" class="img-fluid" alt="partner logo" />
                </div>
                <div class="col-md-2 col-xs-12 col-sm-12">
                    &nbsp;
                </div>
            </div>
        </div>
    )
}
export default Profile