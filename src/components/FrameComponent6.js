import {useMemo} from "react";
import {Button} from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent6.css";
import {Link} from 'react-router-dom';
import { PiBasketFill } from "react-icons/pi";


const FrameComponent6 = ({className = "", redeemGiftCardsTextDecoration}) => {
    const linkelyStyle = useMemo(() => {
        return {
            textDecoration: redeemGiftCardsTextDecoration,
        };
    }, [redeemGiftCardsTextDecoration]);

    return (
        <header className={`frame-header ${className}`}>
            <div className="frame-div">
                <div className="frame-wrapper">
                    <Link to="/" className="linkely-parent">
                        <a className="linkely" style={linkelyStyle}>
                            Linkely
                        </a>
                        <img
                            className="frame-item"
                            loading="lazy"
                            alt=""
                            src="/group-1.svg"
                        />
                        <a className="gifts">Gifts</a>
                    </Link>
                </div>
                <div className="item-parent">
                    <Button
                        className="item"
                        disableElevation
                        variant="contained"
                        sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "16",
                            background: "#f13544",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": {background: "#f13544"},
                            height: 55,
                        }}
                    >
                        Buy Gift Cards
                    </Button>
                    <div className="item1">
                        <div className="redeem-gift-cards">Redeem Gift Cards</div>
                    </div>
                    <div className="item2">
                        <div className="for-business">For Business</div>
                    </div>
                </div>
            </div>
            <div className="list-parent">
                <div className="list">
                    <div className="item-where-to-spend-parent">
                        <Link to="/products" className="item-where">
                            Where to spend
                        </Link>
                        <Link to="/product-detail" className="item-our">
                            Our gift cards
                        </Link>
                        <div className="item-faqs">FAQs</div>
                        <div className="item-contact">Contact us</div>
                    </div>
                </div>
                <div className="frame-wrapper1">
                    <div className="frame-parent1">
                        <div className="symbol-wrapper">
                            <h3 className="symbol"><PiBasketFill/></h3>
                        </div>
                        <div className="button7">
                            <Link to="/cart-details" className="spend-your-gift">
                                Spend your gift card
                            </Link>
                        </div>
                        <button className="button8">
                            <Link to="/sign-in" className="sign-in">
                                Sign In
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

FrameComponent6.propTypes = {
    className: PropTypes.string,

    /** Style props */
    redeemGiftCardsTextDecoration: PropTypes.any,
};

export default FrameComponent6;
