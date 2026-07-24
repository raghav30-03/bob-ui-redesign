import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch, FiBell, FiMenu, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
    return (
        <motion.nav
            className="navbar-section"
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container">
                <div className="navbar-wrapper">
                    <Link to="/" className="navbar-logo">
                        <div className="logo-icon">B</div>

                        <div className="logo-text">
                            <h4>Bank of Baroda</h4>
                            <span>Redesigned Experience</span>
                        </div>
                    </Link>

                    <ul className="navbar-links d-none d-lg-flex">
                        <li>
                            <NavLink to="/products">Personal</NavLink>
                        </li>

                        <li>
                            <NavLink to="/services">Business</NavLink>
                        </li>

                        <li>
                            <NavLink to="/cards">NRI</NavLink>
                        </li>

                        <li>
                            <NavLink to="/branches">Rural</NavLink>
                        </li>

                        <li>
                            <NavLink to="/loans">MSME</NavLink>
                        </li>

                        <li>
                            <NavLink to="/investments">
                                More
                                <FiChevronDown />
                            </NavLink>
                        </li>
                    </ul>

                    <div className="navbar-actions">
                        <Link to="/search" className="nav-icon">
                            <FiSearch />
                        </Link>

                        <Link to="/ask-bob" className="nav-icon">
                            <FiBell />
                        </Link>

                        <Link to="/login" className="bob-btn-primary login-btn mb-0">
                            Login
                        </Link>

                        <button className="mobile-menu d-lg-none" type="button">
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;