import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css'

function Sidebar() {

    const deletecookie = () => {
        localStorage.removeItem('name')
    }
    return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <NavLink to='/dashboard/main' className="list-group-item list-group-item-action py-2 ripple" activeclassname="active" aria-current="true">
                        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
                    </NavLink>
                    <NavLink to='/dashboard/book' className="list-group-item list-group-item-action py-2 ripple" activeclassname="active"><i
                        className="fas fa-home fa-fw me-3"></i><span>Book Room</span></NavLink>
                    <NavLink to='/dashboard/events' className="list-group-item list-group-item-action py-2 ripple" activeclassname="active"><i
                        className="fas fa-calendar fa-fw me-3"></i><span>Events</span></NavLink>
                    <NavLink to='/dashboard/profile' className="list-group-item list-group-item-action py-2 ripple" activeclassname="active"><i
                        className="fas fa-user-graduate fa-fw me-3"></i><span>Profile</span></NavLink>
                    <NavLink to='/dashboard/settings' className="list-group-item list-group-item-action py-2 ripple" activeclassname="active"><i
                        className="fas fa-cog fa-fw me-3"></i><span>Settings</span></NavLink>
                    <Link to='/' className="list-group-item list-group-item-action py-2 ripple" onClick={deletecookie}><i
                        className="fas fa-sign-out-alt fa-fw me-3"></i><span>Sign out</span></Link>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
