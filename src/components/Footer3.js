import PropTypes from "prop-types";
import "./Footer3.css";

const Footer3 = ({ className = "" }) => {
  return (
    <footer className={`footer6 ${className}`}>
      <div className="footer7">
        <div className="footer-content">
          <div className="footer-left">
            <div className="div-footer-img3">
              <div className="linkely-parent4">
                <div className="linkely7">Linkely</div>
                <img className="frame-child5" alt="" src="/group-1-1.svg" />
                <div className="gifts7">Gifts</div>
              </div>
              <img
                className="image-bcorp-icon3"
                loading="lazy"
                alt=""
                src="/image-bcorp2@2x.png"
              />
            </div>
          </div>
          <div className="footer-right">
            <div className="div-footer-links3">
              <div className="primary-links">
                <div className="buy-gift-cards3">Buy Gift Cards</div>
                <div className="our-brands6">Our brands</div>
                <div className="our-gift-cards3">Our gift cards</div>
                <div className="how-it-works3">How it works</div>
                <div className="about-us6">About us</div>
                <div className="faqs9">FAQs</div>
                <div className="returns-refunds3">{`Returns & refunds`}</div>
                <div className="shipping-delivery3">{`Shipping & delivery`}</div>
                <div className="contact-us9">Contact us</div>
              </div>
              <div className="list13">
                <div className="redeem-gift-card3">Redeem Gift Card</div>
                <div className="register-voucher3">Register voucher</div>
                <div className="faqs10">FAQs</div>
                <div className="contact-us10">Contact us</div>
              </div>
              <div className="list14">
                <div className="for-business7">For Business</div>
                <div className="gift-card3">Gift card</div>
                <div className="our-brands7">Our brands</div>
                <div className="events3">Events</div>
                <div className="knowledge-hub3">Knowledge hub</div>
                <div className="faqs11">FAQs</div>
                <div className="about-us7">About us</div>
                <div className="contact-us11">Contact us</div>
              </div>
            </div>
            <div className="div-no-highlight3">
              <div className="bottom-content">
                <div className="div-brand-links3">
                  <img className="svg-icon17" alt="" src="/svg-6.svg" />
                  <img className="svg-icon18" alt="" src="/svg-7.svg" />
                  <img className="svg-icon19" alt="" src="/svg-8.svg" />
                </div>
                <div className="list15">
                  <div className="terms-conditions3">{`Terms & conditions`}</div>
                  <div className="policy-items">
                    <div className="promotions3">Promotions</div>
                  </div>
                  <div className="policy-items1">
                    <div className="privacy-policy3">Privacy policy</div>
                  </div>
                </div>
                <div className="div-ways-to-pay3">
                  <img
                    className="image-icon15"
                    loading="lazy"
                    alt=""
                    src="/image2@2x.png"
                  />
                  <img className="image-icon16" alt="" src="/image-14@2x.png" />
                  <img className="image-icon17" alt="" src="/image-24@2x.png" />
                  <img className="image-icon18" alt="" src="/image-34@2x.png" />
                  <img className="image-icon19" alt="" src="/image-44@2x.png" />
                </div>
                <div className="paragraph4">
                  <div className="powered-by-motivates3">{`© Powered by LinklyGifts Inc. Ltd, LinklyGifts Inc. Ltd, 3 Bath `}</div>
                  <div className="place-london-ec2a-3dr-all-wrapper">
                    <div className="place-london-ec2a3">
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

Footer3.propTypes = {
  className: PropTypes.string,
};

export default Footer3;
