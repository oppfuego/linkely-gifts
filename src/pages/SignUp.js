import FrameComponent4 from "../components/FrameComponent4";
import SignIn1 from "../components/SignIn1";
import Footer2 from "../components/Footer2";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-1920">
      <FrameComponent4 />
      <section className="login-form-parent">
        <div className="login-form">
          <SignIn1 />
        </div>
        <img
          className="background-icon"
          loading="lazy"
          alt=""
          src="/rectangle-491@2x.png"
        />
      </section>
      <Footer2 />
    </div>
  );
};

export default SignUp;
