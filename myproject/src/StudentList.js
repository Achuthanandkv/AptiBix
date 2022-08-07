import React,{useState,useEffect} from "react"
import { Link } from "react-router-dom"
import { getUsers,deleteUserData } from "./services/registerApi"
import 'bootstrap/dist/css/bootstrap.min.css'


import SideBar from "./SideBar"


    
function StudentList(){
  const [users,setUsers] = useState([])

  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers=async ()=>{
    let res=await getUsers();
    setUsers(res.data);
  }
  const editUser=async(id)=>{
   getAllUsers();
  }
  const deleteUser=async(id)=>{
   await deleteUserData(id);
   getAllUsers();
  }
  

    return(
        <div class="container-fluid">
         
            <div class="row">
               <div class="col-md-2 col-sm-12 col-xs-12">
                <SideBar />
               </div>
               <div class="col-md-1 col-sm-12 col-xs-12">&nbsp;</div>
               <div class="col-md-8 col-sm-12 col-xs-12">
                   <h3> Student List</h3>
               <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th colSpan={2} scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      
      
      {users.map((us)=>(
        <tr key={us._id}>
        <td>{us.regName}</td>
        <td>{us.regEmail}</td>
        <td><Link to={`/studentlist/edit/${us._id}`}><button>Edit</button></Link></td>
        <td><button onClick={()=>{deleteUser(us._id)}}>Delete</button></td>
      </tr>
      ))}
    </tbody>
  </table>
               </div>
               <div class="col-md-1 col-sm-12 col-xs-12">&nbsp;</div>
            </div>   
                 
        </div>
    )
 
}

export default StudentList