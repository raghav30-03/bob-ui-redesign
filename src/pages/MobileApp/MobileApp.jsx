import "./MobileApp.css";

import {
    FiSmartphone,
    FiShield,
    FiZap,
    FiBell,
    FiCreditCard,
    FiPieChart,
} from "react-icons/fi";

const MobileApp = () => {
    const features = [
        {
            icon: <FiShield />,
            title: "Biometric Login",
            description:
                "Face ID and fingerprint login keep your account secure.",
        },
        {
            icon: <FiZap />,
            title: "Instant UPI",
            description: "Send and receive money in seconds, anytime.",
        },
        {
            icon: <FiBell />,
            title: "Real-Time Alerts",
            description: "Get notified instantly for every transaction.",
        },
        {
            icon: <FiCreditCard />,
            title: "Card Control",
            description:
                "Block, unblock or set limits on your cards instantly.",
        },
        {
            icon: <FiPieChart />,
            title: "Track Spending",
            description: "See where your money goes with smart insights.",
        },
        {
            icon: <FiSmartphone />,
            title: "One-Tap Access",
            description: "Manage accounts, loans and investments from one app.",
        },
    ];

    return (
        <div className="mobileapp-page">
            <div className="mobileapp-hero">
                <span className="section-badge">Mobile App</span>

                <h1>Banking in Your Pocket</h1>

                <p>
                    Everything you need from your bank, redesigned for your
                    phone. Secure, fast, and built around you.
                </p>

                <div className="mobileapp-badges">
                    <a href="#" className="store-badge">
                        Get it on Google Play
                    </a>

                    <a href="#" className="store-badge">
                        Download on the App Store
                    </a>
                </div>
            </div>

            <div className="mobileapp-features">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>

                        <h3>{feature.title}</h3>

                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileApp;
