import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./WhereToSpend.css";

const WhereToSpend = ({ className = "" }) => {
  return (
    <div className={`where-to-spend ${className}`}>
      <div className="frame-parent11">
        <div className="frame-wrapper8">
          <div className="frame-parent12">
            <div className="where-to-spend-wrapper">
              <h1 className="where-to-spend1">Where to spend</h1>
            </div>
            <div className="description">
              <h3 className="our-ultimate-birthday-container">
                <span>
                  <span>{`Our `}</span>
                  <span className="ultimate">Ultimate</span>
                  <span>{`, `}</span>
                  <span className="birthday">Birthday</span>
                  <span>{`, `}</span>
                  <span className="thank-you">Thank you</span>
                  <span>{` and `}</span>
                  <span className="congrats">Congrats</span>
                  <span>
                    {" "}
                    cards can be used for all 250+ brands shown below.
                  </span>
                </span>
              </h3>
              <div className="specialized-card">
                <h3 className="or-you-can-container">
                  <span>{`Or you can specialise with selected `}</span>
                  <span className="eat">Eat</span>
                  <span>{`, `}</span>
                  <span className="home">Home</span>
                  <span>{` or `}</span>
                  <span className="fashion-beauty">{`Fashion & Beauty`}</span>
                  <span> brands.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="div-filter">
          <div className="filter-options">
            <img className="input-filter-icon" alt="" src="/input-filter.svg" />
          </div>
          <div className="filter-options1">
            <div className="show-all">Show All</div>
          </div>
          <div className="filter-options2">
            <div className="input-filter" />
          </div>
          <div className="filter-options3">
            <div className="fashion-beauty1">{`Fashion & Beauty`}</div>
          </div>
          <div className="filter-options4">
            <div className="input-filter1" />
          </div>
          <div className="filter-options5">
            <div className="home1">Home</div>
          </div>
          <div className="filter-options6">
            <div className="input-filter2" />
          </div>
          <div className="filter-options7">
            <div className="eat1">Eat</div>
          </div>
          <TextField
            className="input-searchtext"
            placeholder="Search for a brand"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#f5f1f9" },
              "& .MuiInputBase-root": {
                height: "38px",
                backgroundColor: "#fff",
                fontSize: "13.2px",
              },
              "& .MuiInputBase-input": { color: "rgba(33, 37, 41, 0.5)" },
              width: "217px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

WhereToSpend.propTypes = {
  className: PropTypes.string,
};

export default WhereToSpend;
