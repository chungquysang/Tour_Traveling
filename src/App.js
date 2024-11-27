<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourSelection from "./component/booking_tours";
import ViewBlog from "./component/blog";
import Viewpddetails from "./component/deatail_Product";
import AdminPage from "./component/AdminPage";  // AdminPage import
import AddTourForm from "./component/AddTourForm";  // AddTourForm import
=======
import React from 'react';

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TourSelection from "./component/booking_tours";
import Viewpddetails from './component/deatail_Product';
>>>>>>> 84083f4908dc2c5cf6ebaa658dcd770349db58c0

const NotFound = () => <div>404 - Page Not Found</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TourSelection />} />
        <Route path="/detailsproduct/:id" element={<Viewpddetails />} />
<<<<<<< HEAD
        <Route path="/blog" element={<ViewBlog />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/edit/:id" element={<AdminPage />} />  {/* Correct route for editing */}
        <Route path="/add-tour" element={<AddTourForm />} />
        <Route path="*" element={<NotFound />} />
=======
        {/* <Route path="/contact" element={<Contact />} /> */}
>>>>>>> 84083f4908dc2c5cf6ebaa658dcd770349db58c0
      </Routes>
    </Router>
  );
}

export default App;
