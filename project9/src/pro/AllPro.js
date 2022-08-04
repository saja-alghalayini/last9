import React from 'react';
import { Component, useState, useEffect } from "react";
import axios from 'axios';


function AllPro(){
    const [APIData, setAPIData] = useState([]);
    const [id, setId] = useState('');
  
    useEffect(() => {
      setId(id);
  
      axios.get(`http://localhost/project-9/project9/php/readPro.php`)
        .then((response) => {
          setAPIData(response.data);
          // console.log(response.data,"res.data")
        })
    }, [id])
  
    console.log(APIData, "res.data")
    
    return(
        <>
        {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-3">
      <h1 className="display-1 text-white animated slideInDown">Products</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb text-uppercase mb-0">
          <li className="breadcrumb-item">
            <a className="text-white" href="/">
              Home
            </a>
          </li>
          <li
            className="breadcrumb-item text-primary active"
            aria-current="page"
          >
            Products
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}

{/* product Start */}
<div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h4 className="section-title">All Products</h4>
        <h1 className="display-4 mb-4">
        Show The Products for Auctions &amp; Join Us
        </h1>
      </div> 
      <div className="row g-4">
      {APIData.map(u =>
      
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item d-flex position-relative text-center h-100">
            <img className="bg-img" src={"img/" + u.img} alt="" />
            <div className="service-text p-5">
              <img className="mb-4" src="img/icons/icon-9.png" alt="Icon" />
              <h3 className="mb-3">{u.name}</h3>
              <p className="mb-4">
              {u.description}
              </p>
              <a className="btn" href="">
              <a href={'/single/' + u.id} className="btn p-2 mr-2">
                <i className="fa fa-plus text-primary " />Join Auction</a>
               
              </a>
            </div>
          </div>
        </div>
          
        )}
       
    </div>
    </div>
    </div>
  {/* Service End */}

        </>
    );
}
export default AllPro;