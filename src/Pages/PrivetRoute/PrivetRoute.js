import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';
// import Loding from '../../Assent/Loding/Loding photo.gif'


const PrivetRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContext);

    const location = useLocation();

    if (loding) {
        return (
            <>
                <div>
                    <div className="Loding">
                        <img src='https://static.spotapps.co/assets/widgets/loading.gif' alt="" />
                    </div>
                </div>
            </>
        )
    }


    if (user && user?.uid) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;

};

export default PrivetRoute;