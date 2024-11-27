import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/booking_tours.css";
import Viewheader from "./header_v/header";
import Viewfooter from "./footer_v/footer";
import hanoiHalong from "../assets/images/111.png";
import danangHoian from "../assets/images/111.png";
import saigonCuchi from "../assets/images/111.png";
import huePhongNha from "../assets/images/111.png";
import backgroundImage from "../assets/images/image.png";

const tours = [
  {
    id: 1,
    title: "Tour Hà Nội - Hạ Long",
    city: "Hà Nội",
    address: "Khởi hành từ Hà Nội, thăm vịnh Hạ Long",
    distance: 160,
    photo: hanoiHalong,
    desc: "Tour 3 ngày 2 đêm - Khám phá kỳ quan vịnh Hạ Long",
    price: 3675000,
    maxGroupSize: 20,
    reviews: [],
    featured: true,
  },
  {
    id: 2,
    title: "Tour Đà Nẵng - Hội An",
    city: "Đà Nẵng",
    address: "Khởi hành từ Đà Nẵng, tham quan Hội An ",
    distance: 30,
    photo: danangHoian,
    desc: "Tour 1 ngày - Khám phá phố cổ Hội An, lồng đèn",
    price: 1450000,
    maxGroupSize: 15,
    reviews: [],
    featured: false,
  },
  {
    id: 3,
    title: "Tour Sài Gòn - Củ Chi",
    city: "Sài Gòn",
    address: "Khởi hành từ TP. Hồ Chí Minh, tham quan địa đạo Củ Chi",
    distance: 70,
    photo: saigonCuchi,
    desc: "Tour nửa ngày - Khám phá lịch sử Củ Chi",
    price: 800000,
    maxGroupSize: 25,
    reviews: [],
    featured: false,
  },
  {
    id: 4,
    title: "Tour Huế - Phong Nha",
    city: "Huế",
    address: "Khởi hành từ Huế, tham quan động Phong Nha",
    distance: 213,
    photo: huePhongNha,
    desc: "Tour 2 ngày 1 đêm - Khám phá di sản thiên nhiên",
    price: 2700000,
    maxGroupSize: 18,
    reviews: [],
    featured: true,
  },
  {
    id: 5,
    title: "Tour Nha Trang - Bình Ba",
    city: "Nha Trang",
    address: "Khởi hành từ Nha Trang, thăm đảo Bình Ba",
    distance: 60,
    photo: "tour-nhatrang-binhba.jpg",
    desc: "Tour 1 ngày - Thư giãn tại đảo Bình Ba",
    price: 900000,
    maxGroupSize: 12,
    reviews: [],
    featured: false,
  },
  {
    id: 6,
    title: "Tour Đà Lạt - Hồ Xuân Hương",
    city: "Đà Lạt",
    address: "Khởi hành từ trung tâm Đà Lạt, tham quan Hồ Xuân Hương",
    distance: 5,
    photo: "tour-dalat-hoxuanhuong.jpg",
    desc: "Tour nửa ngày - Dạo quanh hồ Xuân Hương và thưởng thức cafe",
    price: 300000,
    maxGroupSize: 10,
    reviews: [],
    featured: true,
  },
  {
    id: 7,
    title: "Tour Phú Quốc - Hòn Thơm",
    city: "Phú Quốc",
    address: "Khởi hành từ Phú Quốc, tham quan Hòn Thơm",
    distance: 15,
    photo: "tour-phuquoc-honthom.jpg",
    desc: "Tour nửa ngày - Thư giãn trên bãi biển đẹp",
    price: 1200000,
    maxGroupSize: 8,
    reviews: [],
    featured: false,
  },
  {
    id: 8,
    title: "Tour Cần Thơ - Chợ Nổi Cái Răng",
    city: "Cần Thơ",
    address: "Khởi hành từ Cần Thơ, tham quan chợ nổi Cái Răng",
    distance: 10,
    photo: "tour-cantho-cairang.jpg",
    desc: "Tour nửa ngày - Khám phá văn hóa miền Tây tại chợ nổi",
    price: 500000,
    maxGroupSize: 30,
    reviews: [],
    featured: true,
  },
  {
    id: 9,
    title: "Tour Hà Nội - Tam Đảo",
    city: "Hà Nội",
    address: "Khởi hành từ Hà Nội, nghỉ dưỡng tại Tam Đảo",
    distance: 80,
    photo: "tour-hanoi-tamdao.jpg",
    desc: "Tour 2 ngày 1 đêm - Trải nghiệm nghỉ dưỡng trên núi",
    price: 1950000,
    maxGroupSize: 15,
    reviews: [],
    featured: false,
  },
  {
    id: 10,
    title: "Tour Hải Phòng - Đồ Sơn",
    city: "Hải Phòng",
    address: "Khởi hành từ Hải Phòng, thăm biển Đồ Sơn",
    distance: 20,
    photo: "tour-haiphong-doson.jpg",
    desc: "Tour 1 ngày - Nghỉ ngơi tại bãi biển Đồ Sơn",
    price: 750000,
    maxGroupSize: 20,
    reviews: [],
    featured: false,
  },
  {
    id: 11,
    title: "Tour Hà Giang - Đồng Văn",
    city: "Hà Giang",
    address: "Khởi hành từ Hà Giang, khám phá cao nguyên Đồng Văn",
    distance: 150,
    photo: "tour-hagiang-dongvan.jpg",
    desc: "Tour 3 ngày 2 đêm - Khám phá cao nguyên đá Đồng Văn",
    price: 4200000,
    maxGroupSize: 12,
    reviews: [],
    featured: true,
  },
  {
    id: 12,
    title: "Tour Quảng Bình - Hang Sơn Đoòng",
    city: "Quảng Bình",
    address: "Khởi hành từ Quảng Bình, khám phá Hang Sơn Đoòng",
    distance: 30,
    photo: "tour-quangbinh-sondoong.jpg",
    desc: "Tour 5 ngày 4 đêm - Trải nghiệm chinh phục hang động lớn nhất thế giới",
    price: 7500000,
    maxGroupSize: 5,
    reviews: [],
    featured: false,
  },
  {
    id: 13,
    title: "Tour Sapa - Fansipan",
    city: "Sapa",
    address: "Khởi hành từ thị trấn Sapa, chinh phục đỉnh Fansipan",
    distance: 10,
    photo: "tour-sapa-fansipan.jpg",
    desc: "Tour 2 ngày 1 đêm - Chinh phục nóc nhà Đông Dương",
    price: 2500000,
    maxGroupSize: 10,
    reviews: [],
    featured: true,
  },
  {
    id: 14,
    title: "Tour Vũng Tàu - Long Hải",
    city: "Vũng Tàu",
    address: "Khởi hành từ Vũng Tàu, thăm bãi biển Long Hải",
    distance: 25,
    photo: "tour-vungtau-longhai.jpg",
    desc: "Tour 1 ngày - Thư giãn tại bãi biển hoang sơ",
    price: 650000,
    maxGroupSize: 20,
    reviews: [],
    featured: false,
  },
  {
    id: 15,
    title: "Tour Phan Thiết - Mũi Né",
    city: "Phan Thiết",
    address: "Khởi hành từ Phan Thiết, tham quan đồi cát Mũi Né",
    distance: 20,
    photo: "tour-phanthiet-muine.jpg",
    desc: "Tour 1 ngày - Trải nghiệm đồi cát và làng chài Mũi Né",
    price: 950000,
    maxGroupSize: 18,
    reviews: [],
    featured: true,
  },
];

const TourSelection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate(); // Sử dụng để điều hướng

  const handleSearch = () => {
    const filteredTours = tours.filter((tour) =>
      tour.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredTours);
  };

  const handleCardClick = (tourID) => {
    navigate(`/detailsproduct/${tourID}`); // Chuyển đến trang chi tiết
  };

  return (
    <div>
      <Viewheader />
      <div className="tour-selection">
        <div className="tour-search-section">
          <div className="image-container">
            <img src={backgroundImage} className="background-image" alt="background_image" />
          </div>

          <div className="search-box">
            <h2>Bạn lựa chọn chuyến đi nào?</h2>
            <p>Hơn 100 tour du lịch hạng sang giá tốt đang chờ bạn</p>
            <div className="search-inputs">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Nhập địa điểm"
                  className="input-text"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select className="input-select">
                <option value="0">Tất cả địa điểm</option>
              </select>
              <select className="input-select">
                <option value="0">Tất cả mức giá</option>
                <option value="2">Từ 1tr đến 2tr</option>
                <option value="3">Từ 2tr đến 4tr</option>
                <option value="4">Từ 4tr đến 8tr</option>
              </select>
              <button className="search-button" onClick={handleSearch}>
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>

        {/* Tour List Section */}
        <div className="tour-list">
          <h2>Tour mới và phổ biến nhất</h2>
          <div className="tour-grid">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="tour-card"
                onClick={() => handleCardClick(tour.id)} // Xử lý khi click
              >
                <img src={tour.photo} alt={tour.title} className="tour-image" />
                <div className="tour-content">
                  <h3>{tour.title}</h3>
                  <p>{tour.desc}</p>
                </div>
                <div className="tour-price">
                  <p>{tour.price.toLocaleString()}₫ / khách</p>
                  <button className="details-button" onClick={() => handleCardClick(tour.id)} >Đặt ngay</button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Review Section */}
        {/* <div className="reviews-section">
          <h2>Đánh giá từ những người đã trải nghiệm</h2>
          <div className="review-card">
            <p>
              <strong>Tour Đà Nẵng - Hội An</strong> - "Một trải nghiệm tuyệt vời!
              Phố cổ Hội An thật bình yên và đẹp. Nhân viên tour cũng rất nhiệt
              tình."
            </p>
          </div>
        </div> */}
        {/* Footer  */}

      </div>
      <div>
        <Viewfooter />
      </div>
    </div>
  );
};
export default TourSelection;
