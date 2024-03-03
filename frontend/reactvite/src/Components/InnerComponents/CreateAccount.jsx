import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function CreateAccount() {
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const location = useLocation();


    const handleCheckboxChange = () => {
        setAgreeToTerms(!agreeToTerms);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreeToTerms) {
            alert("Please agree to the terms of service and privacy policy.");
            return;
        }
        // Process form submission
        console.log("Form submitted!");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-4 mb-2" style={{ minHeight: '90vh' }}>
            <div className="col-lg-6">
                <div className='border border-success-subtle rounded p-4'>
                    <h3 className="text-center mb-4">Create Account</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                        </div>
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" id="agreeToTerms" checked={agreeToTerms} onChange={handleCheckboxChange} required />
                            <label className="form-check-label" htmlFor="agreeToTerms">
                                I agree to the <Link to="/terms" className="link-primary">Terms of Service</Link> and <Link to="/privacy" className="link-primary">Privacy Policy</Link>
                            </label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn bg-success-subtle btn-block">Create Account</button>
                        </div>
                    </form>
                    <div className="text-center mt-3">
                        <span>Already have an account? </span>
                        <Link to="/login" className="link-primary">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
