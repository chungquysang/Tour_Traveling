import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Viewheader from "./header_v/header";
import Viewfooter from "./footer_v/footer";
import "../style/deatail_Product.css";

const Viewpddetails = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const [tour, setTour] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        // Modify API request to fetch tour by ID
        const response = await axios.get(`http://192.168.1.33:3001/api/Tours/${id}`);
        
        // Assuming the API responds with a single tour object
        const selectedTour = {
          id: response.data.TourID,
          title: response.data.TourName,
          desc: response.data.Description,
          destination: response.data.Destination,
          itinerary: response.data.Itinerary,
          highlights: response.data.Highlights,
          startDate: response.data.StartDate,
          endDate: response.data.EndDate,
          price: response.data.Price,
          seats: response.data.AvailableSeats,
          type: response.data.TourType,
          photo: Array.isArray(response.data.ImageURL) ? response.data.ImageURL : [response.data.ImageURL],
          rating: response.data.Rating,
          reviewsCount: response.data.ReviewsCount,
          city: response.data.City, // Assuming 'City' exists in the API response
        };

        setTour(selectedTour);

        if (selectedTour && selectedTour.photo.length > 0) {
          setMainImage(selectedTour.photo[0]);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tour details:", error);
        setLoading(false);
      }
    };

    fetchTourDetails();
  }, [id]); // Fetch details when `id` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const handleImageClick = (image) => {
    setMainImage(image); // Update the main image when thumbnail is clicked
  };

  return (
    <div>
      <Viewheader />
      <div className="container_deatail">
        <div className="caption">
          <h1>{tour.title}</h1>
          <h1 style={{ color: "#0E4F4F" }}>{tour.price.toLocaleString()} đ/ khách</h1>
        </div>
        <div className="caption_0">
          <div className="Badge_warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z"
                stroke="var(--warning-base)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <label className="sm">{tour.rating} ({tour.reviewsCount} reviews)</label>
          </div>
        </div>
        <div className="container_img">
          <div className="image-section">
            <div className="main-image">
              <img src={mainImage} alt="Tour" className="main-image" />
            </div>
            <div className="thumbnail-gallery">
              {tour.photo && tour.photo.length > 0 && tour.photo.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="thumbnail"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Viewfooter />
    </div>
  );
};

export default Viewpddetails;
