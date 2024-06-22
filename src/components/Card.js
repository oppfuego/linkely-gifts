import { useMemo } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({
  className = "",
  rectangle1,
  rectangle3,
  heading3ThankYou,
  unlockEndlessPossibilitie,
  viewAllAppleCards,
  propLeft,
  propTop,
  propDisplay,
  propMinWidth,
}) => {
  const cardStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const heading3Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`card1 ${className}`} style={cardStyle}>
      <div className="card-1-2">
        <img className="card-1-2-child" alt="" src={rectangle1} />
        <img className="card-1-2-item" alt="" src={rectangle3} />
      </div>
      <div className="card-child">
        <div className="frame-parent2">
          <div className="heading-3-thank-you-group">
            <h1 className="heading-32" style={heading3Style}>
              {heading3ThankYou}
            </h1>
            <div className="unlock-endless-possibilities">
              {unlockEndlessPossibilitie}
            </div>
          </div>
          <div className="view-all-apple-cards-parent">
            <div className="view-all-apple">{viewAllAppleCards}</div>
            <Button
              className="button15"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#f13544",
                borderRadius: "4px",
                "&:hover": { background: "#f13544" },
                width: 80,
                height: 40,
              }}
            >
              Buy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  rectangle1: PropTypes.string,
  rectangle3: PropTypes.string,
  heading3ThankYou: PropTypes.string,
  unlockEndlessPossibilitie: PropTypes.string,
  viewAllAppleCards: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Card;
