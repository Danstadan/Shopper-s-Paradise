import React from 'react';
import { useLocation } from 'react-router-dom';

function ProfilePage({ user }) {
    const location = useLocation();
    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Profile</h3>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Username:</label>
                                {/* uncomment all these when ready */}
                                {/* <p>{user.username}</p> */}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                {/* <p>{user.email}</p> */}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">First Name:</label>
                                {/* <p>{user.firstName}</p> */}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Last Name:</label>
                                {/* <p>{user.lastName}</p> */}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Bio:</label>
                                {/* <p>{user.bio}</p> */}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location:</label>
                                {/* <p>{user.location}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
