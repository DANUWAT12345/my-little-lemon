import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import './App.scss';

import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Nav from './Components/Nav';
import Footer from './Components/Footer.js';
import Homepage from './page/Homepage.js';
import Aboutpage from './page/Aboutpage.js';
import Reservepage from './page/Reservepage.js';
import Menupage from './page/Menupage.js';
import Loginpage from './page/Loginpage.js';
import Orderpage from './page/Orderpage.js';
import Contactpage from './page/Contactpage.js';
import Blogpage from './page/Blogpage.js';
import Poweredby from './page/Poweredby.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<Aboutpage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/menu" element={<Menupage/>}></Route>
        <Route path="/login" element={<Loginpage/>}></Route>
        <Route path="/my-reserve" element={<Reservepage/>}></Route>
        <Route path="/my-order" element={<Orderpage/>}></Route>
        <Route path="/contact" element={<Contactpage/>}></Route>
        <Route path="/blog" element={<Blogpage/>}></Route>
        <Route path="/powered-by" element={<Poweredby/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
