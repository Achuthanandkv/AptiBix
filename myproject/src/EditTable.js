import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from "./SideBar";
import { getQ,deletequestion } from "./services/questionApi";
import { Link } from "react-router-dom";

function EditTable(){
  const [getQs,setGetQs]=useState([])

  useEffect(()=>{
    getAllQuestion()
  },[])

  const getAllQuestion=async()=>{
    let res= await getQ();
    setGetQs(res.data);
  }

  const deleteQ=async(id)=>{
    await deletequestion(id);
    getAllQuestion();
  }



    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <SideBar />
                </div>
                <div class="col-md-1 col-sm-12"></div>
                <div class="col-md-8 col-sm-12">
                    
                <h3>Module No: </h3>
                <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Module #</th>
        <th scope="col">Question</th>
        <th colSpan={2} scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {getQs.map((gq)=>(
        
        
      <tr key={gq._id}>
       <td>{gq.add_Choice}</td>
      <td>{gq.add_Question}</td>
      <td><Link to={`/editq/${gq._id}`}><button>Edit</button></Link></td>
      <td><button onClick={()=>{deleteQ(gq._id)}}>Delete</button></td>
    </tr>

      ))}

    </tbody>
  </table>

                </div>
                <div class="col-md-1 col-sm-12"></div>
            </div>
        </div>

    )
}
export default EditTable