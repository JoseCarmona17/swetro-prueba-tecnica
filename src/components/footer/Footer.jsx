import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css'

export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-box">
        <h2>Swetro</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi fugiat
          officia odit. Eos nostrum officia, itaque accusantium voluptatum fuga
          porro hic, dolorem minus harum laborum asperiores tempore consequatur
          ipsam ab!
        </p>
        <div className="social">
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><i className="bx bxl-instagram"></i></a>
          <a href="#"><i className="bx bxl-tiktok"></i></a>
        </div>
      </div>

      <div className="footer-box">
        <h3>Soporte</h3>
        <li><a href="#">Ayuda y soporte</a></li>
        <li><a href="#">Return policy</a></li>
        <li><a href="#">terminos de uso</a></li>
      </div>

      <div className="footer-box">
        <h3>View Guides</h3>
        <li><a href="#">Blog Posts</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Our Branches</a></li>
      </div>

      <div className="footer-box">
        <h3>Contact</h3>
        <div className="contact">
          <span><i className="bx bxs-map"></i>250 COLOMBIA 10001</span>
          <span><i className="bx bxs-phone"></i>+57 3103878143</span>
          <span><i className="bx bxs-envelope"></i>Swetro@kjdu.com</span>
        </div>
      </div>

      <div className="copyright">
        <p>&#169; Jose Andres de la Ossa All Right Reserved</p>
      </div>

    </section>
  )
}
