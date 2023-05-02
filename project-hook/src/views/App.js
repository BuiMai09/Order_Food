import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from "react";
import Sidebar from '../components/SideBar';
import Nav from "../components/Nav";
import Home from '../components/home/Home';
import ContactUs from '../components/contact/ContactUs';
import Product from '../components/products/product';
import Login from '../components/Auth/login'
import Register from '../components/Auth/register';
import Footer from "../components/footer/footer"
function App() {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = (accessToken) => {
    setAccessToken(accessToken);
  };
  return (

    <Router>
      <div className="App w-full">

        <Nav />

        <div className='flex flex-row-reverse '>
          <Sidebar className="w-1/5 " />
          <div className=' mt-16 w-4/5 ' >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/products" element={<Product />} />
              <Route path="/sign-in" element={<Login onLogin={handleLogin} />} />
              <Route path="/sign-up" element={<Register />} />

            </Routes>
          </div>
        </div>

        <Footer className=" " />
      </div>
    </Router>
  );
}

export default App;
