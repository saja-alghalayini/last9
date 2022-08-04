import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UilCoins } from '@iconscout/react-unicons';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import { UilFileInfoAlt } from '@iconscout/react-unicons';
import { UilMoneyInsert } from '@iconscout/react-unicons'
function Single1() {
    const params = useParams();



    const [inf, setInf] = useState('[]');
    const [newPrice, setNewP] = useState('');
    const [submit, setSubmit] = useState('');
    const [auc, setAuc] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [userSold, setUserSold] = useState('');
    const [newPr, setnewPr]=useState('[]');

    let user_id = sessionStorage.getItem("user_info");
    const gitData = () => {
        axios.get(`http://localhost/last9/project9/php/singlePro.php?id=` + params.id)
            .then((res) => {

                setInf(res.data);
            })
        console.log(auc);
    }


    const getauc = () => {
        axios.get(`http://localhost/last9/project9/php/numberAuc.php?pro_id=` + params.id)
            .then((res) => {

                setAuc(res.data);
            })
    }

    const gitMix = () => {
        axios.get(`http://localhost/last9/project9/php/maxPrice.php?pro_id=` + params.id)
            .then((res) => {

                setMaxPrice(res.data[0]);

            })
    }


    const date1 = new Date();
    const date11 = date1.getTime();

    const date2 = new Date(inf.end_date);
    const date22 = date2.getTime();

    let max_user = maxPrice.user_id;
    console.log(max_user, 'max');
    const Difference_In_Time = (date22 - date11);
    console.log(Difference_In_Time, 'gg');
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    var CurrentDay = new Date();
    CurrentDay = (CurrentDay.getTime());
    var a = CurrentDay - date22;
    var diff = a / (1000 * 3600 * 24);
    console.log(a, 'roa');


    var d1 = new Date();
    var d2 = new Date(inf.end_date);
    var diff = d2.getTime() - d1.getTime();

    var daydiff = diff / (1000 * 60 * 60 * 24);
    console.log(daydiff, 'Tamara ');
    // console.log((inf.start_date), 'roa2');

    var d1 = new Date();
    var d2 = new Date(inf.end_date);
    var diff = d2.getTime() - d1.getTime();

    var daydiff = diff / (1000 * 60 * 60 * 24);
    console.log(daydiff, 'roaa');

    useEffect(() => {
        // setTimer(true);
        document.getElementById('heigh').style.display = "none";
        document.getElementById('win').style.display = "none";
        if (daydiff > 0) {
            // setTimer(true);
            getauc();
            gitMix();
            if (maxPrice.user_id == user_id) {
                document.getElementById('heigh').style.display = "block";
                console.log('you heigher one');
            }
            document.getElementById('end').style.display = 'none';
            document.getElementById('bid').style.display = 'block';
            if (parseInt(inf.min_price) < parseInt(submit)) {
                document.getElementById('bid').style.display = 'block';
                let id = params.id
                axios.post('http://localhost/last9/project9/php/updatePrice.php?id=' + params.id + '&price=' + submit)
                    .then(() => {
                        console.log("success!", submit, params.id);

                    });
                axios.post('http://localhost/last9/project9/php/addAuc.php?user_id=' + user_id + '&price=' + submit + '&pro_id=' + id)
                    .then(() => {
                        console.log("yess!", submit, params.id);
                    });
                console.log(inf.min_price);
                console.log('yes');
            }
        }
        else if (daydiff <= 0) {
            if (maxPrice.user_id == user_id) {
                document.getElementById('win').style.display = "block";
            }
            document.getElementById('bid').style.display = 'none';
            document.getElementById('end').style.display = 'block';

            axios.post('http://localhost/last9/project9/php/updateSold.php?id=' + params.id + '&user_id=' + max_user)
                .then(() => {
                    console.log("sold!", submit, params.id);
                });
            // axios.post('http://localhost/project-9/project9/php/insertSoldPro.php?user_id='+user_id+'&price='+inf.min_price+'&pro_id='+params.id)
            // .then(() => {
            //     console.log("add!", submit,params.id); 
            // });
            // setTimer(false);
        }
        gitMix();
        gitData();
    }, [submit, inf.min_price, newPrice]);

    // setInterval(function() {
    //     axios.post('http://localhost/last9/project9/php/readprice.php?id='+params.id+'&user_id='+max_user)
    //     .then((res) => {
    //         console.log("111!", inf.min_price); 
    //         setnewPr(res.data)
    //     });
    //   }, 5000);


    const handelPrice = (event) => {
        event.preventDefault();
        document.getElementById('er').style.display = "none";
        setSubmit(newPrice);

        if (parseInt(inf.min_price) < parseInt(submit)) {
            document.getElementById('er').style.display = "none";
            window.location="/single";  
        }
        else {
            document.getElementById('er').style.display = "block";
        }
    }
    return (
       
<>
             {/* Page Header Start */}
             <div
                className="container-fluid page-header py-3  wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <h1 className="display-1 text-white animated slideInDown">Product</h1>
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
                                product
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div class="alert alert-success" role="alert" id='heigh' style={{ display: 'none' }}>
                        You're the highest bidder!
                    </div>
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4">
                                            <img
                                                id="main-image"
                                                src={"/img/" + inf.img}
                                                width={250}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                       
                                        <div className="mt-4 mb-3">
                                            <h2 className="text-uppercase">{inf.name}</h2>
                                            <div className="price d-flex flex-row align-items-center">
                                            <UilCoins className="text-primary"/>
                                                <span className="act-price text-dark">{inf.min_price} JD</span>
                                            </div>
                                            <p className='text-dark'><UilMoneyInsert className="text-primary"/>{auc} <code> [bids]</code></p>
                                            
                                            <p className='text-dark'><UilCalendarAlt className="text-primary"/> this auction will end in {inf.end_date} </p>
                                        </div>
                                        <p className="about text-dark"><UilFileInfoAlt className="text-primary"/>
                                            {inf.description}
                                        </p>
                                        <div class="alert alert-danger" role="alert" id='end' style={{ display: 'none' }}>
                                            This auction has ended!
                                        </div>
                                        <div className="cart mt-4 align-items-center" id='bid'>
                                            <input className="btn  mr-2 px-4" style={{border:'1px solid'}} placeholder='Bit Now' type={'number'} onChange={(e) => setNewP(e.target.value)} />
                                            {user_id ? <button type="" className="btn btn-block " style={{ backgroundColor: '#FDBE33', }} onClick={handelPrice}>Bid Now</button> : <><button type="" className="btn btn-block " style={{ backgroundColor: '#FDBE33', }} disabled>Bid Now</button> <span style={{ color: 'red' }}> * Login to Bid</span></>}
                                            <br></br>
                                            <small style={{ color: 'red', display: 'none' }} id='er'>Your bid should be more than the price</small>
                                        </div>
                                        <div class="alert alert-success" role="alert" id='win' style={{ display: 'none' }}>
                                            Congratulations!! you won this auction
                                            Go to your profile page to complete the purchase
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Single1;