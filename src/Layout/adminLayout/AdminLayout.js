import React from 'react';
import { Outlet } from 'react-router';
import AdminPages from '../../Admin/AdminPages/AdminPages';

const AdminLayout = () => {
    return (
        <>
            <AdminPages></AdminPages>
            <Outlet />
        </>
    );
};

export default AdminLayout;