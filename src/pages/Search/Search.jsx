import { useState } from "react";
import "./Search.css";

import {
    FiSearch,
    FiRepeat,
    FiSmartphone,
    FiCreditCard,
    FiPieChart,
    FiTrendingUp,
    FiMapPin,
} from "react-icons/fi";
import Navbar from "../../components/Common/Navbar/Navbar";

const Search = () => {
    const [query, setQuery] = useState("");

    const popularSearches = [
        "Open FD",
        "Block Card",
        "Apply Loan",
        "IFSC Code",
        "Branch Near Me",
    ];

    const quickActions = [
        { icon: <FiRepeat />, label: "Transfer Money" },
        { icon: <FiSmartphone />, label: "UPI" },
        { icon: <FiCreditCard />, label: "Credit Card" },
        { icon: <FiPieChart />, label: "Fixed Deposit" },
        { icon: <FiTrendingUp />, label: "Mutual Funds" },
        { icon: <FiMapPin />, label: "Locate Branch" },
    ];

    return (
        <>
            <Navbar />
            <div className="search-page">
                <div className="search-card">
                    <h1>What would you like to do today?</h1>

                    <div className="search-bar">
                        <FiSearch />

                        <input
                            type="text"
                            placeholder="Search for anything..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <div className="popular-searches">
                        <span className="popular-label">Popular Searches</span>

                        <div className="popular-tags">
                            {popularSearches.map((item, index) => (
                                <button className="popular-tag" key={index}>
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="quick-actions-card">
                    <h2>Quick Actions</h2>

                    <div className="quick-actions-grid">
                        {quickActions.map((action, index) => (
                            <div className="quick-action-item" key={index}>
                                <div className="quick-action-icon">
                                    {action.icon}
                                </div>

                                <span>{action.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
