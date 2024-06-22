import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./FrameComponent1.css";
import FrameComponent6 from "./FrameComponent6";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`instance-parent ${className}`}>
      <FrameComponent6/>
      <div className="cart-details-wrapper">
        <div className="cart-details">
          <div className="cart-header">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
