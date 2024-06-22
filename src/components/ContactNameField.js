import ContactNameLabels from "./ContactNameLabels";
import PropTypes from "prop-types";
import "./ContactNameField.css";

const ContactNameField = ({ className = "" }) => {
  return (
    <div className={`contact-name-field ${className}`}>
      <ContactNameLabels
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-number-sub-fields">
            <img
              className="card-number-sub-field"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-number-sub-field1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-number-sub-field2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="m-m-y-y-field">
          <div className="form-field2">
            <input className="mmyy" placeholder="MM/YY" type="text" />
            <img className="icon2" alt="" src="/icon.svg" />
          </div>
          <div className="form-field3">
            <input className="mmyy1" placeholder="MM/YY" type="text" />
            <img className="icon3" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
      <ContactNameLabels
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
        propDisplay="inline-block"
        propMinWidth="124px"
        propWidth="109px"
        propColor="#d9d9d9"
      />
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field4">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon4" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="frame-parent7">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-name-field-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <button className="button10">
        <img className="tag-icon4" alt="" src="/tag-icon1.svg" />
        <div className="button11">Pay Now</div>
        <img className="tag-icon5" alt="" src="/tag-icon1.svg" />
      </button>
    </div>
  );
};

ContactNameField.propTypes = {
  className: PropTypes.string,
};

export default ContactNameField;
