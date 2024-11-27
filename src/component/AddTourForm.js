import React, { useState } from "react";
import axios from "axios";
import "../style/AddTourForm.css"
const AddTourForm = () => {
  const [formData, setFormData] = useState({
    TourName: "",
    Description: "",
    Destination: "",
    Itinerary: "",
    Highlights: "",
    StartDate: "",
    EndDate: "",
    Price: "",
    AvailableSeats: "",
    TourType: "",
    ImageURL: "",
    Rating: "",
    ReviewsCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.1.33:3001/api/Tours", formData);
      alert("Tour added successfully!");
      console.log(response.data);
      setFormData({
        TourName: "",
        Description: "",
        Destination: "",
        Itinerary: "",
        Highlights: "",
        StartDate: "",
        EndDate: "",
        Price: "",
        AvailableSeats: "",
        TourType: "",
        ImageURL: "",
        Rating: "",
        ReviewsCount: "",
      });
    } catch (error) {
      console.error("Error adding tour:", error);
      alert("Failed to add tour!");
    }
  };

  return (
    <div className="add-tour-form">
      <h2>Add New Tour</h2>
      <form onSubmit={handleSubmit}>
        <input name="TourName" placeholder="Tour Name" value={formData.TourName} onChange={handleChange} required />
        <textarea name="Description" placeholder="Description" value={formData.Description} onChange={handleChange} required />
        <input name="Destination" placeholder="Destination" value={formData.Destination} onChange={handleChange} required />
        <textarea name="Itinerary" placeholder="Itinerary" value={formData.Itinerary} onChange={handleChange} required />
        <textarea name="Highlights" placeholder="Highlights" value={formData.Highlights} onChange={handleChange} />
        <input type="date" name="StartDate" value={formData.StartDate} onChange={handleChange} required />
        <input type="date" name="EndDate" value={formData.EndDate} onChange={handleChange} required />
        <input type="number" name="Price" placeholder="Price" value={formData.Price} onChange={handleChange} required />
        <input type="number" name="AvailableSeats" placeholder="Available Seats" value={formData.AvailableSeats} onChange={handleChange} required />
        <input name="TourType" placeholder="Tour Type" value={formData.TourType} onChange={handleChange} />
        <input name="ImageURL" placeholder="Image URL" value={formData.ImageURL} onChange={handleChange} />
        <input type="number" step="0.1" name="Rating" placeholder="Rating" value={formData.Rating} onChange={handleChange} />
        <input type="number" name="ReviewsCount" placeholder="Reviews Count" value={formData.ReviewsCount} onChange={handleChange} />
        <button type="submit">Add Tour</button>
      </form>
    </div>
  );
};

export default AddTourForm;
