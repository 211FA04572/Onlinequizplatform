import React from 'react';

const Registration = () => {
    return (
        <div className="container">
            <div className="left-section">
                <h3>Create an Account!</h3>
            </div>
            <div className="form-container">
                <form className="form" id="registrationForm">
                    <h2>Register</h2>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;