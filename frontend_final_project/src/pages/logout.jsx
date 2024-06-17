// Logout.js

import React, { useEffect } from 'react';

const Logout = () => {
    useEffect(() => {
        // Clear localStorage
        localStorage.removeItem('userId'); // Adjust based on your stored keys

        // Redirect to login page
        window.location.href = '/login'; // Redirect to your login page path
    }, []);

    return (
        <div>
            <h2>Logging out...</h2>
            {/* You can optionally display a message or spinner while logging out */}
        </div>
    );
}

export default Logout;
