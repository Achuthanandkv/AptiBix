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
import './Header.css'



function Header(){
    return(
        <BrowserRouter>




<ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
<div >
    <a class="navbar-brand" href="#">
     
    </a>
  </div>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link "
      id="home-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#home0"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
      to="/"
    >
      Home
    </Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link"
      id="profile-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#profile0"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
      to="/profile"
    >
      Profile
    </Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link"
      id="contact-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#contact0"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
      to="/contact"
    >
      Contact
    </Link>
  </li>

</ul>
<div class="ml-auto justify-content-end">  
  <li class="nav-item hh" role="presentation">
    <Link
      class="btn btn-warning"
      id="contact-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#contact0"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
      to="/login"
    >
      Login/Register
    </Link>
  </li>
  </div>





         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
        
        
        </BrowserRouter>
    )
}
export default Header









/*  
<ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link "
      id="home-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#home0"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
      to="/"
    >
      Home
    </Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link"
      id="profile-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#profile0"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
      to="/profile"
    >
      Profile
    </Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link"
      id="contact-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#contact0"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
      to="/contact"
    >
      Contact
    </Link>
  </li>
</ul>
<div class="tab-content" id="myTabContent0">
  <div
    class="tab-pane fade show active"
    id="home0"
    role="tabpanel"
    aria-labelledby="home-tab0"
  >
    Tab 1 content.
  </div>
  <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
    Tab 3 content
  </div>
</div>







<ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link active"
      id="home-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#home0"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
      to="/"
    >
      Home
    </Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link"
      id="profile-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#profile0"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
      to="/profile"
    >
      Profile
    </Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link
      class="nav-link"
      id="contact-tab0"
      data-mdb-toggle="tab"
      data-mdb-target="#contact0"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
      to="/contact"
    >
      Contact
    </Link>
  </li>
</ul>
<div class="tab-content" id="myTabContent0">
  <div
    class="tab-pane fade show active"
    id="home0"
    role="tabpanel"
    aria-labelledby="home-tab0"
  >
    Tab 1 content.
  </div>
  <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
    Tab 3 content
  </div>
</div>


https://mdbootstrap.com/docs/standard/layout/css-grid/ current header        
            <ul class="nav nav-tabs mb-3 justify-content-end" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <Link class="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" to="/" aria-controls="pills-home" aria-selected="true">Home</Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link class="nav-link active " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" to="/profile" aria-controls="pills-profile" aria-selected="false">Profile</Link>
  </li>
  <li class="nav-item" role="presentation">
    <Link class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" to="/contact" aria-controls="pills-contact" aria-selected="false">Contact</Link>
  </li>
</ul> */