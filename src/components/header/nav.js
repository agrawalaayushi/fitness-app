import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
    <nav className="nav-options">
        <Link to="/schedule" className="nav-item"> Schedule
        </Link>
        <Link to="/overview" className="nav-item"> Overview
        </Link>
        <Link to="/articles" className="nav-item"> Article
        </Link>
    </nav>
)