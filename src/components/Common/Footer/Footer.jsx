import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo/bob-logo.svg"

import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
    FiMapPin,
    FiPhone,
    FiMail,
    FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row gy-5">
                    {/* Brand */}

                    <div className="col-lg-4">
                        <div className="footer-brand">
                            <img
                                src={logo}
                                alt="Bank of Baroda"
                            />

                            <p>
                                Reimagining banking with a modern, secure and
                                AI-powered digital experience. Built as a UI
                                proposal for the future of Bank of Baroda.
                            </p>

                            <div className="footer-social">
                                <a href="#">
                                    <FiFacebook />
                                </a>
                                <a href="#">
                                    <FiInstagram />
                                </a>
                                <a href="#">
                                    <FiLinkedin />
                                </a>
                                <a href="#">
                                    <FiTwitter />
                                </a>
                                <a href="#">
                                    <FiYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Banking */}

                    <div className="col-lg-2 col-md-6">
                        <h5>Banking</h5>

                        <ul>
                            <li>
                                <Link to="/dashboard">Accounts</Link>
                            </li>
                            <li>
                                <Link to="/cards">Cards</Link>
                            </li>
                            <li>
                                <Link to="/loans">Loans</Link>
                            </li>
                            <li>
                                <Link to="/investments">Investments</Link>
                            </li>
                            <li>
                                <Link to="/financial-health">
                                    Financial Health
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}

                    <div className="col-lg-2 col-md-6">
                        <h5>Services</h5>

                        <ul>
                            <li>
                                <Link to="/services">Net Banking</Link>
                            </li>
                            <li>
                                <Link to="/mobile-app">Mobile Banking</Link>
                            </li>
                            <li>
                                <Link to="/ask-bob">Ask BOB</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/branches">Branch Locator</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}

                    <div className="col-lg-4">
                        <h5>Contact Us</h5>

                        <div className="footer-contact">
                            <p>
                                <FiMapPin />
                                Baroda Corporate Centre, Mumbai, India
                            </p>

                            <p>
                                <FiPhone />
                                1800 5700
                            </p>

                            <p>
                                <FiMail />
                                support@bankofbaroda.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © 2026 Bank of Baroda UI Redesign Concept. Designed by
                        Raghav Sharma.
                    </p>

                    <button
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;