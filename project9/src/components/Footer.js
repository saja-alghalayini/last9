import React from 'react';


function Footer() {
  return (
    <>
    <div
  className="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn"
  data-wow-delay="0.5s"
>
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-lg-3 col-md-6">
<img src="https://cdn.discordapp.com/attachments/1002099207177523221/1004446034447056906/Untitled-221.png" alt="" style={{width:'100px'}} />
        
      </div>
      <div className="col-lg-3 col-md-6">
        <h3 className="text-light mb-4">Address</h3>
        <p className="mb-2">
          <i className="fa fa-map-marker-alt text-primary me-3" />
          5th area, Aqaba, Jordan
        </p>
        <p className="mb-2">
          <i className="fa fa-phone-alt text-primary me-3" />
          +962 777 777 777
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope text-primary me-3" />
          Epic_Antique@gmail.com


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
        <h3 className="text-light mb-4">Quick Links</h3>
        <a className="btn btn-link" href="/">
          Home
        </a>
        <a className="btn btn-link" href="/allproduct">
        All product
        </a>
        <a className="btn btn-link" href="/">
         Add Auction
        </a>
        <a className="btn btn-link" href="about">
          About Us
        </a>
        <a className="btn btn-link" href="/contact">
          Contact US
        </a>
      </div>
      <div className="col-lg-3 col-md-6">
        <h3 className="text-light mb-4">Popular Links</h3>
        <a className="btn btn-link" href="https://www.ebay.com/"target={'_blank'}>
        eBay
        </a>
        <a className="btn btn-link" href="https://www.sothebys.com/en/?locale=en"target={'_blank'}>
        Sotheby's
        </a>
        <a className="btn btn-link" href="https://www.bidspotter.com/en-us"target={'_blank'}>
        BidSpotter
        </a>
        <a className="btn btn-link" href="https://gsaauctions.gov/gsaauctions/gsaauctions/"target={'_blank'}>
        GSA Auctions
        </a>
        <a className="btn btn-link"  href="https://www.copart.com" target={'_blank'}>
        Copart
        </a>
      </div>
     
      
    </div>
  </div>
  <div className="container-fluid copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a href="#"> Epic Antique</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
          Designed By :Epic Antique team
          <br /> Distributed By: Epic Antique{" "}

        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Footer