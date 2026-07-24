import "./Security.css";

import { motion } from "framer-motion";

import {
    FiShield,
    FiLock,
    FiSmartphone,
    FiEye,
    FiArrowRight,
} from "react-icons/fi";

const Security = () => {
    const features = [
        {
            icon: <FiShield />,
            title: "Bank Grade Security",
            description: "Advanced encryption protects every transaction.",
        },
        {
            icon: <FiLock />,
            title: "Biometric Login",
            description: "Secure access with fingerprint and Face ID.",
        },
        {
            icon: <FiSmartphone />,
            title: "Instant Alerts",
            description: "Get real-time notifications for every activity.",
        },
        {
            icon: <FiEye />,
            title: "Fraud Protection",
            description: "AI continuously monitors suspicious transactions.",
        },
    ];

    return (
        <section className="security-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-badge">Safe & Secure</span>

                    <h2 className="section-title">
                        Banking You Can
                        <span> Trust</span>
                    </h2>

                    <p className="section-description">
                        Your money and personal information are protected with
                        industry-leading security technologies, ensuring a safe
                        banking experience every day.
                    </p>
                </motion.div>

                <div className="row g-4">
                    {features.map((item, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <motion.div
                                className="security-card"
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: index * 0.06,
                                    duration: 0.35,
                                }}
                                viewport={{
                                    once: true,
                                }}
                            >
                                <div className="security-icon">{item.icon}</div>

                                <h4>{item.title}</h4>

                                <p>{item.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="security-bottom">
                    <button className="bob-btn-primary">
                        Learn More
                        <FiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Security;
