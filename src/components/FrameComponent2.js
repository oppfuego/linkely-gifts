import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <header className={`frame-parent5 ${className}`}>
      <div className="frame-parent6">
        <div className="frame-wrapper4">
          <div className="linkely-container">
            <a className="linkely2">Linkely</a>
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
            <a className="gifts2">Gifts</a>
          </div>
        </div>
        <div className="item-group">
          <Button
            className="item3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#f13544",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#f13544" },
              height: 55,
            }}
          >
            Buy Gift Cards
          </Button>
          <div className="item4">
            <div className="redeem-gift-cards1">Redeem Gift Cards</div>
          </div>
          <div className="item5">
            <div className="for-business2">For Business</div>
          </div>
        </div>
      </div>
      <div className="list-group">
        <div className="list4">
          <div className="info-items">
            <div className="item-where1">Where to spend</div>
            <div className="item-our1">Our gift cards</div>
            <div className="item-faqs1">FAQs</div>
            <div className="item-contact1">Contact us</div>
          </div>
        </div>
        <div className="sign-in-options-wrapper">
          <div className="sign-in-options">
            <div className="symbol-container">
              <h3 className="symbol3"></h3>
            </div>
            <div className="button18">
              <div className="spend-your-gift1">Spend your gift card</div>
            </div>
            <button className="button19">
              <div className="sign-in1">Sign in</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
