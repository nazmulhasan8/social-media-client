import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Comments</Link></li>
                        
                       
                       
                                 
                                 <li><Link to="/dashboard/manageproducts">Manage Posts</Link></li>
                         
                        
                        {
                            isAdmin && <>
                            <li><Link to="/dashboard/reportedproducts">All Reported Post</Link></li>
                                
                                <li><Link to="/dashboard/allsellers">All Users</Link></li>
                                {/* <li><Link to="/dashboard/allpaidProducts">All Paid Products</Link></li> */}
                            </>
                        }
                        

                    </ul>

                </div>
            </div>
            
        </div>
    );
};

export default DashboardLayout;