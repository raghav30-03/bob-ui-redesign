import Navbar from "../../components/Common/Navbar/Navbar";
import "./FinancialHealth.css";

const FinancialHealth = () => {
    const metrics = [
        { label: "Savings", value: 82, color: "#22c55e" },
        { label: "Expenses", value: 60, color: "#F36B21" },
        { label: "Investments", value: 45, color: "#3b82f6" },
    ];

    const creditScore = 782;
    const creditScoreMax = 900;
    const scorePercent = (creditScore / creditScoreMax) * 100;

    return (
        <>
            <Navbar />
            <div className="financial-health-page">
                <div className="fh-header">
                    <h1>Your Financial Health</h1>
                    <p>A quick snapshot of how your money is working for you</p>
                </div>

                <div className="fh-grid">
                    <div className="fh-card">
                        <h3>Overview</h3>

                        <div className="metric-list">
                            {metrics.map((metric, index) => (
                                <div className="metric-item" key={index}>
                                    <div className="metric-top">
                                        <span>{metric.label}</span>
                                        <span>{metric.value}%</span>
                                    </div>

                                    <div className="metric-bar">
                                        <div
                                            className="metric-fill"
                                            style={{
                                                width: `${metric.value}%`,
                                                background: metric.color,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="fh-card credit-score-card">
                        <h3>Credit Score</h3>

                        <div className="score-gauge">
                            <svg viewBox="0 0 100 60">
                                <path
                                    d="M10 55 A45 45 0 0 1 90 55"
                                    fill="none"
                                    stroke="#edf2f7"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M10 55 A45 45 0 0 1 90 55"
                                    fill="none"
                                    stroke="#22c55e"
                                    strokeWidth="10"
                                    strokeLinecap="round"
                                    strokeDasharray="141.4"
                                    strokeDashoffset={
                                        141.4 - (141.4 * scorePercent) / 100
                                    }
                                />
                            </svg>

                            <div className="score-value">
                                <h2>{creditScore}</h2>
                                <span>Excellent</span>
                            </div>
                        </div>

                        <p className="score-note">No change this month</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinancialHealth;
