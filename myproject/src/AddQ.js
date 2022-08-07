import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { addquestion } from "./services/questionApi";
const initialValues ={
add_Choice:"", 
add_Question:"", 
add_Answer_1:"", 
add_Answer_2:"", 
add_Answer_3:"", 
add_Answer_4:"", 
add_Correct_Answer:""
};

function AddQ(){
  const [addQ,setAddQ]=useState(initialValues);
  const {add_Choice, add_Question, add_Answer_1, add_Answer_2, add_Answer_3, add_Answer_4, add_Correct_Answer} = addQ;
  let navigate=useNavigate();

  const handleChange = (e) => {
    setAddQ({...addQ,[e.target.name]:e.target.value});

  }

  const handleSubmit = async ()=>{
      await addquestion(addQ);
      alert("Question added Successfully")
      navigate('/addq')
  }
  
    return(
          <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 col-sm-12">
                        <SideBar />
                    </div>
                    <div class="col-md-2 col-sm-12 col-xs-12">&nbsp;</div>
                    <div class="col-md-6 col-sm-12 col-xs-12">
                      <br></br>
                        <form method="POST" action="">
                          <select class="form-select" aria-label="Default select example"  name="add_Choice" onChange={(e)=>handleChange(e)} value={add_Choice}>
                            <option selected>Please select the module to which question is to be added</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <div class="mb-3">
                            <label for="questionadd" class="form-label">Question</label>
                            <textarea class="form-control" name="add_Question" onChange={(e)=>handleChange(e)} value={add_Question}></textarea>
                          </div>
                         
                          <div class="mb-3">
                            <label for="answer1" class="form-label">Option 1</label>
                            <input type="text" class="form-control" id="answer1" name="add_Answer_1" onChange={(e)=>handleChange(e)} value={add_Answer_1} aria-describedby="answerone"/>
                          </div>
                          <div class="mb-3">
                            <label for="answer2" class="form-label">Option 2</label>
                            <input type="text" class="form-control" id="answer2" name="add_Answer_2" onChange={(e)=>handleChange(e)} value={add_Answer_2}  aria-describedby="answertwo"/>
                          </div>
                          <div class="mb-3">
                            <label for="answer3" class="form-label">Option 3</label>
                            <input type="text" class="form-control" id="answer3" name="add_Answer_3" onChange={(e)=>handleChange(e)} value={add_Answer_3}  aria-describedby="answerthree"/>
                          </div>
                          <div class="mb-3">
                            <label for="answer4" class="form-label">Option 4</label>
                            <input type="text" class="form-control" id="answer4" name="add_Answer_4" onChange={(e)=>handleChange(e)} value={add_Answer_4}  aria-describedby="answerfour"/>
                          </div>
                          <div class="mb-3">
                            <label for="answer5" class="form-label">Correct answer</label>
                            <input type="text" class="form-control" id="answer5" name="add_Correct_Answer" onChange={(e)=>handleChange(e)} value={add_Correct_Answer} aria-describedby="correctanswer"/>
                          </div>
                          
 
                          <input type="button" onClick={()=>handleSubmit()}  class="btn btn-primary btn-block mb-3" value="Submit" />
                          </form>
                    </div>
                    
                    <div class="col-md-2 col-sm-12 col-xs-12">&nbsp;</div>
                </div>
              
          </div>
    )
}
export default AddQ