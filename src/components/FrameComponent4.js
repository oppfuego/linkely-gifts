import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-parent3 ${className}`}>
      <div className="frame-wrapper2">
        <div className="frame-parent4">
          <div className="what-customers-are-saying-wrapper">
            <h3 className="what-customers-are">What customers are saying</h3>
          </div>
          <img
            className="image-p-3-icon"
            loading="lazy"
            alt=""
            src="/image-p3@2x.png"
          />
          <div className="choose-a-card-that-suits-their-wrapper">
            <div className="choose-a-card1">
              Choose a card that suits their lifestyle
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="testimonial-quotes-parent">
              <div className="testimonial-quotes">
                <div className="nested-testimonial-quotes">
                  <img className="svg-icon" alt="" src="/svg.svg" />
                </div>
                <div className="easy-to-use">Easy to use and great!</div>
              </div>
              <div className="testimonial-quotes1">
                <div className="svg-wrapper">
                  <img className="svg-icon1" alt="" src="/svg.svg" />
                </div>
                <div className="i-dont-have">
                  I don’t have to get physical cards anymore
                </div>
              </div>
              <div className="testimonial-quotes2">
                <div className="svg-container">
                  <img className="svg-icon2" alt="" src="/svg.svg" />
                </div>
                <div className="i-dont-know">
                  I don’t know gift cards were this useful!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post-options">
        <div className="post-options-container">
          <h3 className="post-it-email">Post it! Email it! Print it!</h3>
        </div>
        <img className="image-p-3-icon1" alt="" src="/image-p3-1@2x.png" />
        <div className="post-options-description">
          <div className="choose-a-card2">
            Choose a card that suits their lifestyle
          </div>
        </div>
        <div className="gift-card-types">
          <div className="gift-card-types-container">
            <div className="gift-card-types-list">
              <div className="gift-card-type">
                <img className="svg-icon3" alt="" src="/svg.svg" />
              </div>
              <div className="a-beautiful-gift">
                A beautiful Gift Card in the post
              </div>
            </div>
            <div className="gift-card-types-list1">
              <div className="svg-frame">
                <img className="svg-icon4" alt="" src="/svg.svg" />
              </div>
              <div className="a-digital-egift">
                A digital eGift Card in their inbox
              </div>
            </div>
            <div className="gift-card-types-list2">
              <div className="svg-wrapper1">
                <img className="svg-icon5" alt="" src="/svg.svg" />
              </div>
              <div className="a-voucher-you">
                A voucher you print at home and put in a gift box.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="personalization">
        <div className="personalization-container">
          <h3 className="personalise-your-gift">Personalise your gift</h3>
          <div className="personalization-content">
            <img className="image-p-3-icon2" alt="" src="/image-p3-2@2x.png" />
            <div className="paragraph">
              <div className="add-a-personal">{`Add a personal message to our designs and even upload your own photo `}</div>
            </div>
          </div>
          <Button
            className="button16"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#62b0ff",
              borderRadius: "4px",
              "&:hover": { background: "#62b0ff" },
              height: 38,
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
