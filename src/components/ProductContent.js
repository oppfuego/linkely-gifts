import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ProductContent.css";

const ProductContent = ({
  className = "",
  shoppingSpreeGiftCard,
  propLineHeight,
}) => {
  const shoppingSpreeGiftStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={`product-content ${className}`}>
      <div className="product-content-child" />
      <div className="product-card">
        <img className="card-image-icon" alt="" src="/rectangle-50@2x.png" />
        <div className="product-title">
          <div className="shopping-spree-gift" style={shoppingSpreeGiftStyle}>
            {shoppingSpreeGiftCard}
          </div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="credit-symbol-parent">
          <div className="credit-symbol">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="quantity-control">
          <div className="quantity-buttons">
            <div className="plus-button">
              <img className="icon-plus" alt="" src="/iconplus.svg" />
            </div>
            <div className="button-spacer">3</div>
            <input className="minus-button" type="checkbox" />
          </div>
          <FormControl
            className="time-tracking"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#5a5a5a",
              borderRadius: "8px",
              width: "52.6829268292683%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="success" />
            <Select
              color="success"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/frame-1000002972-1.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="div23">$120.00</div>
      </div>
    </div>
  );
};

ProductContent.propTypes = {
  className: PropTypes.string,
  shoppingSpreeGiftCard: PropTypes.string,

  /** Style props */
  propLineHeight: PropTypes.any,
};

export default ProductContent;
