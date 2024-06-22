import PropTypes from "prop-types";
import "./Footer2.css";

const Footer2 = ({ className = "" }) => {
  return (
    <div className={`footer4 ${className}`}>
      <footer className="footer5">
        <div className="footer-top2">
          <div className="logo-and-bcorp">
            <div className="div-footer-img2">
              <div className="linkely-parent3">
                <div className="linkely6">Linkely</div>
                <img className="frame-child4" alt="" src="/group-1-1.svg" />
                <div className="gifts6">Gifts</div>
              </div>
              <img
                className="image-bcorp-icon2"
                alt=""
                src="/image-bcorp@2x.png"
              />
            </div>
          </div>
          <div className="div-footer-links-parent">
            <div className="div-footer-links2">
              <div className="gift-card-links">
                <div className="buy-gift-cards2">Buy Gift Cards</div>
                <div className="our-brands4">Our brands</div>
                <div className="our-gift-cards2">Our gift cards</div>
                <div className="how-it-works2">How it works</div>
                <div className="about-us4">About us</div>
                <div className="faqs6">FAQs</div>
                <div className="returns-refunds2">{`Returns & refunds`}</div>
                <div className="shipping-delivery2">{`Shipping & delivery`}</div>
                <div className="contact-us6">Contact us</div>
              </div>
              <div className="list10">
                <div className="redeem-gift-card2">Redeem Gift Card</div>
                <div className="register-voucher2">Register voucher</div>
                <div className="faqs7">FAQs</div>
                <div className="contact-us7">Contact us</div>
              </div>
              <div className="list11">
                <div className="for-business6">For Business</div>
                <div className="gift-card2">Gift card</div>
                <div className="our-brands5">Our brands</div>
                <div className="events2">Events</div>
                <div className="knowledge-hub2">Knowledge hub</div>
                <div className="faqs8">FAQs</div>
                <div className="about-us5">About us</div>
                <div className="contact-us8">Contact us</div>
              </div>
            </div>
            <div className="div-no-highlight2">
              <div className="legal-content">
                <div className="div-brand-links2">
                  <img className="svg-icon12" alt="" src="/svg-6.svg" />
                  <img className="svg-icon13" alt="" src="/svg-7.svg" />
                  <img className="svg-icon14" alt="" src="/svg-8.svg" />
                </div>
                <div className="list12">
                  <div className="terms-conditions2">{`Terms & conditions`}</div>
                  <div className="policy">
                    <div className="promotions2">Promotions</div>
                  </div>
                  <div className="policy1">
                    <div className="privacy-policy2">Privacy policy</div>
                  </div>
                </div>
                <div className="div-ways-to-pay2">
                  <img className="image-icon10" alt="" src="/image@2x.png" />
                  <img className="image-icon11" alt="" src="/image-13@2x.png" />
                  <img className="image-icon12" alt="" src="/image-23@2x.png" />
                  <img className="image-icon13" alt="" src="/image-33@2x.png" />
                  <img className="image-icon14" alt="" src="/image-43@2x.png" />
                </div>
                <div className="paragraph3">
                  <div className="powered-by-motivates2">{`© Powered by LinklyGifts Inc. Ltd, LinklyGifts Inc. Ltd, 3 Bath `}</div>
                  <div className="address1">
                    <div className="place-london-ec2a2">
                      Place, London, EC2A 3DR.  All rights reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
