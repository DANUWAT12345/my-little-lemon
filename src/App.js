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
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
