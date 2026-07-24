import { useState } from "react";
import "./Loans.css";

import { FiHome, FiBookOpen, FiTruck, FiUser } from "react-icons/fi";
import Navbar from "../../components/Common/Navbar/Navbar";

const Loans = () => {
    const loans = [
        {
            icon: <FiHome />,
            title: "Home Loan",
            rate: "8.25%",
            description: "Build your dream home with easy repayment options.",
        },
        {
            icon: <FiBookOpen />,
            title: "Education Loan",
            rate: "8.65%",
            description: "Invest in a brighter future for your education.",
        },
        {
            icon: <FiTruck />,
            title: "Vehicle Loan",
            rate: "8.90%",
            description:
                "Drive home your dream car or bike with quick approval.",
        },
        {
            icon: <FiUser />,
            title: "Personal Loan",
            rate: "10.50%",
            description:
                "Quick, collateral-free loans for your personal needs.",
        },
    ];

    const [amount, setAmount] = useState(500000);
    const [tenure, setTenure] = useState(5);
    const [rate, setRate] = useState(8.25);

    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;

    const emi =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    return (
        <>
        <Navbar />
        <div className="loans-page">
            <div className="loans-header">
                <h1>Loans</h1>
                <p>Find the right loan for every milestone in your life</p>
            </div>

            <div className="loans-grid">
                {loans.map((loan, index) => (
                    <div className="loan-card" key={index}>
                        <div className="loan-icon">{loan.icon}</div>

                        <h3>{loan.title}</h3>

                        <span className="loan-rate">
                            {loan.rate} <small>Interest Rate</small>
                        </span>

                        <p className="loan-description">{loan.description}</p>

                        <button className="loan-btn">Apply Now</button>
                    </div>
                ))}
            </div>

            <div className="emi-calculator">
                <h2>EMI Calculator</h2>

                <div className="emi-inputs">
                    <div className="emi-field">
                        <label>Loan Amount (₹)</label>

                        <input
                            type="range"
                            min="50000"
                            max="5000000"
                            step="10000"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />

                        <span>₹{amount.toLocaleString("en-IN")}</span>
                    </div>

                    <div className="emi-field">
                        <label>Tenure (Years)</label>

                        <input
                            type="range"
                            min="1"
                            max="30"
                            value={tenure}
                            onChange={(e) => setTenure(Number(e.target.value))}
                        />

                        <span>{tenure} Years</span>
                    </div>

                    <div className="emi-field">
                        <label>Interest Rate (%)</label>

                        <input
                            type="range"
                            min="6"
                            max="15"
                            step="0.05"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                        />

                        <span>{rate}%</span>
                    </div>
                </div>

                <div className="emi-result">
                    <p>Your Monthly EMI</p>

                    <h2>₹{Math.round(emi).toLocaleString("en-IN")}</h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default Loans;
