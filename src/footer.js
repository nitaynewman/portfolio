import './App.css'
const Footer = () => {
    return (
        <div className="footer_container">
        <div className="footer_links">
          <div className="footer_link--wrapper">
            <div className="footer_link--items">
              <h2>About Us</h2>
              <a href="/sign_up">How it works</a> <a href="/">Testimonials</a>
              <a href="/">Careers</a> <a href="/">Terms of Service</a>
            </div>
            <div className="footer_link--items">
              <h2>Contact Us</h2>
              <a href="/">Contact</a> <a href="/">Support</a>
              <a href="/">Destinations</a>
            </div>
          </div>
          <div className="footer_link--wrapper">
            <div className="footer_link--items">
              <h2>Videos</h2>
              <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
              <a href="/">Agency</a>
            </div>
            <div className="footer_link--items">
              <h2>Social Media</h2>
              <a href="/">Instagram</a> <a href="/">Facebook</a>
              <a href="/">Youtube</a> <a href="/">Twitter</a>
            </div>
          </div>
        </div>
        <section className="social_media">
          <div className="social_media--wrap">
            <div className="footer_logo">
              <a href="/" id="footer_logo">N. Newman</a>
            </div>
            <p className="website_rights">N. Newman PORTFOLIO All rights reserved to © Nitay Newman</p>
            <div className="social_icons">
              <a href="/" className="social_icon--link" target="_blank"
                ><i className="fab fa-facebook"></i
              ></a>
              <a href="/" className="social_icon--link"
                ><i className="fab fa-instagram"></i
              ></a>
              <a href="/" className="social_icon--link"
                ><i className="fab fa-youtube"></i
              ></a>
              <a href="/" className="social_icon--link"
                ><i className="fab fa-linkedin"></i
              ></a>
              <a href="/" className="social_icon--link"
                ><i className="fab fa-twitter"></i
              ></a>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Footer;