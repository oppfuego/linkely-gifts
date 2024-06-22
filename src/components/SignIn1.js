import PropTypes from "prop-types";
import "./SignIn1.css";

const SignIn1 = ({ className = "" }) => {
  return (
    <div className={`sign-in6 ${className}`}>
      <div className="sign-up-parent">
        <h1 className="sign-up">Sign up</h1>
        <div className="sign-up-to">Sign up to get rewards, and many more</div>
      </div>
      <form className="input-fields2">
        <div className="name-fields">
          <div className="name-address-username">
            <div className="your-name">Your Name</div>
          </div>
          <div className="email-fields">
            <input className="email" placeholder="Email" type="text" />
          </div>
        </div>
        <div className="name-fields1">
          <div className="address-wrapper">
            <div className="address2">Address</div>
          </div>
          <div className="country-parent">
            <div className="country">Country</div>
            <img className="extra-fields-icon" alt="" src="/extra-fields.svg" />
          </div>
        </div>
        <div className="name-fields2">
          <div className="username-parent">
            <div className="username1">Username</div>
            <img className="spacer-icon" alt="" src="/input-boxes.svg" />
          </div>
          <div className="password-parent">
            <div className="password1">Password</div>
            <img className="frame-icon" alt="" src="/frame-153-1.svg" />
          </div>
        </div>
        <button className="button8">
          <img className="tag-icon2" alt="" src="/tag-icon1.svg" />
          <div className="button9">Sign Up</div>
          <img className="tag-icon3" alt="" src="/tag-icon1.svg" />
        </button>
      </form>
      <div className="or-sign-up">or, sign up with</div>
      <div className="social-buttons">
        <img
          className="social-options-icon"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-options-icon1"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className="social-options-icon2"
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn1.propTypes = {
  className: PropTypes.string,
};

export default SignIn1;
