import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { FiUser, FiLock, FiSmartphone, FiArrowRight } from "react-icons/fi";

const Login = () => {
    const [loginMode, setLoginMode] = useState("password");
    const navigate = useNavigate();

    const handleLogin = () => {
        // TODO: add real authentication logic here before redirecting
        navigate("/");
    };

    return (
        <div className="login-page">
            <div className="login-brand">
                <h2>Welcome Back</h2>

                <p>
                    Log in to manage your accounts, cards, loans and investments
                    — all in one place.
                </p>
            </div>

            <div className="login-card">
                <h1>Login</h1>

                <div className="login-toggle">
                    <button
                        className={loginMode === "password" ? "active" : ""}
                        onClick={() => setLoginMode("password")}
                    >
                        Password
                    </button>

                    <button
                        className={loginMode === "otp" ? "active" : ""}
                        onClick={() => setLoginMode("otp")}
                    >
                        OTP
                    </button>
                </div>

                <div className="input-group">
                    <FiUser />

                    <input type="text" placeholder="User ID / Mobile Number" />
                </div>

                {loginMode === "password" ? (
                    <div className="input-group">
                        <FiLock />

                        <input type="password" placeholder="Password" />
                    </div>
                ) : (
                    <div className="input-group">
                        <FiSmartphone />

                        <input type="text" placeholder="Enter OTP" />
                    </div>
                )}

                <div className="login-options">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>

                    <a href="#">Forgot Password?</a>
                </div>

                <button className="login-btn" onClick={handleLogin}>
                    Login
                    <FiArrowRight />
                </button>

                <p className="login-footer">
                    New to Bank of Baroda?
                    <a href="#"> Open an Account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;