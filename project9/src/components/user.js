import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import Navbar from "./Nav";
import Footer from "./Footer";


function Userinfo(props) {

  let user_id = sessionStorage.getItem("user_info");
  const [user, setUsers] = useState([]);
  const [probuy, setprobuys] = useState([]);
  const [proown, setproowns] = useState([]);


  // http://localhost/last9/api/API/userProOwn.php?id=5
  useEffect(() => {
    // $id='1';
    axios.get(`http://localhost/last9/api/API/singleUser.php?id=` + user_id)//.$id
      //1&firstName=duaa&lastName=dua&email=dua@mail.com&phone=0771020304&password=asdf1234
      .then((res) => {
        //  console.log(res)

        setUsers(res.data);
      });
    axios.get(`http://localhost/last9/api/API/userProBuy.php?id=` + user_id)//.$id
      //1&firstName=duaa&lastName=dua&email=dua@mail.com&phone=0771020304&password=asdf1234
      .then((res) => {
        //  console.log(res)

        setprobuys(res.data);
      });


    axios.get(`http://localhost/last9/api/API/userProOwn.php?id=` + user_id)//.$id
      //1&firstName=duaa&lastName=dua&email=dua@mail.com&phone=0771020304&password=asdf1234
      .then((res) => {
        //  console.log(res)

        setproowns(res.data);
        // console.log(res.data);
      });

  }, [user_id])


  console.log(proown);





  const [name, SetName] = useState(user.name);
  console.log(user, 'ss');
  const [email, SetEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, SetAddress] = useState();
  const [isSubmit, setSubmit] = useState(false);

  const show = () => {
    document.getElementById('use').style.display = 'block';
    document.getElementById('uu').style.display = 'none';
  }

  const Update = () => {
    // http://localhost/redux-project9/API/updateUser.php?id=1&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${password}&password=${phone}
    axios.get(`http://localhost/last9/api/API/updateUser_-_Copy.php?id=${user_id}&name=${name}&email=${email}&phone=${phone}&address=${address}`)
      .then((data) => {
        console.log("success!");
        setSubmit(!isSubmit)
      });
  }

  console.log(probuy, 'nooo');
  return (
    <>
   {/* Page Header Start */}
   <div
                className="container-fluid page-header py-3  wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">profile</h1>
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
                                profile
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}




      <div className="container-fluid">

        <div className="container">
          <div className="main-body">

            {/* /Breadcrumb */}
            <div className="row gutters-sm mt-5">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="Admin"
                        className="rounded-circle"
                        width={150}
                      />
                      <div className="mt-3">
                        <h4>{user.username}</h4>


                        <button className="btn btn-outline-primary" onClick={show}>Update</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-3">
                  <ul className="list-group list-group-flush" id='uu'>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h5 className="mb-0">


                        Name
                      </h5>
                      <span className="text-dark">{user.username}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h5 className="mb-0">

                        Email
                      </h5>
                      <span className="text-dark">{user.email}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h5 className="mb-0">

                        Phone
                      </h5>
                      <span className="text-dark">{user.phone}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h5 className="mb-0">

                        Adders
                      </h5>
                      <span className="text-dark">{user.address}</span>
                    </li>

                  </ul>
                  <form id="use" style={{ display: 'none' }}>

                    <div className="card mt-3">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">Name</h6>
                          <input
                            type="text"
                            name="name"
                            // defaultValue={user.username}
                            onChange={(e) => SetName(e.target.value)}
                            required
                          />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">Email</h6>
                          <input
                            type="text"
                            name="email"
                            // defaultValue={user.email}
                            onChange={(e) => SetEmail(e.target.value)}
                            required
                          />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">Phone</h6>
                          <input
                            type="text"
                            name="phone"
                            // defaultValue={user.phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="mb-0">Address</h6>
                          <input
                            type="text"
                            name="phone"
                            // defaultValue={user.address}
                            onChange={(e) => SetAddress(e.target.value)}
                            required
                          />
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                          <div className="row">
                            <div className="col-sm-12">
                              <button
                                className="btn "
                                type="submit"
                                style={{ backgroundColor: "#DFB163", color: "white" }}
                                onClick={Update}
                              >
                                {" "}
                                edit
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </form>

                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <h2>Products you Bought</h2>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col" className="text-dark">#</th>
                          <th scope="col" className="text-dark">Name</th>
                          <th scope="col" className="text-dark">Image</th>
                          <th scope="col" className="text-dark">Price</th>
                          <th scope="col" className="text-dark">description</th>
                          <th scope="col" className="text-dark">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {probuy == '' ? <h2>No products to show </h2> : probuy.map(u =>
                          <tr>
                            <th scope="row">#</th>
                            <td>{u.name}</td>
                            <td><img src={"img/" + u.img} className="card-img-top" style={{ height: '50px' }} alt="..." /></td>
                            <td>{u.min_price}</td>
                            <td>{u.description}</td>
                            <td>{u.end_date}</td>
                          </tr>
                        )

                        }
                        {/* { probuy && probuy.map(u =>
    <tr>
      <th scope="row">#</th>
      <td>{u.name}</td>
      <td><img src={"img/" + u.img} className="card-img-top" style={{height:'50px'}} alt="..." /></td>
      <td>{u.min_price}</td>
      <td>{u.description}</td>
      <td>{u.end_date}</td>
    </tr>
  )} */}


                      </tbody>
                    </table>






                  </div>
                </div>
              </div>




              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h2>Products you Own</h2>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col" className="text-dark">#</th>
                          <th scope="col" className="text-dark">Name</th>
                          <th scope="col" className="text-dark">Image</th>
                          <th scope="col" className="text-dark">Price</th>
                          <th scope="col" className="text-dark">description</th>
                          <th scope="col" className="text-dark">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {proown == '' ? <h2>No products to show </h2> : proown.map(u =>
                          <tr>
                            <th scope="row">#</th>
                            <td>{u.name}</td>
                            <td><img src={"img/" + u.img} className="card-img-top" style={{ height: '50px' }} alt="..." /></td>
                            <td>{u.min_price}</td>
                            <td>{u.description}</td>
                            <td>{u.end_date}</td>
                          </tr>
                        )
                        }
                        {/* {proown && proown.map(u =>
    <tr>
      <th scope="row">#</th>
      <td>{u.name}</td>
      <td><img src={"img/" + u.img} className="card-img-top" style={{height:'50px'}} alt="..." /></td>
      <td>{u.min_price}</td>
      <td>{u.description}</td>
      <td>{u.end_date}</td>
    </tr>
  )} */}

                      </tbody>
                    </table>






                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>











      </div>
      <br/><br/>
    </>
  );
}
export default Userinfo;