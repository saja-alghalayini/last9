import React from 'react'
import {  UilLinkedinAlt,UilGithub, UilUserCircle } from '@iconscout/react-unicons'

function About() {
  return (
    <>
    

  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-3 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <h1 className="display-1 text-white animated slideInDown">About Us</h1>
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
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}

  <>
  {/* Feature Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="section-title">About Us</h4>
          <h1 className="display-5 mb-4">
            Why You Should Trust Us? 
          </h1>
          <p className="mb-4">
          An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder.
          </p>
          <div className="row g-4">
            <div className="col-12">
              <div className="d-flex align-items-start">
                <img
                  className="flex-shrink-0"
                  src="img/icons/icon-2.png"
                  alt="Icon"
                />
                <div className="ms-4">
                  <h3>Quick Bid Procedure</h3>

                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-start">
                <img
                  className="flex-shrink-0"
                  src="img/icons/icon-3.png"
                  alt="Icon"
                />
                <div className="ms-4">
                  <h3>High Security assurance</h3>

                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex align-items-start">
                <img
                  className="flex-shrink-0"
                  src="img/icons/icon-4.png"
                  alt="Icon"
                />
                <div className="ms-4">
                  <h3>High Quality Products</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="feature-img">
            <img className="img-fluid" src="https://images.pexels.com/photos/9307812/pexels-photo-9307812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className="img-fluid" src="https://images.pexels.com/photos/6077189/pexels-photo-6077189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Feature End */}
</>
<>
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h4 className="section-title">Team Members</h4>
        <h1 className="display-5 mb-4">
          We Are Creative Epic Antiques Team, who build this website
        </h1>
      </div>
      <div className="row g-0 team-items" >
        <div className="col-lg-4 col-md-3 wow fadeInUp" data-wow-delay="0.1s" style={{height:'50%'}}>
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="https://avatars.githubusercontent.com/u/100237201?v=4" alt="Hadi" style={{height:'370px', width:'328px'}}/>
              <div className="team-social text-center">
                <a className="btn btn-square" href="https://www.linkedin.com/in/hadi-alsaden-174408232/" target="_blank">
                  <UilLinkedinAlt />
                </a>
                <a className="btn btn-square" href="https://github.com/Hadi-AL-Saden" target="_blank">
                  <UilGithub />
                </a>
                <a className="btn btn-square" href="https://www.linkedin.com/in/hadi-alsaden-174408232/" target="_blank">
                  < UilUserCircle />
                </a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h3 className="mt-2">Hadi Alsaden</h3>
              <span className="text-primary">Scrum Master</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-3 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="https://avatars.githubusercontent.com/u/100213753?v=4" alt="Dua" style={{height:'370px', width:'328px'}}/>
              <div className="team-social text-center">
                <a className="btn btn-square" href="https://www.linkedin.com/in/du-a-alsafasfeh-70a9a7147/" target="_blank">
                  <UilLinkedinAlt />
                </a>
                <a className="btn btn-square" href="https://github.com/Dua-Alsafasfeh" target="_blank">
                  <UilGithub />
                </a>
                <a className="btn btn-square" href="https://www.linkedin.com/in/du-a-alsafasfeh-70a9a7147/" target="_blank">
                  < UilUserCircle />
                </a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h3 className="mt-2">Dua Alsafasfeh</h3>
              <span className="text-primary">Project Owner</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="https://avatars.githubusercontent.com/u/100213822?v=4" alt="Saja" style={{height:'370px', width:'328px'}}/>
              <div className="team-social text-center">
                <a className="btn btn-square" href="https://www.linkedin.com/in/saja-al-ghalayini/" target="_blank">
                  <UilLinkedinAlt />
                </a>
                <a className="btn btn-square" href="https://github.com/saja-alghalayini" target="_blank">
                  <UilGithub />
                </a>
                <a className="btn btn-square" href="https://www.linkedin.com/in/saja-al-ghalayini/" target="_blank">
                  < UilUserCircle />
                </a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h3 className="mt-2">Saja Al Ghalayini</h3>
              <span className="text-primary">Developer</span>
            </div>
          </div>
        </div></div>   
           <div className="row g-0 team-items justify-content-center">

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="https://avatars.githubusercontent.com/u/100063786?v=4" alt="Ro'a" style={{height:'370px', width:'328px'}}/>
              <div className="team-social text-center">
                <a className="btn btn-square" href="https://www.linkedin.com/in/roayaseen/" target="_blank">
                  <UilLinkedinAlt />
                </a>
                <a className="btn btn-square" href="https://www.linkedin.com/in/roayaseen/" target="_blank">
                  <UilGithub />
                </a>
                <a className="btn btn-square" href="https://www.linkedin.com/in/roayaseen/" target="_blank">
                  < UilUserCircle />
                </a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h3 className="mt-2">Ro'a Yaseen</h3>
              <span className="text-primary">Developer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
          <div className="team-item position-relative">
            <div className="position-relative">
              <img className="img-fluid" src="https://avatars.githubusercontent.com/u/100212077?v=4" alt="Tamara" style={{height:'370px', width:'328px'}}/>
              <div className="team-social text-center">
                <a className="btn btn-square" href="https://www.linkedin.com/in/tamara-al-shabatat-060452123/" target="_blank">
                  <UilLinkedinAlt />
                </a>
                <a className="btn btn-square" href="https://github.com/tamara126enad" target="_blank">
                  <UilGithub />
                </a>
                <a className="btn btn-square" href="https://www.linkedin.com/in/tamara-al-shabatat-060452123/" target="_blank">
                  < UilUserCircle />
                </a>
              </div>
            </div>
            <div className="bg-light text-center p-4">
              <h3 className="mt-2">Tamara Shbatat</h3>
              <span className="text-primary">Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>
</>


  )
}

export default About