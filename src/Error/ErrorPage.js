import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <div className="w-100 h-100 errorPage">
                <div className="div">
                    <h1 className='text-center'>404 Can't found page</h1>
                    <Link to={'/'}><button className="btn px-5 py-3 text-white bg-primary">Go to Home page</button></Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;