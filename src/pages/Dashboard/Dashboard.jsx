import Navbar from "../../components/Common/Navbar/Navbar";
import "./Dashboard.css";

import {
    FiSend,
    FiFileText,
    FiSmartphone,
    FiTrendingUp,
    FiMoreHorizontal,
    FiArrowRightCircle,
    FiShoppingBag,
    FiZap,
    FiUsers,
    FiUser,
} from "react-icons/fi";

const Dashboard = () => {
    const actions = [
        { icon: <FiSend />, label: "Transfer" },
        { icon: <FiFileText />, label: "Pay Bills" },
        { icon: <FiSmartphone />, label: "Recharge" },
        { icon: <FiTrendingUp />, label: "Invest" },
        { icon: <FiMoreHorizontal />, label: "More" },
    ];

    const transactions = [
        {
            icon: <FiShoppingBag />,
            title: "UPI Payment - Amazon",
            date: "Today",
            amount: "-₹1,250",
        },
        {
            icon: <FiZap />,
            title: "Electricity Bill Payment",
            date: "Today",
            amount: "-₹890",
        },
        {
            icon: <FiUsers />,
            title: "Money Transfer - Rohan Singh",
            date: "Yesterday",
            amount: "-₹5,000",
        },
        {
            icon: <FiTrendingUp />,
            title: "Interest Credited",
            date: "Yesterday",
            amount: "+₹250",
        },
    ];

    const accounts = [
        { name: "Savings Account", number: "•••• 4821", amount: "₹24,580" },
        { name: "Fixed Deposit", number: "•••• 1092", amount: "₹1,50,000" },
        { name: "Recurring Deposit", number: "•••• 7734", amount: "₹32,400" },
    ];

    return (
        <>
            <Navbar />
            <div className="dashboard-page">
                <div className="dashboard-header">
                    <div>
                        <h1>Good Morning, Raghav</h1>
                        <p>Here's your account overview</p>
                    </div>

                    <div className="greeting-avatar">
                        <FiUser />
                    </div>
                </div>

                <div className="balance-box">
                    <div>
                        <p className="balance-label">Total Balance</p>
                        <h1 className="balance-amount">₹24,580.00</h1>
                    </div>

                    <div className="balance-footer">
                        <a href="#">
                            View All Accounts <FiArrowRightCircle />
                        </a>
                    </div>
                </div>

                <div className="action-row">
                    {actions.map((action, index) => (
                        <div className="action-item" key={index}>
                            <div className="action-icon">{action.icon}</div>
                            <span>{action.label}</span>
                        </div>
                    ))}
                </div>

                <div className="dashboard-grid">
                    <div className="dashboard-card">
                        <div className="section-head">
                            <h3>Recent Transactions</h3>
                            <a href="#">View All</a>
                        </div>

                        <div className="transaction-list">
                            {transactions.map((tx, index) => (
                                <div className="transaction-item" key={index}>
                                    <div className="transaction-icon">
                                        {tx.icon}
                                    </div>

                                    <div className="transaction-info">
                                        <h4>{tx.title}</h4>
                                        <span>{tx.date}</span>
                                    </div>

                                    <p
                                        className={
                                            tx.amount.startsWith("+")
                                                ? "amount positive"
                                                : "amount negative"
                                        }
                                    >
                                        {tx.amount}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-card">
                        <div className="section-head">
                            <h3>Your Accounts</h3>
                            <a href="#">Manage</a>
                        </div>

                        <div className="account-list">
                            {accounts.map((acc, index) => (
                                <div className="account-item" key={index}>
                                    <div>
                                        <h4>{acc.name}</h4>
                                        <span>{acc.number}</span>
                                    </div>

                                    <p className="amount positive">
                                        {acc.amount}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
