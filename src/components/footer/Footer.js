import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../img/logo-linkly.svg";
import {ReactComponent as CorpLogo} from "../img/corp-logo.svg";

const Footer = () => {
    return (
        <div className="footer-container-wrapper">
            <div className="footer-container">
                <div className="footer-top-container">
                    <span>
                        <Logo className="footer-logo"/>
                    </span>
                    <span>
                        <CorpLogo className="footer-corp-logo"/>
                    </span>
                </div>
                <div className="footer-content-container">
                    <div className="footer-left-content">
                        <nav>
                            <h3>Buy Gift Cards</h3>
                            <a href="">Our brands</a>
                            <a href="">Our gift cards</a>
                            <a href="">How it works</a>
                            <a href="">About us</a>
                            <a href="">FAQs</a>
                            <a href="">Returns & refunds</a>
                            <a href="">Shipping & delivery</a>
                            <a href="">Contact us</a>
                        </nav>
                        <nav>
                            <h3>Redeem Gift Card</h3>
                            <a href="">Register voucher</a>
                            <a href="">FAQs</a>
                            <a href="">Contact us</a>
                        </nav>
                        <nav>
                            <h3>For Business</h3>
                            <a href="">Gift card</a>
                            <a href="">Our brands</a>
                            <a href="">Events</a>
                            <a href="">Knowledge hub</a>
                            <a href="">FAQs</a>
                            <a href="">About us</a>
                            <a href="">Contact us</a>
                        </nav>

                    </div>
                    <div className="footer-right-content">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;