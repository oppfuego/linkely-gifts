import FrameComponent6 from "../components/FrameComponent6";
import Footer from "../components/Footer";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in-1920">
      <FrameComponent6 />
      <section className="sign-in-modal-parent">
        <div className="sign-in-modal">
          <div className="sign-in">
            <div className="sign-in-container">
              <div className="sign-in-header">
                <h1 className="sign-in1">Sign in</h1>
                <div className="sign-in-to">
                  Sign in to your account to see products catered to you
                </div>
              </div>
              <form className="credentials">
                <div className="input-fields">
                  <div className="username">Username</div>
                  <img
                    className="input-boxes-icon"
                    alt=""
                    src="/input-boxes.svg"
                  />
                </div>
                <div className="input-fields1">
                  <div className="password">Password</div>
                  <img
                    className="input-fields-child"
                    alt=""
                    src="/frame-153-1.svg"
                  />
                </div>
                <button className="button">
                  <img className="tag-icon" alt="" src="/tag-icon.svg" />
                  <div className="button1">Sign In</div>
                  <img className="tag-icon1" alt="" src="/tag-icon.svg" />
                </button>
              </form>
              <div className="or-sign-in">or, sign in with</div>
              <div className="social-sign-in">
                <img
                  className="social-buttons-icon"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-buttons-icon2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="background-shape-icon"
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
