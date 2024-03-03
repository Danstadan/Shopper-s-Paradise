import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Fragment } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './Components/Nav';
import Homepage from './Components/Home';
import Sidebar from './Components/Side';
import Futaa from './Components/Footer';

import Addproduct from './Components/InnerComponents/NewProduct';
import Errorr from './Components/404';
import Editproduct from './Components/InnerComponents/EditProducts';
import Loginpage from './Components/InnerComponents/Login';
import CreateAccount from './Components/InnerComponents/CreateAccount';
import ProfilePage from './Components/InnerComponents/ProfilePage';
import ShopSetup from './Components/InnerComponents/CreateStore';
import Aboutus from './Components/InnerComponents/About';
import Privacy from './Components/InnerComponents/PrivacyPolicy';
import TermsofService from './Components/InnerComponents/TermsofUse';
import ContactUs from './Components/InnerComponents/ContactUs';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvcrFv-1C9-0qJF9ZZPExoSJb3FE-UKxU",
  authDomain: "shopper-s-paradise-6129c.firebaseapp.com",
  projectId: "shopper-s-paradise-6129c",
  storageBucket: "shopper-s-paradise-6129c.appspot.com",
  messagingSenderId: "84795416848",
  appId: "1:84795416848:web:6600b36f2465e937200595",
  measurementId: "G-08L9TXPW19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
   //const location = useLocation ();
   //const isAddProductPage = location.pathname === "/Addproduct";
   //const location = useLocation();

  // Function to determine whether to show footer based on route
  // const shouldShowFooter = (pathname) => {
  //   // Define routes where footer should be hidden
  //   const hiddenRoutes = ['/Loginpage',"*", '/CreateAccount'];
  //   return !hiddenRoutes.includes(pathname);
  
  return (
    <Router>
       {(location.pathname === '/Addproduct'|| location.pathname === '/Editproduct'|| location.pathname === '/Privacy'|| location.pathname === '/Store'|| location.pathname === '/Profile' || location.pathname === '/' || location.pathname === '/TOS' || location.pathname === '/About') && <Navbar />} 
     {location.pathname === '/' && <Sidebar />}
      <Routes>
        <Route path="/Loginpage" element={<Loginpage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Store" element={<ShopSetup />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/Editproduct" element={<Editproduct />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/TOS" element={<TermsofService />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/About" element={<Aboutus />} />
        <Route path="*" element={<Errorr />} />
      </Routes>
       {(!location.pathname ==="/CreateAccount" || location.pathname === "/Loginpage "|| location.pathname === "*")&& <Futaa />}
  </Router>         
  )
}

export default App;
