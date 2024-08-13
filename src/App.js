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
import Reservepage2 from './page/Reservepage2.js';

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
        <Route path="/my-reserve" element={<Reservepage/>}></Route>
        <Route path="/my-reserve-2" element={<Reservepage2/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
