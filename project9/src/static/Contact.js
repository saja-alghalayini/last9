

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



    const Contact = () => {
        const form = useRef();
        const[isSubmit,setSubmit]=useState([]);
        const [display, setdisplay] = useState('none');
      
      
      
        const sendEmail = (e) => {
          e.preventDefault();
      
      
          setdisplay('block')
          emailjs.sendForm('service_i7axj16','template_8q2vw6w',form.current,'jWSdz_DM5bIoL2AVI')
            .then((result) => {
      
      
              document.getElementById("alert").style.display = "block";
              console.log(result.text);
              console.log("message sent");
      
              e.target.reset();
            }, (error) => {
              console.log(error.text);
            });
        };




  return (
    <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-3 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <h1 className="display-1 text-white animated slideInDown">Contact Us</h1>
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
            Contact Us
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}



  <>
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h4 className="section-title">Contact Us</h4>
        <h1 className="display-5 mb-4">
          If You Have Any Query, Please Feel Free Contact Us
        </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark"
                style={{ width: 55, height: 55 }}
              >
                <i className="fa fa-map-marker-alt text-primary" />
              </div>
              <div className="ms-4">
                <p className="mb-2">Address</p>
                <h3 className="mb-0">5th area, Aqaba, Jordan
</h3>
              </div>
            </div>
            <div className="bg-light d-flex align-items-center w-100 p-4 mb-4">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark"
                style={{ width: 55, height: 55 }}
              >
                <i className="fa fa-phone-alt text-primary" />
              </div>
              <div className="ms-4">
                <p className="mb-2">Call Us Now</p>
                <h3 className="mb-0">+962 777 777 777
</h3>
              </div>
            </div>
            <div className="bg-light d-flex align-items-center w-100 p-4">
              <div
                className="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark"
                style={{ width: 55, height: 55 }}
              >
                <i className="fa fa-envelope-open text-primary" />
              </div>
              <div className="ms-4">
                <p className="mb-2">Mail Us Now</p>
                <h3 className="mb-0">Epic_Antique@gmail.com
</h3>
              </div> 
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">


        <alert className="alert alert-success" severity="success" style={{ display: display }}>
                        <alertTitle>Success</alertTitle>
                        Your Message was sent. Thank you for contacting us, we'll reply as soon as possible
                      </alert>


                      {/* <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p style={{ fontSize:'22px'}}>The User info has been updated successfully</p> */}
        {/* </div> */}

          <form name="sentMessage" noValidate="novalidate"  ref={form} onSubmit={sendEmail}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                  name='name'
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input name='email'
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input 
                  name='subject'
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    name='message'
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>




</>

  )
}

export default Contact;