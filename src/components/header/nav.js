import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
    <nav className="nav">
        <Link to="/schedule"> Schedule
        </Link>
        <Link to="/overview"> Overview
        </Link>
        <Link to="/articles"> Article
        </Link>
    </nav>
)