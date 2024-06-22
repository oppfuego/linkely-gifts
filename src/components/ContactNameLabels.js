import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ContactNameLabels.css";

const ContactNameLabels = ({
  className = "",
  contactInformation,
  formLabelPlaceholder,
  propDisplay,
  propMinWidth,
  propWidth,
  propColor,
}) => {
  const contactInformationStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const formLabelStyle = useMemo(() => {
    return {
      width: propWidth,
      color: propColor,
    };
  }, [propWidth, propColor]);

  return (
    <div className={`contact-name-labels ${className}`}>
      <div className="contact-information2" style={contactInformationStyle}>
        {contactInformation}
      </div>
      <div className="form-field">
        <input
          className="form-label"
          placeholder={formLabelPlaceholder}
          type="text"
          style={formLabelStyle}
        />
        <img className="icon" alt="" src="/icon.svg" />
      </div>
    </div>
  );
};

ContactNameLabels.propTypes = {
  className: PropTypes.string,
  contactInformation: PropTypes.string,
  formLabelPlaceholder: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propColor: PropTypes.any,
};

export default ContactNameLabels;
