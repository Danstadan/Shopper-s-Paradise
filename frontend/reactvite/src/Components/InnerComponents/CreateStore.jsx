import React, { useState, useLocation } from 'react';

function ShopSetup() {
    // State variables to manage shop setup data
    const [shopName, setShopName] = useState('');
    const [shopDescription, setShopDescription] = useState('');
    const [shopLocation, setShopLocation] = useState('');
    const location = useLocation();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit shop setup data to backend or perform other actions
        console.log('Shop setup data submitted:', { shopName, shopDescription, shopLocation });
        // Reset form fields after submission
        setShopName('');
        setShopDescription('');
        setShopLocation('');
    };

    return (
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Shop Setup</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Shop Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={shopName}
                                        onChange={(e) => setShopName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description:</label>
                                    <textarea
                                        className="form-control"
                                        value={shopDescription}
                                        onChange={(e) => setShopDescription(e.target.value)}
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={shopLocation}
                                        onChange={(e) => setShopLocation(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopSetup;
