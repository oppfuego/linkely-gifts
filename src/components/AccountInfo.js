import PropTypes from "prop-types";
import "./AccountInfo.css";

const AccountInfo = ({ className = "" }) => {
  return (
    <section className={`account-info ${className}`}>
      <div className="account-details">
        <div className="account-summary">
          <h1 className="user-account">User Account</h1>
          <div className="header">
            <div className="your-active-downloads">Your Active Downloads</div>
          </div>
          <div className="cart-row-1">
            <div className="product">
              <img
                className="card-image-icon"
                loading="lazy"
                alt=""
                src="/rectangle-50@2x.png"
              />
              <div className="title">
                <div className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
            </div>
            <div className="resource-labels">
              <div className="resource-names">$120.00</div>
              <div className="credits">12 Credits</div>
            </div>
            <div className="resource-labels1">
              <div className="up-time">Up Time</div>
              <div className="hrs">120 Hrs</div>
            </div>
            <div className="renewal-info">
              <div className="renewal-date">
                <div className="next-renewal">Next Renewal</div>
                <div className="april-2024">24 April, 2024</div>
              </div>
              <div className="links">
                <div className="link">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link1">
                  <img
                    className="icons-block1"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator" />
        </div>
        <div className="contact-info">
          <div className="checkout-details">
            <div className="header1">
              <div className="user-details">User Details</div>
            </div>
            <div className="contact-fields">
              <div className="name">Name</div>
              <div className="darnell-roob">Darnell Roob</div>
            </div>
            <div className="contact-fields1">
              <div className="email-address">Email Address</div>
              <div className="darnellroobhotmailcom">
                Darnell.Roob@hotmail.com
              </div>
            </div>
            <div className="contact-fields2">
              <div className="plan">Plan</div>
              <div className="basic">Basic</div>
            </div>
            <div className="contact-fields3">
              <div className="expiry-date">Expiry Date</div>
              <div className="april-20241">24 April, 2024</div>
            </div>
            <div className="contact-fields4">
              <div className="auto-renewal">Auto Renewal</div>
              <div className="on">On</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AccountInfo.propTypes = {
  className: PropTypes.string,
};

export default AccountInfo;
