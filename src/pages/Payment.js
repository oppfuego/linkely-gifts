import FrameComponent5 from "../components/FrameComponent5";
import ContactNameField from "../components/ContactNameField";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-1920">
      <div className="payment-1920-inner">
        <FrameComponent5 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <ContactNameField />
      </div>
    </div>
  );
};

export default Payment;
