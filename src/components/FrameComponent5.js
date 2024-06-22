import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`hero-wrapper ${className}`}>
        <div className="hero">
            <div className="rebranded-hero-artworkjpg">
                <div className="hero-container">
                    <div className="double-nested-hero-container">
                        <div className="looking-for-gift">
                            Looking for gift cards? We have you covered
                        </div>
                        <div className="button-container">
                            <div className="nested-button-container">
                                <h1 className="buy-the-gift">
                                    Buy the gift card of your choice from LinklyGifts!
                                </h1>
                                <Button
                                    className="button9"
                                    disableElevation
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        color: "#fff",
                                        fontSize: "16",
                                        background: "#f13544",
                                        borderRadius: "4px",
                                        "&:hover": {background: "#f13544"},
                                        width: 141,
                                        height: 54,
                                    }}
                                >
                                    BUY NOW
                                </Button>
                            </div>
                            <div className="button-frame">
                                <div className="button10">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-parent">
                    <div className="button12"/>
                    <div className="button13"/>
                    <div className="button14"/>
                </div>

            </div>

        </div>
    </section>
  );
};

FrameComponent5.propTypes = {
    className: PropTypes.string,
};

export default FrameComponent5;
