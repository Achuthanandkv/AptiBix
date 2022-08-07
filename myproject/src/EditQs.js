import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./SideBar";
import {useNavigate,useParams} from "react-router-dom";
import { getQ,editquestion } from "./services/questionApi";
const initialValues={
  add_Choice:"",
  add_Question:"",
  add_Answer_1:"",
  add_Answer_2:"",
  add_Answer_3:"",
  add_Answer_4:"",
  add_Correct_Answer:"",
}


function EditQs(){
  const [editq,setEditq]=useState(initialValues);
  const{add_Choice, add_Question, add_Answer_1, add_Answer_2, add_Answer_3, add_Answer_4, add_Correct_Answer} = editq
  let navigate=useNavigate();
  const {id}=useParams();

  const handleChange=(e)=>{
    setEditq({...editq,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    loadqs();
  },[]);

  const loadqs =async()=>{
    let res=await getQ(id);
    setEditq(res.data);
  }
  const editquest=async ()=>{
    await editquestion(id,editq)
    navigate('/edittable')
  }
    return(
      <div class="container-fluid">
          <div class="row">
              <div class="col-md-2">
                  <SideBar />
              </div>
              <div class="col-md-1 col-sm-12"></div>
              <div class="col-md-8 col-sm-12">
                  <br></br>
                  <form action="">
                         <div class="mb-3">
                          <select name="add_Choice" onChange={(e)=>handleChange(e)} value={add_Choice} class="form-select" aria-label="Default select example">
                            <option selected>Please select the module to which question is to be edited</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          </div> 

                      <div class="mb-3">
                          <label for="editquestion" class="form-label">Question</label>
                          <textarea name="add_Question" onChange={(e)=>handleChange(e)} value={add_Question} class="form-control"></textarea>
                      </div>
                       
                        <div class="mb-3">
                          <label for="editanswer1" class="form-label">Option 1</label>
                          <input type="text" name="add_Answer_1" onChange={(e)=>handleChange(e)} value={add_Answer_1} class="form-control" id="editanswer1" aria-describedby="editanswerone"/>
                        </div>
                        <div class="mb-3">
                          <label for="editanswer2" class="form-label">Option 2</label>
                          <input type="text" name="add_Answer_2" onChange={(e)=>handleChange(e)} value={add_Answer_2} class="form-control" id="editanswer2" aria-describedby="editanswertwo"/>
                        </div>
                        <div class="mb-3">
                          <label for="editanswer3" class="form-label">Option 3</label>
                          <input type="text" name="add_Answer_3" onChange={(e)=>handleChange(e)} value={add_Answer_3} class="form-control" id="editanswer3" aria-describedby="editanswerthree"/>
                        </div>
                        <div class="mb-3">
                          <label for="editanswer4" class="form-label">Option 4</label>
                          <input type="text" name="add_Answer_4" onChange={(e)=>handleChange(e)} value={add_Answer_4} class="form-control" id="editanswer4" aria-describedby="editanswerfour"/>
                        </div>
                        <div class="mb-3">
                          <label for="editanswer5" class="form-label">Correct answer</label>
                          <input type="text" name="add_Correct_Answer" onChange={(e)=>handleChange(e)} value={add_Correct_Answer} class="form-control" id="editanswer5" aria-describedby="editcorrectanswer"/>
                        </div>
                        

                       <input type="button" onClick={()=>editquest()} class="btn btn-outline-dark" value="Update" />
                        </form> 

              </div>
              <div class="col-md-1 col-sm-12"></div>
          </div>
      </div>

    )  
}
   
    

export default EditQs