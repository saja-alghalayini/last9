import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import  { useState, useEffect } from "react";





function Home() {

    const [APIData, setAPIData] = useState([]);
 
    useEffect(() => {
      
      
      axios.get(`http://localhost/last9/project9/php/readProlimit.php`)
      .then((response) => {
          setAPIData(response.data);
          console.log(response.data,"res.data")
      })
  }, [])



  return (

    <>

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/827519/pexels-photo-827519.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-ext-2.discordapp.net/external/VHdJIQ8WqcS4h3aLFPJPyHloLFjnSpF4qCmaNPn7FKs/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1/https/images.pexels.com/photos/859895/pexels-photo-859895.jpeg?width=895&height=597"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-ext-1.discordapp.net/external/qmCDbadDXl-DFp1_08pEm5hOS-LfT7r7YzvufmFQke4/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1/https/images.pexels.com/photos/3014826/pexels-photo-3014826.jpeg?width=895&height=597"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* ==================================================================================== */}
<>
  {/* Facts Start */}
  <div className="container-xxl py-5">
    <div className="container pt-5">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="fact-item text-center bg-light h-100 p-5 pt-0">
            <div className="fact-icon">
              <img src="img/icons/icon-2.png" alt="Icon" />
            </div>
            <h3 className="mb-3">High Security assurance</h3>
            <p className="mb-0">
            Because we value your privacy, we have equipped a high-security system.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="fact-item text-center bg-light h-100 p-5 pt-0">
            <div className="fact-icon">
              <img src="img/icons/icon-3.png" alt="Icon" />
            </div>
            <h3 className="mb-3">Quick Bid Procedure</h3>
            <p className="mb-0">
            Here, you can easily and quickly bid on your favorite 
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="fact-item text-center bg-light h-100 p-5 pt-0">
            <div className="fact-icon">
              <img src="img/icons/icon-4.png" alt="Icon" />
            </div>
            <h3 className="mb-3">High Quality Products</h3>
            <p className="mb-0">
            We did our best to provide you with high-quality products
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Facts End */}
</>










  {/* product Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h4 className="section-title">All Product</h4>
        <h1 className="display-5 mb-4">
        Show The Latest Products for Auctions &amp; Join Us
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
              <a href={'/single/' + u.id} className="btn mr-2">
                <i className="fa fa-plus text-primary me-3" />Join Auction</a>
               
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


 
  )
}

export default Home