import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <button className="btn btn-bg btn-square loading"></button>
    }

    if (!user) {
        return <Navigate state={{ from: location }} replace to='/login'></Navigate>
    }
    else {
        return children;
    }
};

export default PrivateRoutes;