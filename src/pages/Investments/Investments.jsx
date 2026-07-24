import Navbar from "../../components/Common/Navbar/Navbar";
import "./Investments.css";

import { FiTrendingUp, FiBriefcase, FiShield } from "react-icons/fi";

const Investments = () => {
    const investments = [
        {
            icon: <FiTrendingUp />,
            title: "Mutual Funds",
            highlight: "Start from ₹500",
            description:
                "Grow your wealth with expertly managed mutual fund plans.",
            action: "Invest Now",
        },
        {
            icon: <FiBriefcase />,
            title: "Gold Bonds",
            highlight: "Safe & Secure",
            description: "Invest in gold digitally with guaranteed returns.",
            action: "Invest Now",
        },
        {
            icon: <FiShield />,
            title: "Tax Saving (ELSS)",
            highlight: "Save Tax, Build Wealth",
            description: "Reduce your tax burden while growing your savings.",
            action: "Invest Now",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="investments-page">
                <div className="investments-header">
                    <h1>Investment Options</h1>
                    <p>Grow your money with plans built for every goal</p>
                </div>

                <div className="investments-grid">
                    {investments.map((item, index) => (
                        <div className="investment-card" key={index}>
                            <div className="investment-icon">{item.icon}</div>

                            <h3>{item.title}</h3>

                            <span className="investment-highlight">
                                {item.highlight}
                            </span>

                            <p className="investment-description">
                                {item.description}
                            </p>

                            <button className="investment-btn">
                                {item.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Investments;
