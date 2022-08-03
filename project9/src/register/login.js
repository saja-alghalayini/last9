import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from "../action/index";

function Login() {
    const dispatch = useDispatch();
    const admin = useSelector(state => state.login.admin);
    const error = useSelector(state => state.login.error);

    if (admin !== '') {
        sessionStorage.setItem("user_info", admin);
        window.location.href = "/";
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            {/* Page Header Start */}
            <div
                className="container-fluid page-header py-3  wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Login</h1>
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
                                Login
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* /////////////////////////////////////////// */}
            <section className="vh-75" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100"><br/>
                    <div className="row d-flex justify-content-center align-items-center h-50 "><br/>
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body ">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Login
                                            </p>
                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example3c">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw text-dark" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label text-dark" htmlFor="form3Example4c">
                                                            Password
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center ">

                                                    <p className="form-check-label" htmlFor="form2Example3">
                                                        <span>{error.passError}</span>
                                                    </p>
                                                </div>
                                                <div className="form-check d-flex justify-content-center ">

                                                    <p className="form-check-label text-dark" htmlFor="form2Example3">
                                                        Don't have an account ?{" "}
                                                        <a href="/register"><strong>Register</strong></a>
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <input type="submit" defaultValue="Sign up" style={{ color: '#252531', borderColor: "#252531", backgroundColor: "#b78d65", borderRadius: "5px" }} className="w-50 h-100 p-1" value={'Login'} onClick={() => dispatch(login(email, password))} />
                                                    {/* <button type="button" className="btn btn-primary btn-lg">
                                                        Register
                                                    </button> */}
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-7 col-lg-4 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;