import React from 'react';
import { Link } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { logout } from "../action/index";

function Nav() {
  const dispatch = useDispatch();
    let user_id = sessionStorage.getItem("user_info");
  return (
   

<>
<nav
  className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn"
  data-wow-delay="0.1s"
>
  <a href="/" className="navbar-brand ms-4 ms-lg-0">
    <h1 className="text-primary m-0">
      <img className="" src="https://cdn.discordapp.com/attachments/965674870987980901/1004437471855136809/Untitled-221.png" style={{width:'80px'}} alt="Icon" />
    Epic Antiques    </h1>
  </a>
  <button
    type="button"
    className="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>


  <div className="collapse navbar-collapse"  id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
      <a href="/" className="nav-item nav-link ">
        Home
      </a>
      <a href="/all-products" className="nav-item nav-link ">
        Products
      </a>
      <a href="/about" className="nav-item nav-link">
        About
      </a>
      
     
      <a href="/contact" className="nav-item nav-link">
        Contact
      </a>
    </div>
    {/* <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block">
      Appointment
    </a> */}
  </div>
  <div className="collapse navbar-collapse"  id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
    {!user_id &&
    <a href="/register" className="nav-item nav-link ">
        Register
      </a>}
      {!user_id &&
      <a href="/login" className="nav-item nav-link ">
        Login
      </a>}
      {user_id &&
      <a href="/user-info" className="nav-item nav-link ">
        My Account
      </a>}
      {user_id &&
      <a href="/" className="nav-item nav-link "  onClick={() => dispatch(logout())}>
        Logout
      </a>}
      
    </div><a href="/add-product" className="btn btn-primary nav-item py-3 px-5 d-none d-lg-block">
    START SELLING
    </a>
    
  </div>
</nav>
</>



  )
}

export default Nav;