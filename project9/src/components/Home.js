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
          src="img/1_gallery825_van-gogh.jpg"
          alt="Second slide" height={500}
        />

        <Carousel.Caption style={{bottom: '13.25rem'}}>
          <h1>Welcome to Epic Antiques</h1>
          <p>We offer here unique antique pieces that are rare</p>
          {/* <a href="/about" className="btn btn-primary py-3 px-5 d-none d-lg-block text-center" style={{width:'30%'}}>
      Read More
    </a> */}
    
  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/Wide-53-new1.jpg"
          alt="Third slide" height={500}
        />

        <Carousel.Caption style={{bottom: '13.25rem'}}>
          <h1>Welcome to Epic Antiques</h1>
          <p>
          We offer here unique antique pieces that are rare
          </p>
          {/* <div className='ml-5'>          <a href="/about" className="btn btn-primary py-3 mr-5 d-none d-lg-block text-center w-25 " >
      Read More
    </a></div> */}

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/19.jpeg"
          alt="First slide" height={500}
        />
        <Carousel.Caption style={{bottom: '13.25rem'}}>
          <h1>Welcome to Epic Antiques </h1>
          <p>We offer here unique antique pieces that are rare</p>
          {/* <a href="/about" className="btn btn-primary py-3 px-5 d-none d-lg-block text-center">
      Read More
    </a> */}
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


 
  )
}

export default Home