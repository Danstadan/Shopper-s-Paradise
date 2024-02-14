import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Nav';
import Homepage from './Components/Home';
import Sidebar from './Components/Side';
import Futaa from './Components/Footer';

import Addproduct from './Components/InnerComponents/NewProduct';
import Errorr from './Components/404';

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
  
  return (
    <Fragment>
      <Router>
        <Navbar />
         <div style={{ marginTop: '10px' }}>
         {/* <div className="container-fluid row"> */}
            <Sidebar />
           
             <Routes>
                <Route index element={<Homepage />} />
                <Route path="/InnerComponents/NewProduct" element={<Addproduct />} />
                <Route path="*" element={<Errorr />} />
             </Routes>
          </div>
          <Futaa/>
          
      </Router>

    </Fragment>

  )
}

export default App
