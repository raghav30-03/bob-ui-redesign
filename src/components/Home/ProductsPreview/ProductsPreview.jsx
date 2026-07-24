import "./ProductsPreview.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FiCreditCard,
    FiHome,
    FiDollarSign,
    FiShield,
    FiArrowRight,
} from "react-icons/fi";

const ProductsPreview = () => {
    const products = [
        {
            icon: <FiCreditCard />,
            title: "Credit Cards",
            description:
                "Premium cards with rewards, cashback and travel benefits.",
        },
        {
            icon: <FiHome />,
            title: "Home Loans",
            description:
                "Affordable interest rates with quick approval process.",
        },
        {
            icon: <FiDollarSign />,
            title: "Savings Account",
            description:
                "Smart banking with higher interest and digital features.",
        },
        {
            icon: <FiShield />,
            title: "Insurance",
            description:
                "Protect yourself and your family with complete coverage.",
        },
    ];

    return (
        <section className="products-preview">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-badge">Featured Products</span>

                    <h2 className="section-title">
                        Banking Solutions for
                        <span> Every Need</span>
                    </h2>

                    <p className="section-description">
                        Explore our most popular banking products designed to
                        simplify your financial journey.
                    </p>
                </motion.div>

                <div className="row g-4">
                    {products.map((product, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <motion.div
                                className="product-preview-card"
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
                                <div className="product-icon">
                                    {product.icon}
                                </div>

                                <h4>{product.title}</h4>

                                <p>{product.description}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link to="/products" className="bob-btn-primary">
                        View All Products
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsPreview;
