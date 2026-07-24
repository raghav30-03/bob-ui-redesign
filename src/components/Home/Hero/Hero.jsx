import "./Hero.css";
import PhoneMockup from "../../../assets/images/mobile/phone-mockup.png"

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FiSearch,
    FiArrowRight,
    FiShield,
    FiClock,
    FiMapPin,
    FiTrendingUp,
} from "react-icons/fi";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center gy-5">
                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="hero-content">
                            <span className="hero-badge">
                                Digital Banking Reimagined
                            </span>

                            <h1>
                                Banking
                                <span> Reimagined </span>
                                for Every Indian
                            </h1>

                            <p>
                                Experience seamless banking with a fresh, modern
                                interface designed for speed, security and
                                simplicity.
                            </p>

                            <div className="hero-buttons">
                                <Link to="/login" className="bob-btn-primary">
                                    Open Account
                                </Link>

                                <Link to="/loans" className="bob-btn-outline">
                                    Explore Loans
                                    <FiArrowRight />
                                </Link>
                            </div>

                            <Link to="/search" className="hero-search">
                                <FiSearch />

                                <input
                                    type="text"
                                    placeholder="Search accounts, loans, cards..."
                                    readOnly
                                />
                            </Link>

                            <div className="hero-features">
                                <div className="feature-item">
                                    <FiShield />
                                    <span>100% Secure</span>
                                </div>

                                <div className="feature-item">
                                    <FiClock />
                                    <span>24×7 Banking</span>
                                </div>

                                <Link to="/branches" className="feature-item">
                                    <FiMapPin />
                                    <span>8200+ Branches</span>
                                </Link>

                                <div className="feature-item">
                                    <FiTrendingUp />
                                    <span>Trusted Since 1908</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="col-lg-6"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <div className="hero-image-wrapper">
                            <div className="hero-bg-shape"></div>

                            <div className="hero-building-placeholder">
                                Building Illustration
                            </div>

                            <div className="hero-phone-placeholder ">
                                <img className="h-100 rounded-5" src={PhoneMockup} />
                            </div>

                            <div className="floating-card balance-card">
                                <small>Total Balance</small>
                                <h4>₹2,45,860</h4>
                                <span>+8.2% this month</span>
                            </div>

                            <div className="floating-card success-card">
                                <div className="success-icon">✓</div>

                                <div>
                                    <h5>Transaction Successful</h5>
                                    <span>₹12,000 transferred</span>
                                </div>
                            </div>

                            <span className="circle circle-one"></span>
                            <span className="circle circle-two"></span>
                            <span className="circle circle-three"></span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
