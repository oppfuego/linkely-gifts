import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer1">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="div-footer-img">
              <div className="linkely-group">
                <div className="linkely1">Linkely</div>
                <img className="frame-inner" alt="" src="/group-1-1.svg" />
                <div className="gifts1">Gifts</div>
              </div>
              <img
                className="image-bcorp-icon"
                loading="lazy"
                alt=""
                src="/image-bcorp@2x.png"
              />
            </div>
          </div>
          <div className="footer-links-container">
            <div className="div-footer-links">
              <div className="footer-links-column-one">
                <div className="buy-gift-cards">Buy Gift Cards</div>
                <div className="our-brands">Our brands</div>
                <div className="our-gift-cards">Our gift cards</div>
                <div className="how-it-works">How it works</div>
                <div className="about-us">About us</div>
                <div className="faqs">FAQs</div>
                <div className="returns-refunds">{`Returns & refunds`}</div>
                <div className="shipping-delivery">{`Shipping & delivery`}</div>
                <div className="contact-us">Contact us</div>
              </div>
              <div className="list1">
                <div className="redeem-gift-card">Redeem Gift Card</div>
                <div className="register-voucher">Register voucher</div>
                <div className="faqs1">FAQs</div>
                <div className="contact-us1">Contact us</div>
              </div>
              <div className="list2">
                <div className="for-business1">For Business</div>
                <div className="gift-card">Gift card</div>
                <div className="our-brands1">Our brands</div>
                <div className="events">Events</div>
                <div className="knowledge-hub">Knowledge hub</div>
                <div className="faqs2">FAQs</div>
                <div className="about-us1">About us</div>
                <div className="contact-us2">Contact us</div>
              </div>
            </div>
            <div className="div-no-highlight">
              <div className="footer-bottom-content">
                <div className="div-brand-links">
                  <img className="svg-icon6" alt="" src="/svg-6.svg" />
                  <img className="svg-icon7" alt="" src="/svg-7.svg" />
                  <img className="svg-icon8" alt="" src="/svg-8.svg" />
                </div>
                <div className="list3">
                  <div className="terms-conditions">{`Terms & conditions`}</div>
                  <div className="footer-legal-items">
                    <div className="promotions">Promotions</div>
                  </div>
                  <div className="footer-legal-items1">
                    <div className="privacy-policy">Privacy policy</div>
                  </div>
                </div>
                <div className="div-ways-to-pay">
                  <img
                    className="image-icon"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                  <img className="image-icon1" alt="" src="/image-1@2x.png" />
                  <img className="image-icon2" alt="" src="/image-2@2x.png" />
                  <img className="image-icon3" alt="" src="/image-3@2x.png" />
                  <img className="image-icon4" alt="" src="/image-4@2x.png" />
                </div>
                <div className="paragraph1">
                  <div className="powered-by-motivates">{`© Powered by LinklyGifts Inc. Ltd, LinklyGifts Inc. Ltd, 3 Bath `}</div>
                  <div className="footer-address">
                    <div className="place-london-ec2a">
                      Place, London, EC2A 3DR.  All rights reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
