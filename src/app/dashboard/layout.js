import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar/>
            {children}
        </div>
    );
};

export default DashboardLayout;