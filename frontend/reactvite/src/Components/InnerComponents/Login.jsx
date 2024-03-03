import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Loginpage() {
    const location = useLocation();

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5 " style={{ minHeight: '70vh' }}>
            <div className="col-lg-4">
                <div className='border border-success-subtle rounded p-4'>
                    <h2 className="text-center mb-4">Sign in</h2>
                    <form action="/login" method="post">
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username or Email</label>
                            <input type="text" className="form-control" id="username" name="username" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn bg-success-subtle btn-block">Login</button>
                        </div>
                    </form>
                    <div className="text-center">
                        <Link to="/forgot-password" className="link-secondary me-4">Forgot Password?</Link>
                        <Link to="/signup" className="link-secondary me-3">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;
