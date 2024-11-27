import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/booking_tours.css";
import Viewheader from "./header_v/header";
import Viewfooter from "./footer_v/footer";

const TourSelection = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Gọi API để lấy dữ liệu tour
    const fetchTours = async () => {
      try {
        const response = await axios.get("http://192.168.1.33:3001/api/Tours");
        console.log("Dữ liệu từ API:", response.data); 
        const formattedTours = response.data.map((tour) => ({
          id: tour.TourID,
          title: tour.TourName,
          desc: tour.Description,
          destination: tour.Destination,
          itinerary: tour.Itinerary,
          highlights: tour.Highlights,
          startDate: tour.StartDate,
          endDate: tour.EndDate,
          price: tour.Price,
          seats: tour.AvailableSeats,
          type: tour.TourType,
          photo: tour.ImageURL,
          rating: tour.Rating,
          reviewsCount: tour.ReviewsCount,
        }));
        setTours(formattedTours);
        setFilteredTours(formattedTours);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };

    fetchTours();
  }, []);

  // Tự động lọc tour khi người dùng thay đổi từ khóa tìm kiếm
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTours(tours); // Nếu không có từ khóa tìm kiếm, hiển thị tất cả các tour
    } else {
      const results = tours.filter((tour) =>
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchTerm.toLowerCase()) // Tìm kiếm theo cả tên tour và điểm đến
      );
      setFilteredTours(results);
    }
  }, [searchTerm, tours]);

  return (
    <div>
      <Viewheader />
      <div className="tour-selection">
        <div className="tour-search-section">
          <h2>Bạn lựa chọn chuyến đi nào?</h2>
          <p>Hơn 100 tour du lịch hạng sang giá tốt đang chờ bạn</p>
          <div className="search-inputs">
            <input
              type="text"
              placeholder="Nhập địa điểm"
              className="input-text"
              value={searchTerm}  // Đảm bảo input được cập nhật khi tìm kiếm
              onChange={(e) => setSearchTerm(e.target.value)}  // Cập nhật từ khóa tìm kiếm khi người dùng nhập
            />
          </div>
        </div>

        {/* Tour List */}
        <div className="tour-list">
          <h2>Tour phổ biến</h2>
          <div className="tour-grid">
            {filteredTours.length > 0 ? (
              filteredTours.map((tour) => (
                <div key={tour.id} className="tour-card">
                  <img src={tour.photo} alt={tour.title} className="tour-image" />
                  <div className="tour-content">
                    <h3>{tour.title}</h3>
                    <p>{tour.desc}</p>
                    <p><strong>Điểm đến:</strong> {tour.destination}</p>
                    <p><strong>Lịch trình:</strong> {tour.itinerary}</p>
                    <p><strong>Điểm nổi bật:</strong> {tour.highlights}</p>
                    <p><strong>Thời gian:</strong> {new Date(tour.startDate).toLocaleDateString()} - {new Date(tour.endDate).toLocaleDateString()}</p>
                    <p><strong>Giá:</strong> {tour.price.toLocaleString()}₫</p>
                    <p><strong>Còn chỗ:</strong> {tour.seats}</p>
                    <p><strong>Loại tour:</strong> {tour.type}</p>
                    <p><strong>Đánh giá:</strong> {tour.rating} ({tour.reviewsCount} lượt đánh giá)</p>
                  </div>
                  {/* Update the button to use Link */}
                  <Link to={`/detailsproduct/${tour.id}`}>
                    <button className="details-button">Xem chi tiết</button>
                  </Link>
                </div>
              ))
            ) : (
              <p>Không tìm thấy tour nào.</p>
            )}
          </div>
        </div>
      </div>
      <Viewfooter/>
    </div>
  );
};

export default TourSelection;
