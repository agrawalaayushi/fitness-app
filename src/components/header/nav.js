import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    console.log(props)
    let selectedTab = props.location.location.pathname;
    return (
    <nav className="nav-options">
        <Link to="/schedule" className={"nav-item " + (selectedTab === '/schedule' && 'active')}> Schedule
        </Link>
        <Link to="/overview" className={"nav-item " + (selectedTab === '/overview' && 'active')}> Overview
        </Link>
        <Link to="/articles" className={"nav-item " + (selectedTab === '/articles' && 'active')}> Article
        </Link>
    </nav>
)}