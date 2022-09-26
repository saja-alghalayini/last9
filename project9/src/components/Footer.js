import React from 'react';


function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-body footer px-0 wow fadeIn mt-3"
        data-wow-delay="0.5s"
      >
        <div className="container py-">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <a href="/" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="text-primary m-0 mt-3">
                  <img className="" src="https://cdn.discordapp.com/attachments/965674870987980901/1004437471855136809/Untitled-221.png" style={{ width: '70px' }} alt="Icon" />
                  Epic Antiques    </h1>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-light mb-4">Address</h3>
              <p className="mb-2" style={{ color: '#AAAAAA' }}>
                <i className="fa fa-map-marker-alt text-primary me-3" />
                5th area, Aqaba, Jordan
              </p>
              <p className="mb-2" style={{ color: '#AAAAAA' }}>
                <i className="fa fa-phone-alt text-primary me-3" />
                +962 777 777 777
              </p>
              <p className="mb-2" style={{ color: '#AAAAAA' }}>
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
              <a className="btn btn-link " href="/" >
                Home
              </a>
              <a className="btn btn-link " href="/all-products">
                Products
              </a>
              <a className="btn btn-link" href="/add-product">
                Add Product
              </a>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/contact">
                Contact US
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-light mb-4">Popular Links</h3>
              <a className="btn btn-link" href="https://www.ebay.com/" target={'_blank'}>
                eBay
              </a>
              <a className="btn btn-link" href="https://www.sothebys.com/en/?locale=en" target={'_blank'}>
                Sotheby's
              </a>
              <a className="btn btn-link" href="https://www.bidspotter.com/en-us" target={'_blank'}>
                BidSpotter
              </a>
              <a className="btn btn-link" href="https://gsaauctions.gov/gsaauctions/gsaauctions/" target={'_blank'}>
                GSA Auctions
              </a>
              <a className="btn btn-link" href="https://www.copart.com" target={'_blank'}>
                Copart
              </a>
            </div>


          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center justify-content-center  mb-md-0">
                © <a href="#"> Epic Antique</a>, All Right Reserved.
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer