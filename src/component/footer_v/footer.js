import React from 'react';
import "../../style/footer.css"
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png"
const Viewfooter = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>Về chúng tôi</h3>
                    <div className="Header_logo__tC3WE">
                        <a href="/">
                            <img src={logo} alt="Touring logo" className="logo-img" />
                        </a>
                    </div>
                    <br></br>
                    <p>Chúng tôi cung cấp các tour du lịch chất lượng, khám phá những địa điểm đẹp nhất Việt Nam. Hãy tham gia các chuyến đi tuyệt vời cùng chúng tôi!</p>
                </div>
                <div className="footer-links">
                    <h3>Liên kết nhanh</h3>
                    <ul>
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/tours">Các tour du lịch</Link></li>
                        <li><Link to="/contact">Liên hệ</Link></li>
                        <li><Link to="/about">Về chúng tôi</Link></li>
                        <li><Link to="/terms">Điều khoản sử dụng</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Thông tin liên hệ</h3>
                    <p><strong>Địa chỉ:</strong> Tầng 7, số nhà 25, ngõ 38 phố Yên Lãng, phường Láng Hạ, quận Đống Đa, TP. Hà Nội</p>
                    <p><strong>Email:</strong> info@mixivivu.com</p>
                    <p><strong>Điện thoại:</strong> 0988937218 </p>
                </div>
                <div className="footer-social">
                    <h3>Theo dõi chúng tôi</h3>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Tour Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Viewfooter;