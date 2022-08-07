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
          src="https://images.pexels.com/photos/827519/pexels-photo-827519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide" height={600}
        />

        <Carousel.Caption style={{background:'rgba(0, 0, 0, .5)'}}>
          <h1 className='text-white'>Welcome to Epic Antiques</h1>
          <h4 className='text-primary'>We offer here unique antique pieces that are rare</h4>
          <a href="/add-product" class="btn btn-primary py-3 px-5 mr-5 animated slideInLeft">START SELLING</a>
    
  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/1812810.jpg"
          alt="Third slide" height={600}
        />

        <Carousel.Caption style={{background:'rgba(0, 0, 0, .5)'}}>
          <h1 className='text-white'>Welcome to Epic Antiques</h1>
          <h4 className='text-primary'>
          We offer here unique antique pieces that are rare
          </h4>
          <a href="/add-product" class="btn btn-primary py-3 px-5 mr-5 animated slideInLeft">START SELLING</a>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/5432421.jpg"
          alt="First slide" height={600}
        />
        <Carousel.Caption style={{background:'rgba(0, 0, 0, .5)'}}>
          <h1 className='text-white'>Welcome to Epic Antiques </h1>
          <h4 className='text-primary'>We offer here unique antique pieces that are rare</h4>
      <a href="/add-product" class="btn btn-primary py-3 px-5 mr-5 animated slideInLeft">START SELLING</a>
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

{/* ==================================================================================== */}
<>
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="about-img">
            <img className="img-fluid" src="img/home1.jpg" alt="" />
            <img className="img-fluid" src="img/home2.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <h4 className="section-title">About Us</h4>
          <h1 className="display-5 mb-4">
          Epic online auction platform Epic online auction platform 
          </h1>
          <p>
          We offer here unique antique pieces that are rare and closely related to riches and traditions
Every piece here has a story and history, and our experts will introduce it to you
          </p>
          <p className="mb-4">
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet
            est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
            clita sit at, sed sit sanctus dolor eos.
          </p>
          <div className="d-flex align-items-center mb-5">
            <div
              className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary"
              style={{ width: 120, height: 120 }}
            >
              <h3 className="display-1 mb-n2" data-toggle="counter-up">
              Epic
              </h3>
            </div>
            <div className="ps-4">
              <h3>Security </h3>
              <h3>Quick</h3>
              <h3 className="mb-0">Quality </h3>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5" href="/about">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
</>

<>
  {/* Facts Start */}
  <div className="container-xxl py-5">
    <div className="container pt-5">
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="fact-item text-center bg-light h-100 p-5 pt-0">
            <div className="fact-icon">
              <img src="img/icons/icon-3.png" alt="Icon" />
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
              <img src="img/icons/icon-2.png" alt="Icon" />
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
        <h4 className="section-title">All Products</h4>
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