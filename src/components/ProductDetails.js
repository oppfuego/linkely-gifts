import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ProductDetails.css";

const ProductDetails = ({ className = "" }) => {
  return (
    <section className={`product-details1 ${className}`}>
      <div className="product-container">
        <div className="product1">
          <div className="product-name">
            <div className="youve-selected-ultimate">
              <span>You've selected  |</span>
              <span className="ultimate1">Ultimate</span>
            </div>
            <div className="product-features">
              <div className="feature-icons">
                <img
                  className="icon-labels"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
                <div className="spend-at-over"> Spend at over 250+ brands</div>
              </div>
              <div className="feature-icons1">
                <img className="vector-icon" alt="" src="/vector-1.svg" />
                <div className="available-as-physical">
                  {" "}
                  Available as physical, digital or print at home
                </div>
              </div>
              <div className="feature-icons2">
                <img className="vector-icon1" alt="" src="/vector-2.svg" />
                <div className="next-day-delivery">
                  {" "}
                  Next day delivery available
                </div>
              </div>
            </div>
            <div className="product-info">
              <div className="info-icons">
                <div className="product-description">Product description</div>
                <img className="svg-icon15" alt="" src="/svg1.svg" />
              </div>
              <div className="info-icons1">
                <div className="delivery-options">Delivery Options</div>
                <img className="svg-icon16" alt="" src="/svg1.svg" />
              </div>
            </div>
          </div>
          <div className="amount-selection">
            <div className="amount-input">
              <div className="div-panel-heading">
                <div className="amount">Amount</div>
                <div className="div27">£20</div>
              </div>
              <div className="gift-amount">
                <div className="amount-question">
                  <div className="how-much-do">
                    How much do you want to gift?
                  </div>
                  <div className="amount-options">
                    <div className="div-voucher-selector">
                      <div className="div28">£10</div>
                    </div>
                    <div className="div-voucher-selector1">
                      <div className="div29">£20</div>
                    </div>
                    <div className="div-voucher-selector2">
                      <div className="div30">£30</div>
                    </div>
                    <div className="div-voucher-selector3">
                      <div className="div31">£40</div>
                    </div>
                    <div className="div-voucher-selector4">
                      <div className="div32">£50</div>
                    </div>
                    <div className="div-voucher-selector5">
                      <div className="div33">£75</div>
                    </div>
                    <Button
                      className="div-voucher-selector6"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#1c1c1c",
                        fontSize: "16",
                        background: "#fff",
                        border: "#5a5a5a solid 1px",
                        borderRadius: "5px",
                        "&:hover": { background: "#fff" },
                        width: 98.7,
                        height: 45,
                      }}
                    >
                      £100
                    </Button>
                    <div className="div-voucher-selector7">
                      <div className="div34">£150</div>
                    </div>
                    <Button
                      className="div-voucher-selector8"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#1c1c1c",
                        fontSize: "16",
                        background: "#fff",
                        border: "#5a5a5a solid 1px",
                        borderRadius: "5px",
                        "&:hover": { background: "#fff" },
                        width: 98.7,
                        height: 45,
                      }}
                    >
                      £200
                    </Button>
                    <Button
                      className="div-voucher-selector9"
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#1c1c1c",
                        fontSize: "16",
                        background: "#fff",
                        border: "#5a5a5a solid 1px",
                        borderRadius: "5px",
                        "&:hover": { background: "#fff" },
                        width: 98.7,
                        height: 45,
                      }}
                    >
                      £300
                    </Button>
                  </div>
                </div>
              </div>
              <div className="custom-amount">
                <div className="custom-input">
                  <div className="custom-label">
                    <div className="other-amount">Other amount</div>
                  </div>
                  <Button
                    className="div-amount-dropdown-menu"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#1c1c1c",
                      fontSize: "16",
                      background: "#fff",
                      border: "#5a5a5a solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                    }}
                  >
                    Select
                  </Button>
                </div>
              </div>
              <div className="divider-ng-tns-c103-1" />
              <div className="quantity1">
                <div className="quantity-controls">
                  <div className="control-items">
                    <div className="quantity2">Quantity</div>
                  </div>
                  <img
                    className="div-round-btn-icon"
                    loading="lazy"
                    alt=""
                    src="/div-roundbtn.svg"
                  />
                  <div className="control-items1">
                    <div className="div35">1</div>
                  </div>
                  <img
                    className="div-round-btn-icon1"
                    alt=""
                    src="/div-roundbtn-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="delivery">
              <div className="delivery-options1">
                <div className="div-panel">
                  <div className="div-panel-heading1">
                    <div className="edit">EDIT</div>
                    <div className="delivery-type">Delivery type</div>
                    <div className="digital">Digital</div>
                  </div>
                </div>
                <div className="div-panel1">
                  <div className="div-panel-heading2">
                    <div className="edit1">EDIT</div>
                    <div className="personalisation">Personalisation</div>
                  </div>
                </div>
              </div>
              <Button
                className="button26"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#f13544",
                  borderRadius: "4px",
                  "&:hover": { background: "#f13544" },
                  height: 38,
                }}
              >
                Buy Now
              </Button>
              <div className="of-the-biggest1">{`250+ of the biggest and best loved UK brands across food, home, fashion and entertainment. `}</div>
            </div>
          </div>
        </div>
        <div className="related-brands">
          <div className="brands-container">
            <div className="related-brands1">Related brands</div>
            <div className="div-brands1">
              <div className="div-brand136">
                <img
                  className="image-ng-lazyloaded-icon138"
                  loading="lazy"
                  alt=""
                  src="/image-nglazyloaded2@2x.png"
                />
                <div className="div36">
                  <div className="marks-spencer1">{`Marks & Spencer`}</div>
                </div>
              </div>
              <div className="div-brand137">
                <img
                  className="image-ng-lazyloaded-icon139"
                  alt=""
                  src="/image-nglazyloaded-140@2x.png"
                />
                <div className="div37">
                  <div className="champneys2">Champneys</div>
                </div>
              </div>
              <div className="div-brand138">
                <img
                  className="image-ng-lazyloaded-icon140"
                  alt=""
                  src="/image-nglazyloaded-210@2x.png"
                />
                <div className="div38">
                  <div className="crocus2">Crocus</div>
                </div>
              </div>
              <div className="div-brand139">
                <img
                  className="image-ng-lazyloaded-icon141"
                  alt=""
                  src="/image-nglazyloaded-310@2x.png"
                />
                <div className="div39">
                  <div className="golfdirect2">GolfDirect</div>
                </div>
              </div>
              <div className="div-brand140">
                <img
                  className="image-ng-lazyloaded-icon142"
                  alt=""
                  src="/image-nglazyloaded-410@2x.png"
                />
                <div className="div40">
                  <div className="frankie-bennys2">{`Frankie & Benny’s (The Restaurant Card)`}</div>
                </div>
              </div>
              <div className="div-brand141">
                <img
                  className="image-ng-lazyloaded-icon143"
                  alt=""
                  src="/image-nglazyloaded-510@2x.png"
                />
                <div className="div41">
                  <div className="ernest-jones2">Ernest Jones</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductDetails.propTypes = {
  className: PropTypes.string,
};

export default ProductDetails;
