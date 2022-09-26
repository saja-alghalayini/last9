import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './static/About';
import Contact from './static/Contact';
import AllPro from './pro/AllPro';
import Uploader from './components/Uploader';
import Signup from './register/reg';
import Login from './register/login';

<<<<<<< HEAD
=======
import Single from './pro/Singlepro';
// import Single from './pro/Single';

import Userinfo from './components/user';


import './App.css';

>>>>>>> 7ab2562e8e9702c631297be37de32e7a568809a4
function App() {
  return (
<> 

<Nav/>
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/all-Products' element={<AllPro/>}/>
<Route path='/add-product' element={<Uploader/>}/>  
<Route path='/register' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
<<<<<<< HEAD
{/* <Route path='/addproduct' element={<Upload/>}/> */}
=======
<Route path='/user-info' element={<Userinfo/>}/>
{/* <Route path='/addproduct' element={<Upload/>}/>   */}
<Route path="/single/:id" element={<Single/>}/>
{/* <Route path="/one/:id" element={<Single/>}/> */}

>>>>>>> 7ab2562e8e9702c631297be37de32e7a568809a4
</Routes>

</BrowserRouter>
    <Footer/> 

    </>
  );
}

export default App;
