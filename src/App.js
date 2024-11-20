import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TourSelection from "./component/booking_tours";
import ViewBlog from './component/blog';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TourSelection />} />
        <Route path="/blog" element={<ViewBlog />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
