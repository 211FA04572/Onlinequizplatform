import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="left-section">
                <h3>Welcome Back!</h3>
            </div>
            <div className="form-container">
                <form className="form" id="loginForm">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;