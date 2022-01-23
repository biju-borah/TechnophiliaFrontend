import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Main from './Main';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';
import Book from './Book';
import Events from './Events';

import './style.css'

function Dashborard() {

    const location = useLocation()
    const path = location.pathname

    return <div>
        <Nav />
        <Sidebar />
        <div className='dash-body'>
            {path === '/dashboard/main' && <Main />}
            {path === '/dashboard/book' && <Book />}
            {path === '/dashboard/events' && <Events />}
            {path === '/dashboard/profile' && <Profile />}
            {path === '/dashboard/settings' && <Settings />}
        </div>
    </div>;
}

export default Dashborard;
