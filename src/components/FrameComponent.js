import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ProductContent from "./ProductContent";
import PropTypes from "prop-types";
import "./FrameComponent.css";
import {Link} from "react-router-dom";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`cart-details-1920-inner ${className}`}>
      <div className="product-details-parent">
        <div className="product-details">
          <div className="product-table">
            <div className="header4">
              <div className="header-child" />
              <div className="table-columns">
                <div className="product">Product</div>
              </div>
              <div className="table-columns1">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <div className="discount-image-parent">
              <img
                className="discount-image-icon"
                loading="lazy"
                alt=""
                src="/rectangle-50@2x.png"
              />
              <div className="discount-details">
                <div className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="discount-control">
                <div className="discount-credits">
                  <div className="discount-credit-label">$120.00</div>
                  <div className="credits1">12 Credits</div>
                </div>
                <div className="discount-quantity">
                  <div className="discount-buttons">
                    <div className="quantity-icons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className="button-spacer1">3</div>
                    <input className="quantity-icons1" type="checkbox" />
                  </div>
                  <FormControl
                    className="discount-time"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#5a5a5a",
                      borderRadius: "8px",
                      width: "96.42857142857144%",
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
                          src="/frame-1000002972.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Hourly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className="table-spacer">$120.00</div>
            </div>
          </div>
          <ProductContent shoppingSpreeGiftCard="Shopping Spree Gift Card" />
          <ProductContent
            shoppingSpreeGiftCard="Travel GiftCard"
            propLineHeight="22px"
          />
          <div className="action-buttons">
            <div className="button-divider" />
            <div className="button-list">
              <Button
                className="button20"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 123,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button21"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#5a5a5a",
                  borderRadius: "4px",
                  "&:hover": { background: "#5a5a5a" },
                  width: 133,
                  height: 54,
                }}
              >
                <Link to="/checkout" className="linkely-parent">
                Checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="checkout-header">
            <div className="header5">
              <div className="checkout-details5">Checkout Details</div>
            </div>
          </div>
          <div className="checkout-summary">
            <div className="total-details">
              <div className="cart-subtotal1">Cart Subtotal</div>
              <div className="summary-spacer">$360.00</div>
            </div>
          </div>
          <div className="shipping-details">
            <div className="shipping-options">
              <div className="shipping-labels">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="other-taxes1">Other Taxes</div>
              </div>
              <div className="shipping-labels1">
                <div className="div24">$0.00</div>
                <div className="div25">$0.00</div>
              </div>
            </div>
          </div>
          <div className="checkout-divider">
            <div className="checkout-divider-child" />
          </div>
          <div className="checkout-summary1">
            <div className="grand-total-group">
              <div className="grand-total1">Grand Total</div>
              <div className="div26">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
