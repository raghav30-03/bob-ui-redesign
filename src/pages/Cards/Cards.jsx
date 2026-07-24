import Navbar from "../../components/Common/Navbar/Navbar";
import "./Cards.css";

import { FiCreditCard, FiGift, FiGlobe, FiShield } from "react-icons/fi";

const Cards = () => {
    const cards = [
        {
            icon: <FiCreditCard />,
            title: "Baroda Rewards Credit Card",
            highlight: "Lifetime Free",
            description:
                "Earn reward points on every spend, redeemable across categories.",
            action: "Apply Now",
        },
        {
            icon: <FiGlobe />,
            title: "Baroda Travel Card",
            highlight: "Zero Forex Markup",
            description:
                "Travel the world without worrying about currency conversion fees.",
            action: "Apply Now",
        },
        {
            icon: <FiGift />,
            title: "Baroda Cashback Card",
            highlight: "Up to 5% Cashback",
            description:
                "Get cashback on groceries, fuel, and everyday essentials.",
            action: "Apply Now",
        },
        {
            icon: <FiShield />,
            title: "Baroda Debit Card",
            highlight: "Free with Account",
            description:
                "Secure, contactless debit card with fraud protection built in.",
            action: "Know More",
        },
    ];

    return (
        <>
        <Navbar />
        <div className="cards-page">
            <div className="cards-header">
                <h1>Our Cards</h1>
                <p>Credit and debit cards designed for the way you spend</p>
            </div>

            <div className="cards-grid">
                {cards.map((card, index) => (
                    <div className="card-item" key={index}>
                        <div className="card-icon">{card.icon}</div>

                        <h3>{card.title}</h3>

                        <span className="card-highlight">{card.highlight}</span>

                        <p className="card-description">{card.description}</p>

                        <button className="card-btn">{card.action}</button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Cards;
