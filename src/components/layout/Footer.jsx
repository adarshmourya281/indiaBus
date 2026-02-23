import "../../styles/layout/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">
            India<span>Bus</span>
          </h2>

          <h4 className="footer-subtitle">Customer Support</h4>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>Email: support@indiabus.com</p>
          <p>Support Hours: 24x7</p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cancellation & Refund Policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4 className="footer-subtitle">Follow Us</h4>

          <div className="social-icons">
            <div className="icon"><FaFacebookF /></div>
            <div className="icon"><FaInstagram /></div>
            <div className="icon"><FaTwitter /></div>
            <div className="icon"><FaLinkedinIn /></div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 IndiaBus. All rights reserved.</p>
        <p>Your travel, your way — safe, simple, and smart.</p>
      </div>
    </footer>
  );
}

export default Footer;