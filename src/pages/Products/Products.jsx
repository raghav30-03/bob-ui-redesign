import Navbar from "../../components/Common/Navbar/Navbar";
import "./Products.css";

import {
    FiHome,
    FiBookOpen,
    FiCreditCard,
    FiPieChart,
    FiArrowRight,
} from "react-icons/fi";

const Products = () => {
    const products = [
        {
            icon: <FiHome />,
            title: "Home Loan",
            highlight: "8.25%",
            highlightLabel: "Interest Rate",
            description: "Build your dream home with easy repayment options.",
            action: "Apply Now",
        },
        {
            icon: <FiBookOpen />,
            title: "Education Loan",
            highlight: "8.65%",
            highlightLabel: "Interest Rate",
            description: "Invest in a brighter future for your education.",
            action: "Apply Now",
        },
        {
            icon: <FiCreditCard />,
            title: "Credit Card",
            highlight: "Lifetime Free",
            highlightLabel: "",
            description: "Exciting rewards on every card, every purchase.",
            action: "Apply Now",
        },
        {
            icon: <FiPieChart />,
            title: "Fixed Deposit",
            highlight: "Up to 7.50%",
            highlightLabel: "Returns",
            description: "Safe & secure investment with guaranteed returns.",
            action: "Open Now",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="products-page">
                <div className="products-header">
                    <h1>Our Products</h1>
                    <p>
                        Explore banking solutions built for every stage of your
                        life
                    </p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div className="product-card" key={index}>
                            <div className="product-icon">{product.icon}</div>

                            <h3>{product.title}</h3>

                            <div className="product-highlight">
                                <span className="highlight-value">
                                    {product.highlight}
                                </span>

                                {product.highlightLabel && (
                                    <span className="highlight-label">
                                        {product.highlightLabel}
                                    </span>
                                )}
                            </div>

                            <p className="product-description">
                                {product.description}
                            </p>

                            <button className="product-btn">
                                {product.action}

                                <FiArrowRight />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
