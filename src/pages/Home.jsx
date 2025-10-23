import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <>
            {/* <h1>This Home Layout</h1> */}
            <Navigate to="/category/1"></Navigate>
        </>
    );
};

export default Home;