import React from 'react';


function Footer() {
  return (
    <>
    <div
  className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn"
  data-wow-delay="0.1s"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
        <h3 className="text-light mb-4">Address</h3>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt text-primary me-3" />
          123 Street, New York, USA
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt text-primary me-3" />
          +012 345 67890
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope text-primary me-3" />
          info@example.com
        </p>
        <div className="d-flex pt-2">
          <a className="btn btn-square btn-outline-body me-1" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-square btn-outline-body me-1" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-square btn-outline-body me-1" href="">
            <i className="fab fa-youtube" />
          </a>
          <a className="btn btn-square btn-outline-body me-0" href="">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <h3 className="text-light mb-4">Services</h3>
        <a className="btn btn-link" href="">
          Architecture
        </a>
        <a className="btn btn-link" href="">
          3D Animation
        </a>
        <a className="btn btn-link" href="">
          House Planning
        </a>
        <a className="btn btn-link" href="">
          Interior Design
        </a>
        <a className="btn btn-link" href="">
          Construction
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h3 className="text-light mb-4">Quick Links</h3>
        <a className="btn btn-link" href="">
          About Us
        </a>
        <a className="btn btn-link" href="">
          Contact Us
        </a>
        <a className="btn btn-link" href="">
          Our Services
        </a>
        <a className="btn btn-link" href="">
          Terms &amp; Condition
        </a>
        <a className="btn btn-link" href="">
          Support
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h3 className="text-light mb-4">Newsletter</h3>
        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
        <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
          <input
            className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
            type="text"
            placeholder="Your email"
          />
          <button
            type="button"
            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a href="#">Your Site Name</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By <a href="https://htmlcodex.com">HTML Codex</a>
          <br /> Distributed By:{" "}
          <a
            className="border-bottom"
            href="https://themewagon.com"
            target="_blank"
          >
            ThemeWagon
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Footer