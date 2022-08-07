import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Exam.css';

class Exam extends Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-sm-12"></div>
                    <div class="col-md-8 col-sm-12">
                    <br></br>
                    <div class="container1">
                        
                        <div class="question ml-sm-5 pl-sm-5 pt-2">
                            <div class="mb-3 qs">
                                 
                                <label for="question" class="form-label"></label>
                                <textarea class="form-control" id="qs1" disabled>1.Which is your favorite Web language?</textarea>
                            </div>
                            <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options1">

                                 <input type="radio" id="ans1" name="radio" value="ans1" />
                                 <label for="ans1">HTML</label><br></br><br></br>  

                                 <input type="radio" id="ans2" name="radio" value="ans2" />
                                 <label for="ans2">CSS</label><br></br><br></br>  

                                 <input type="radio" id="ans3" name="radio" value="ans3" />
                                 <label for="ans3">JavaScript</label><br></br><br></br>  

                                 <input type="radio" id="ans4" name="radio" value="ans4" />
                                 <label for="ans4">React</label><br></br><br></br>  
            
       
                            </div>
                         </div>
    
       
                            <div class="ml-auto mr-sm-5" align="right">
                              <button class="btn btn-success">Next</button>
                            </div>
    
                    </div>
                    </div>
                    <div class="col-md-2 col-sm-12"><br></br></div>
                </div>
            </div>
        )
    }
}
 export default Exam;



