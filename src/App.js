import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navbar/Navigation';
import Home from './navbar/Home';
import About from './navbar/About';
import Jobs from './navbar/Jobs';
import Service from './navbar/Service';
import Contactus from './navbar/Contactus';
import Login from './navbar/Login';
import Register from './navbar/Register';
import Applyform from './navbar/Applyform';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/applyform" element={<Applyform />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
