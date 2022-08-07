import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'jquery/dist/jquery.min.js'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Button } from 'bootstrap'
import Home from './Home'
import Profile from './Profile.js'
import Contact from './Contact'
import Login from './Login'
import Admin from './Admin'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import StudentList from "./StudentList";
import StudentMarks from "./StudentMarks";
import AddQ from './AddQ'
import EditQ from './EditQ'
import Message from './Message'
import Exam from './user/Exam'
import EditQs from './EditQs'
import User from './user/User'
import Guidelines from './user/Guidelines'
import EditTable from './EditTable'
import UserMark from './user/UserMark'
import EditUser from './EditUser'


function Header1(){
    return(
        <BrowserRouter>






<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">

    <ul class="navbar-nav">
    
    <img src="logo.png" width="70" height="40" alt="Logo" />
  
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/profile">Profile</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact Us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>


<Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/studentlist" element={<StudentList />} />
            <Route path="/marks" element={<StudentMarks />} />
            <Route path="/addq" element={<AddQ />} />
            <Route path="/editq" element={<EditQ />} />
            <Route path="/edittable" element={<EditTable />} />
            <Route path="/editq/:id" element={<EditQs />} />
            <Route path="/message" element={<Message />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/user" element={<User />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/usermark" element={<UserMark />} />
            <Route path="/studentlist/edit/:id" element={<EditUser />} />
            
</Routes>
        
        
        </BrowserRouter>
    )
}
export default Header1
