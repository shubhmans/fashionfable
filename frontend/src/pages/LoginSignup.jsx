import React from "react";

import "./css/LoginSignup.css";
const LoginSignup = () => {
    return (
        <div className="login-signup">
            <div className="login-signup-container">
                <h1>Sign Up</h1>
                <div className="login-signup-fields">
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter email address" />
                    <input type="password" placeholder="Enter password" />
                </div>
                <button>Continue</button>
                <p className="login-signup-login">
                    Already have an acoount? <span>Login here</span>
                </p>
                <div className="login-signup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to use terms of service</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
