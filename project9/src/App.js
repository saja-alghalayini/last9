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
{/* <Route path='/addproduct' element={<Upload/>}/>   */}
</Routes>

</BrowserRouter>
    <Footer/> 
    </>
  );
}

export default App;
