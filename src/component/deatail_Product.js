import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Viewheader from "./header_v/header";
import Viewfooter from "./footer_v/footer";
import "../style/deatail_product.css"
import hanoiHalong from "../assets/images/111.png";
import danangHoian from "../assets/images/logo.png";
import saigonCuchi from "../assets/images/image.png";
import huePhongNha from "../assets/images/111.png";

const tours = [
    {
        id: 1,
        title: "Tour Hà Nội - Hạ Long",
        city: "Hà Nội",
        address: "Khởi hành từ Hà Nội, thăm vịnh Hạ Long",
        distance: 160,
        photo: [hanoiHalong, danangHoian, saigonCuchi],
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

const Viewpddetails = () => {

    const { id } = useParams();
    const tour = tours.find((t) => t.id === parseInt(id));

    const [mainImage, setMainImage] = useState(tour.photo[0]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const handleButtonClick = () => {
        setIsFormVisible(true);
    };


    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    if (!tour) {
        return <div>Tour not found
        </div>; // Display a message if the tour doesn't exist
    }
    if (!tour.photo || tour.photo.length === 0) {
        return <div>Không tìm thấy ảnh</div>; // Display message if no images are found
    }
    const handleImageClick = (image) => {
        setMainImage(image);
    };



    return (
        <div>
            <Viewheader />
            <div className="container_deatail">
                <div className="caption">
                    <h1>{tour.title}</h1>
                    <h1 style={{ color: "#0E4F4F" }}>{tour.price}đ/ khách</h1>
                </div>
                <div className="caption_0">
                    <div class="Badge_warning__ZYfZr  Badge_lg__EBrf7 Badge_container__ehKAY ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.2443 4.17391C11.4758 3.50799 11.5916 3.17503 11.7627 3.08276C11.9108 3.00289 12.0892 3.00289 12.2373 3.08276C12.4084 3.17503 12.5242 3.50799 12.7556 4.17391L14.2859 8.5763C14.3518 8.76583 14.3847 8.86059 14.4441 8.93116C14.4965 8.9935 14.5634 9.04209 14.6389 9.07269C14.7244 9.10734 14.8247 9.10938 15.0253 9.11347L19.6851 9.20843C20.3899 9.22279 20.7423 9.22998 20.883 9.36423C21.0047 9.48042 21.0598 9.65005 21.0297 9.81559C20.9948 10.0069 20.7139 10.2198 20.1521 10.6458L16.438 13.4615C16.2782 13.5828 16.1982 13.6434 16.1494 13.7216C16.1063 13.7908 16.0808 13.8694 16.075 13.9506C16.0685 14.0426 16.0975 14.1387 16.1556 14.3307L17.5053 18.7918C17.7094 19.4666 17.8115 19.804 17.7273 19.9792C17.6544 20.1309 17.5101 20.2357 17.3433 20.2582C17.1506 20.2841 16.8613 20.0828 16.2826 19.6801L12.4569 17.018C12.2922 16.9034 12.2099 16.8461 12.1204 16.8239C12.0413 16.8042 11.9587 16.8042 11.8796 16.8239C11.7901 16.8461 11.7078 16.9034 11.5431 17.018L7.71738 19.6801C7.1387 20.0828 6.84936 20.2841 6.65666 20.2582C6.48988 20.2357 6.34559 20.1309 6.2727 19.9792C6.18848 19.804 6.29056 19.4666 6.49471 18.7918L7.84436 14.3307C7.90246 14.1387 7.93151 14.0426 7.92497 13.9506C7.91919 13.8694 7.89365 13.7908 7.85056 13.7216C7.80179 13.6434 7.72184 13.5828 7.56195 13.4615L3.84791 10.6458C3.28611 10.2198 3.00521 10.0069 2.97034 9.81559C2.94015 9.65005 2.99527 9.48042 3.11699 9.36423C3.25764 9.22998 3.61007 9.22279 4.31492 9.20843L8.97472 9.11347C9.17533 9.10938 9.27564 9.10734 9.3611 9.07269C9.43659 9.04209 9.50346 8.9935 9.5559 8.93116C9.61526 8.86059 9.6482 8.76583 9.71408 8.5763L11.2443 4.17391Z" stroke="var(--warning-base)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><label class="sm">5.0 (7 đánh giá)</label></div>
                    <div class="Badge_default__edPsE  Badge_lg__EBrf7 Badge_container__ehKAY ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                        <label class="sm">{tour.city}</label>
                    </div>
                </div>
                <div className="container_img">
                    <div className="image-section">
                        <div className="main-image">
                            <img src={mainImage} alt="Tour" className="main-image" />
                        </div>
                        <div className="thumbnail-gallery">
                            {tour.photo.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className="thumbnail"
                                    onClick={() => handleImageClick(image)}
                                />
                            ))}
                        </div>
                        <div class="content-tour shadow">
                            <h2>Thông Tin chuyến du lịch</h2>
                            <p><strong>Chuyến du lịch: </strong> {tour.title}</p>
                            <p><strong>Thời gian:</strong> {tour.desc}</p>
                            <p><strong>Lịch trình:</strong> {tour.address}</p>
                        </div>

                        <div class="tour-footer">
                            <button class="button" onClick={handleButtonClick}>
                                Đặt Ngay
                            </button>
                            {/* Form đặt tour du lịch*/}
                            {isFormVisible && (
                                <div className="booking-form">
                                    <div className="form-overlay" onClick={handleCloseForm}></div>
                                    <div className="form-content">
                                        <h3>Đặt tour du lịch</h3>
                                        <form>
                                            <div className="form-group">
                                                <label>Ngày nhận phòng:</label>
                                                <input type="date" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Số lượng:</label>
                                                <input type="number" min="1" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Họ và tên:</label>
                                                <input type="text" placeholder="Nhập họ và tên" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Số điện thoại:</label>
                                                <input
                                                    type="text"
                                                    placeholder="Nhập số điện thoại"
                                                    pattern="\d+"
                                                    title="Vui lòng nhập số điện thoại hợp lệ"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email:</label>
                                                <input type="email" placeholder="Nhập email" required />
                                            </div>
                                            <div className="form-group">
                                                <label>Yêu cầu:</label>
                                                <textarea rows="3" placeholder="Nhập yêu cầu của bạn"></textarea>
                                            </div>
                                            <button className="booking-button" type="submit">
                                                Đặt ngay
                                            </button>
                                        </form>
                                        <div className="close-button" onClick={handleCloseForm}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#adb5c2" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <Viewfooter />
        </div>
    )
}

export default Viewpddetails;