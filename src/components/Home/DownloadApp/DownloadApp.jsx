import "./DownloadApp.css";

import { motion } from "framer-motion";

import {
    FiCheckCircle
} from "react-icons/fi";

import phoneMockup from "../../../assets/images/mobile/mobile-app-mockup.png";
import googlePlayBadge from "../../../assets/images/hero/google-play-badge.png";
import appStoreBadge from "../../../assets/images/hero/app-store-badge.png";

const DownloadApp = () => {

    const features = [
        "Face Login & Biometric Security",
        "Instant UPI & Payments",
        "Full Card Control, Anytime",
        "Real-Time Alerts on Every Transaction"
    ];

    return (

        <section className="download-app">

            <div className="container">

                <div className="download-app-grid">

                    <motion.div
                        className="download-app-content"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        viewport={{ once: true }}
                    >

                        <span className="section-badge">

                            Mobile App

                        </span>

                        <h2 className="section-title">

                            Banking in
                            <span> Your Pocket</span>

                        </h2>

                        <p className="section-description">

                            Secure, simple and smarter banking. Manage your
                            money, cards and payments anytime, anywhere with
                            the Bank of Baroda app.

                        </p>

                        <ul className="download-app-features">

                            {

                                features.map((feature, index) => (

                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * .1 }}
                                        viewport={{ once: true }}
                                    >

                                        <FiCheckCircle />

                                        <span>{feature}</span>

                                    </motion.li>

                                ))

                            }

                        </ul>

                        <div className="download-app-badges">

                            <a>
                                href="#"
                                className="store-badge"
                                aria-label="Download on Google Play"
                                <img
                                    src={googlePlayBadge}
                                    alt="Get it on Google Play"
                                />

                            </a>
                            <a>
                                href="#"
                                className="store-badge"
                                aria-label="Download on the App Store"
                                <img
                                    src={appStoreBadge}
                                    alt="Download on the App Store"
                                />

                            </a>

                        </div>

                    </motion.div>

                    <motion.div
                        className="download-app-visual"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.35, delay: 0.1 }}
                        viewport={{ once: true }}
                    >

                        <div className="phone-glow" />

                        <img
                            src={phoneMockup}
                            alt="Bank of Baroda mobile app"
                            className="phone-mockup"
                        />

                    </motion.div>

                </div>

            </div>

        </section>

    );

};

export default DownloadApp;