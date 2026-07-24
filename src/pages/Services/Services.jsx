import Navbar from "../../components/Common/Navbar/Navbar";
import "./Services.css";

import {
    FiMonitor,
    FiSmartphone,
    FiRepeat,
    FiFileText,
    FiMapPin,
    FiArrowRight,
} from "react-icons/fi";

const Services = () => {
    const services = [
        {
            icon: <FiMonitor />,
            title: "Net Banking",
            description:
                "Manage your accounts, transfers and statements online, anytime.",
        },
        {
            icon: <FiSmartphone />,
            title: "Mobile Banking",
            description:
                "Bank on the go with our secure, feature-rich mobile app.",
        },
        {
            icon: <FiRepeat />,
            title: "UPI",
            description: "Send and receive money instantly using your UPI ID.",
        },
        {
            icon: <FiFileText />,
            title: "Bill Payments",
            description:
                "Pay electricity, water, DTH and other bills in one place.",
        },
        {
            icon: <FiMapPin />,
            title: "Branch Locator",
            description:
                "Find the nearest Bank of Baroda branch or ATM instantly.",
        },
    ];

    return (
        <>
        <Navbar />
        <div className="services-page">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>Everything you need to manage your banking, in one place</p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <a href="#" className="service-link">
                            Learn More <FiArrowRight />
                        </a>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Services;
