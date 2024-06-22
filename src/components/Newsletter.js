import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Newsletter.css";

const Newsletter = ({ className = "" }) => {
  return (
    <section className={`newsletter ${className}`}>
      <div className="newsletter-container">
        <h1 className="heading-5">Dont miss out!</h1>
      </div>
      <div className="newsletter-description">
        <div className="sign-up-now">Sign up now to get news and offers</div>
      </div>
      <div className="input">
        <Button
          className="button17"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#f13544",
            fontSize: "16",
            borderColor: "#f13544",
            borderRadius: "4px",
            "&:hover": { borderColor: "#f13544" },
            width: 140,
            height: 39,
          }}
        >
          Subscribe
        </Button>
      </div>
    </section>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
