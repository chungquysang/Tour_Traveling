import React from 'react';

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TourSelection from "./component/booking_tours";
import Viewpddetails from './component/deatail_Product';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TourSelection />} />
        <Route path="/detailsproduct/:id" element={<Viewpddetails />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
