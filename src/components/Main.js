import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <div className={`main1 ${className}`}>
      <div className="navigation-parent">
        <header className="navigation">
          <div className="items">
            <div className="linkely-parent2">
              <div className="linkely5">Linkely</div>
              <img className="frame-child3" alt="" src="/group-1.svg" />
              <a className="gifts5">Gifts</a>
            </div>
          </div>
          <nav className="buy-redeem-business">
            <Button
              className="item9"
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
            <div className="item10">
              <div className="redeem-gift-cards3">Redeem Gift Cards</div>
            </div>
            <div className="item11">
              <div className="for-business5">For Business</div>
            </div>
          </nav>
        </header>
        <div className="spend">
          <div className="list9">
            <div className="links">
              <div className="item-where3">Where to spend</div>
              <div className="item-our3">Our gift cards</div>
              <div className="item-faqs3">FAQs</div>
              <div className="item-contact3">Contact us</div>
            </div>
          </div>
          <div className="buttons">
            <div className="actions">
              <div className="icon1">
                <h1 className="symbol5"></h1>
              </div>
              <div className="button24">
                <div className="spend-your-gift3">Spend your gift card</div>
              </div>
              <button className="button25">
                <div className="sign-in3">Sign in</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
