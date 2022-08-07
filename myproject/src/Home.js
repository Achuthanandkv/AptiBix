import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import Header1 from './Header1'
import Footer from './Footer'




class Home extends Component{
    render(){
        return( 
            
            <div class="container">
               <div class="row">
                   <div class="col-md-12 col-xs-12 col-sm-12">
                        <img src="main1.webp" class="img-fluid" alt="main image"></img>
                    </div>
                </div>
                <br></br>
                <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12" id="box1">
                        <div class="list-group">
                            <h4>FEATURES</h4>
                            <a href="#" class="list-group-item list-group-item-action"> <img src="main4.png" class="img-fluid" alt="main image"></img></a>
                            <a href="#" class="list-group-item list-group-item-action">Industry Standard</a>
                            <a href="#" class="list-group-item list-group-item-action">Approved in 100+ Companies</a>
                            <a href="#" class="list-group-item list-group-item-action">Expert Analysis Available</a>
                        </div>
                           &nbsp;
               
               
                    </div>
                    <div class="col-md-3 col-xs-12 col-sm-12">
                        <img src="main3.png" class="img-fluid" alt="main image"></img>
                    </div>
                    <div class="col-md-5 col-xs-12 col-sm-12">
                                
                        <ol class="ol1">
                         <li class=""><a href="#">Aptitude</a></li>
                         <li class=""><a href="#">Logical Reasoning</a></li>
                         <li class=""><a href="#">Computer Skills</a></li>
                         <li class=""><a href="#">Sample Interview Questions</a></li>
                        </ol>
    
                    </div>
                
                       &nbsp;
                </div>
        &nbsp;
    </div>
      
                   
        )
    }
}
export default Home