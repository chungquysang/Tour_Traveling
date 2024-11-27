import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/AdminPage.css";

const AdminPage = () => {
  const [tours, setTours] = useState([]);
  const [editTour, setEditTour] = useState(null); // Store the tour being edited
  const { id } = useParams();  // Get the TourID from URL params
  const navigate = useNavigate();  // For navigating after editing

  // Fetch all tours on load
  useEffect(() => {
    fetchTours();
  }, []);

  // Fetch specific tour details if in edit mode
  useEffect(() => {
    if (id) {
      fetchTourDetails(id); // Fetch details when the ID is available (edit mode)
    }
  }, [id]);

  // Fetch the list of tours
  const fetchTours = async () => {
    try {
      const response = await axios.get("http://192.168.1.33:3001/api/Tours");
      setTours(response.data);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  // Fetch a specific tour's details
  const fetchTourDetails = async (tourId) => {
    try {
      const response = await axios.get(`http://192.168.1.33:3001/api/Tours/${tourId}`);
      setEditTour(response.data);
    } catch (error) {
      console.error("Error fetching tour details:", error);
    }
  };

  // Delete a specific tour
  const deleteTour = async (tourId) => {
    if (!window.confirm("Are you sure you want to delete this tour?")) return;

    try {
      await axios.delete(`http://192.168.1.33:3001/api/Tours/${tourId}`);
      alert("Tour deleted successfully!");
      fetchTours(); // Refresh tour list after deletion
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  // Update the tour
  const updateTour = async (tourId, updatedData) => {
    try {
      await axios.put(`http://192.168.1.33:3001/api/Tours/${tourId}`, updatedData);
      alert("Tour updated successfully!");
      navigate('/admin');  // Redirect back to the admin page after saving
    } catch (error) {
      console.error("Error updating tour:", error);
    }
  };

  // Handle changes in the edit form
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTour({ ...editTour, [name]: value });
  };

  // Format date correctly for <input type="date">
  const formatDateForInput = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  };

  return (
    <div className="admin-page">
      <h2>{id ? "Edit Tour" : "Admin Panel"}</h2>
      {id ? (
        <div>
          {/* Form to edit the tour details */}
          <input
            name="TourName"
            value={editTour?.TourName || ""}
            onChange={handleEditChange}
            placeholder="Tour Name"
          />
          <textarea
            name="Description"
            value={editTour?.Description || ""}
            onChange={handleEditChange}
            placeholder="Description"
          />
          <input
            name="Destination"
            value={editTour?.Destination || ""}
            onChange={handleEditChange}
            placeholder="Destination"
          />
          <textarea
            name="Itinerary"
            value={editTour?.Itinerary || ""}
            onChange={handleEditChange}
            placeholder="Itinerary"
          />
          <textarea
            name="Highlights"
            value={editTour?.Highlights || ""}
            onChange={handleEditChange}
            placeholder="Highlights"
          />
          <input
            type="date"
            name="StartDate"
            value={formatDateForInput(editTour?.StartDate)}
            onChange={handleEditChange}
          />
          <input
            type="date"
            name="EndDate"
            value={formatDateForInput(editTour?.EndDate)}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="Price"
            value={editTour?.Price || ""}
            onChange={handleEditChange}
            placeholder="Price"
          />
          <input
            type="number"
            name="AvailableSeats"
            value={editTour?.AvailableSeats || ""}
            onChange={handleEditChange}
            placeholder="Available Seats"
          />
          <input
            name="TourType"
            value={editTour?.TourType || ""}
            onChange={handleEditChange}
            placeholder="Tour Type"
          />
          <input
            name="ImageURL"
            value={editTour?.ImageURL || ""}
            onChange={handleEditChange}
            placeholder="Image URL"
          />
          <input
            type="number"
            step="0.1"
            name="Rating"
            value={editTour?.Rating || ""}
            onChange={handleEditChange}
            placeholder="Rating"
          />
          <input
            type="number"
            name="ReviewsCount"
            value={editTour?.ReviewsCount || ""}
            onChange={handleEditChange}
            placeholder="Reviews Count"
          />
          <button onClick={() => updateTour(id, editTour)}>Save</button>
          <button onClick={() => navigate("/admin")}>Cancel</button>
        </div>
      ) : (
        <div>
          {/* Display list of tours */}
          {tours.map((tour) => (
            <div key={tour.TourID} className="tour-card">
              <h3>{tour.TourName}</h3>
              <p>Destination: {tour.Destination}</p>
              <p>Price: {tour.Price}</p>
              <button onClick={() => navigate(`/admin/edit/${tour.TourID}`)}>Edit</button>
              <button onClick={() => deleteTour(tour.TourID)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
