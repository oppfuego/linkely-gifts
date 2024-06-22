import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer2 ${className}`}>
      <div className="footer3">
        <div className="footer-top1">
          <div className="footer-links">
            <div className="div-footer-img1">
              <div className="group-div">
                <div className="linkely3">Linkely</div>
                <img className="frame-child1" alt="" src="/group-1-1.svg" />
                <div className="gifts3">Gifts</div>
              </div>
              <img
                className="image-bcorp-icon1"
                loading="lazy"
                alt=""
                src="/image-bcorp1@2x.png"
              />
            </div>
          </div>
          <div className="links-container">
            <div className="div-footer-links1">
              <div className="customer-links">
                <div className="buy-gift-cards1">Buy Gift Cards</div>
                <div className="our-brands2">Our brands</div>
                <div className="our-gift-cards1">Our gift cards</div>
                <div className="how-it-works1">How it works</div>
                <div className="about-us2">About us</div>
                <div className="faqs3">FAQs</div>
                <div className="returns-refunds1">{`Returns & refunds`}</div>
                <div className="shipping-delivery1">{`Shipping & delivery`}</div>
                <div className="contact-us3">Contact us</div>
              </div>
              <div className="list5">
                <div className="redeem-gift-card1">Redeem Gift Card</div>
                <div className="register-voucher1">Register voucher</div>
                <div className="faqs4">FAQs</div>
                <div className="contact-us4">Contact us</div>
              </div>
              <div className="list6">
                <div className="for-business3">For Business</div>
                <div className="gift-card1">Gift card</div>
                <div className="our-brands3">Our brands</div>
                <div className="events1">Events</div>
                <div className="knowledge-hub1">Knowledge hub</div>
                <div className="faqs5">FAQs</div>
                <div className="about-us3">About us</div>
                <div className="contact-us5">Contact us</div>
              </div>
            </div>
            <div className="div-no-highlight1">
              <div className="footer-info-content">
                <div className="div-brand-links1">
                  <img
                    className="svg-icon9"
                    loading="lazy"
                    alt=""
                    src="/svg-6.svg"
                  />
                  <img className="svg-icon10" alt="" src="/svg-7.svg" />
                  <img className="svg-icon11" alt="" src="/svg-8.svg" />
                </div>
                <div className="list7">
                  <div className="terms-conditions1">{`Terms & conditions`}</div>
                  <div className="legal-items">
                    <div className="promotions1">Promotions</div>
                  </div>
                  <div className="legal-items1">
                    <div className="privacy-policy1">Privacy policy</div>
                  </div>
                </div>
                <div className="div-ways-to-pay1">
                  <img
                    className="image-icon5"
                    loading="lazy"
                    alt=""
                    src="/image1@2x.png"
                  />
                  <img className="image-icon6" alt="" src="/image-11@2x.png" />
                  <img className="image-icon7" alt="" src="/image-21@2x.png" />
                  <img className="image-icon8" alt="" src="/image-31@2x.png" />
                  <img className="image-icon9" alt="" src="/image-41@2x.png" />
                </div>
                <div className="paragraph2">
                  <div className="powered-by-motivates1">{`© Powered by LinklyGifts Inc. Ltd, LinklyGifts Inc. Ltd, 3 Bath `}</div>
                  <div className="address">
                    <div className="place-london-ec2a1">
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

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
