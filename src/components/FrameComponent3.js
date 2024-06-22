import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`instance-group ${className}`}>

      <div className="frame-wrapper7">
        <div className="frame-parent10">
          <div className="checkout-wrapper">
            <h1 className="checkout3">Checkout</h1>
          </div>
          <div className="view-or-edit1">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
