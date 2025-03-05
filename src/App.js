import React, { useEffect, useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Editcollab from './components/Assignments/editcollab';
import Signup from '../src/components/HomePage/Signup';
import Signin from "../src/components/HomePage/signin";
import Home from "./components/HomePage";
import Postlogin from "./components/PostloginHome";
import Land from "./components/HomePage";
import OTP from "./components/HomePage/OTP";
import { auth } from "./components/firebase";  
import Createassignment from "./components/Assignments/Createassignment";
import Pastcollabs from "./components/Assignments/Pastcollabs";
import Futurecollabs from "./components/Assignments/futurecollabs";
import Navbar from "../src/components/HomePage/Nav"
import Footer from "../src/components/HomePage/Footer"
import Footerformobile from "../src/components/HomePage/footerformobile"
import { driverSelector } from './api/driver';
import { useSelector } from 'react-redux';
import Profile from "../src/components/Profile";
import Collabs from "../src/components/Pages/Collabs";
import Tireanimation from "../src/components/Pages/Gsapexample";
import AllRoutes from '../src/components/Routes';
import Indepthroute from '../src/components/Routes/route-traking';
import Payments from '../src/components/Payments';
import RouteDetails from '../src/components/Bookings/Bookingdetails'
import Documents from '../src/components/Profile/documentsmain';
import SigninWithPassword from '../src/components/HomePage/signinvithpswd';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const {driverAuthenticate } = useSelector(driverSelector)
  console.log("<<<-->>>>",driverAuthenticate)
  return (
    <>
      <div>
      <Navbar/>
        <Routes>
         
          
          <Route path="/" element={driverAuthenticate ? <Postlogin /> : <Home />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/postloginhome' element={<Postlogin />} />
          <Route path='/signin/authopage/:pno' element={<OTP />} />
          <Route path='/createassignment' element={<Createassignment />} />
          <Route path='/pastcollabs' element={<Pastcollabs />} />
          <Route path='/futurecollabs' element={<Futurecollabs />} />
          <Route path='/edit-collab/:id' element={<Editcollab />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/collabs' element={<Collabs />} />
          <Route path='/gsapex' element={<Tireanimation />} />
          <Route path='/routes' element={<AllRoutes />} />
          <Route path='/routeindepth/:routeid' element={<Indepthroute />} />
          <Route path='/payments' element={<Payments />} />
          <Route path='/ridedetails/:rideid' element={<RouteDetails />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/signpswd' element={<SigninWithPassword />} />


        </Routes>
        <div>
        {isMobile && driverAuthenticate ? <Footerformobile /> : <Footer />}
        </div>
        
      </div>
    </>
  );
}

export default App;
