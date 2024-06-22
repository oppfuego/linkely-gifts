import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
} from "@mui/material";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent6 from "../components/FrameComponent6";

import Footer from "../components/Footer";
import "./Checkout.css";

const Checkout = () => {
    return (
        <>
            <FrameComponent6/>
            <div className="checkout-1920">
                <FrameComponent3/>
                <section className="checkout-1920-inner">
                    <div className="frame-container">
                        <form className="frame-form">
                            <div className="checkout-parent">
                                <h1 className="checkout">Checkout</h1>
                                <div className="header">
                                    <div className="billing-details">Billing Details</div>
                                </div>
                                <div className="form-field-block">
                                    <div className="row-1">
                                        <TextField
                                            className="block-1"
                                            placeholder="First Name"
                                            variant="outlined"
                                            sx={{
                                                "& fieldset": {borderColor: "#b6b6b6"},
                                                "& .MuiInputBase-root": {
                                                    height: "50px",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "5px",
                                                },
                                                "& .MuiInputBase-input": {color: "#000"},
                                            }}
                                        />
                                        <TextField
                                            className="block-2"
                                            placeholder="Last Name"
                                            variant="outlined"
                                            sx={{
                                                "& fieldset": {borderColor: "#b6b6b6"},
                                                "& .MuiInputBase-root": {
                                                    height: "50px",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "5px",
                                                },
                                                "& .MuiInputBase-input": {color: "#000"},
                                            }}
                                        />
                                    </div>
                                    <div className="row-2">
                                        <TextField
                                            className="block-11"
                                            placeholder="Company Name"
                                            variant="outlined"
                                            sx={{
                                                "& fieldset": {borderColor: "#b6b6b6"},
                                                "& .MuiInputBase-root": {
                                                    height: "50px",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "5px",
                                                },
                                                "& .MuiInputBase-input": {color: "#000"},
                                            }}
                                        />
                                        <div className="block-21">
                                            <div className="country">Country</div>
                                            <img className="icon" alt="" src="/icon.svg"/>
                                        </div>
                                    </div>
                                    <TextField
                                        className="row-3"
                                        placeholder="Street Address"
                                        variant="outlined"
                                        sx={{
                                            "& fieldset": {borderColor: "#b6b6b6"},
                                            "& .MuiInputBase-root": {
                                                height: "50px",
                                                backgroundColor: "#fff",
                                                borderRadius: "5px",
                                            },
                                            "& .MuiInputBase-input": {color: "#000"},
                                        }}
                                    />
                                    <TextField
                                        className="block-22"
                                        placeholder="Apartment / Suite / Unit / etc. (Optional)"
                                        variant="outlined"
                                        sx={{
                                            "& fieldset": {borderColor: "#b6b6b6"},
                                            "& .MuiInputBase-root": {
                                                height: "50px",
                                                backgroundColor: "#fff",
                                                borderRadius: "5px",
                                            },
                                            "& .MuiInputBase-input": {color: "#000"},
                                        }}
                                    />
                                    <TextField
                                        className="row-4"
                                        placeholder="Town / City"
                                        variant="outlined"
                                        sx={{
                                            "& fieldset": {borderColor: "#b6b6b6"},
                                            "& .MuiInputBase-root": {
                                                height: "50px",
                                                backgroundColor: "#fff",
                                                borderRadius: "5px",
                                            },
                                            "& .MuiInputBase-input": {color: "#000"},
                                        }}
                                    />
                                    <TextField
                                        className="block-23"
                                        placeholder="Email Address"
                                        variant="outlined"
                                        sx={{
                                            "& fieldset": {borderColor: "#b6b6b6"},
                                            "& .MuiInputBase-root": {
                                                height: "50px",
                                                backgroundColor: "#fff",
                                                borderRadius: "5px",
                                            },
                                            "& .MuiInputBase-input": {color: "#000"},
                                        }}
                                    />
                                    <div className="row-5">
                                        <TextField
                                            className="block-12"
                                            placeholder="ZIP"
                                            variant="outlined"
                                            sx={{
                                                "& fieldset": {borderColor: "#b6b6b6"},
                                                "& .MuiInputBase-root": {
                                                    height: "50px",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "5px",
                                                },
                                                "& .MuiInputBase-input": {color: "#000"},
                                            }}
                                        />
                                        <TextField
                                            className="block-24"
                                            placeholder="Phone"
                                            variant="outlined"
                                            sx={{
                                                "& fieldset": {borderColor: "#b6b6b6"},
                                                "& .MuiInputBase-root": {
                                                    height: "50px",
                                                    backgroundColor: "#fff",
                                                    borderRadius: "5px",
                                                },
                                                "& .MuiInputBase-input": {color: "#000"},
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="frame-child"/>
                                <div className="header-block">
                                    <Button
                                        className="button4"
                                        disableElevation
                                        variant="outlined"
                                        sx={{
                                            textTransform: "none",
                                            color: "#5a5a5a",
                                            fontSize: "16",
                                            borderColor: "#b6b6b6",
                                            borderRadius: "4px",
                                            "&:hover": {borderColor: "#b6b6b6"},
                                            width: 100,
                                            height: 54,
                                        }}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        className="button5"
                                        disableElevation
                                        variant="contained"
                                        sx={{
                                            textTransform: "none",
                                            color: "#fff",
                                            fontSize: "16",
                                            background: "#401717",
                                            borderRadius: "4px",
                                            "&:hover": {background: "#401717"},
                                            width: 137,
                                            height: 54,
                                        }}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                            <div className="checkout-details-parent">
                                <div className="checkout-details">
                                    <div className="header1">
                                        <div className="checkout-details1">Checkout Details</div>
                                    </div>
                                    <div className="cart-subtotal-parent">
                                        <div className="cart-subtotal">Cart Subtotal</div>
                                        <div className="subtotal-values">$360.00</div>
                                    </div>
                                    <div className="shipping-handling-parent">
                                        <div className="shipping-handling">{`Shipping & Handling`}</div>
                                        <div className="div">$0.00</div>
                                    </div>
                                    <div className="other-taxes-parent">
                                        <div className="other-taxes">Other Taxes</div>
                                        <div className="div1">$0.00</div>
                                    </div>
                                    <div className="checkout-details-child"/>
                                    <div className="grand-total-parent">
                                        <div className="grand-total">Grand Total</div>
                                        <div className="div2">$360.00</div>
                                    </div>
                                </div>
                                <div className="transfer-options">
                                    <div className="header2">
                                        <div className="transfer-options1">Transfer Options</div>
                                    </div>
                                    <div className="checkout-details2">
                                        <div className="logos-block">
                                            <div className="block-13">
                                                <div className="logo-block">
                                                    <img
                                                        className="image-1-icon"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/image-12@2x.png"
                                                    />
                                                </div>
                                                <div className="bank-transfer">
                                                    <p className="bank">Bank</p>
                                                    <p className="transfer">Transfer</p>
                                                </div>
                                            </div>
                                            <div className="block-25">
                                                <div className="logo-block1">
                                                    <img
                                                        className="image-2-icon"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/image-22@2x.png"
                                                    />
                                                </div>
                                                <div className="google-pay">
                                                    <p className="google">Google</p>
                                                    <p className="pay">Pay</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="block-3-parent">
                                            <div className="block-3">
                                                <div className="logo-block2">
                                                    <img
                                                        className="image-3-icon"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/image-32@2x.png"
                                                    />
                                                </div>
                                                <div className="apple-pay">
                                                    <p className="apple">Apple</p>
                                                    <p className="pay1">Pay</p>
                                                </div>
                                            </div>
                                            <div className="block-4">
                                                <div className="logo-block3">
                                                    <img
                                                        className="image-4-icon"
                                                        loading="lazy"
                                                        alt=""
                                                        src="/image-42@2x.png"
                                                    />
                                                </div>
                                                <div className="paypal">PayPal</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="checkout1">
                            <div className="header3">
                                <div className="checkout2">Checkout</div>
                            </div>
                            <div className="checkout-details3">
                                <div className="your-personal-data">
                                    Your Personal data will be used to process your order, support
                                    your experience throughout this website, and for other purposes
                                    described in our product
                                </div>
                                <Button
                                    className="button6"
                                    disableElevation
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        color: "#fff",
                                        fontSize: "16",
                                        background: "#401717",
                                        borderRadius: "4px",
                                        "&:hover": {background: "#401717"},
                                        height: 54,
                                    }}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>

        </>
    );
};

export default Checkout;
