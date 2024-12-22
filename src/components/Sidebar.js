import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="/profilepic.jpeg" alt="Profile" className="profile-picture" />
            <div className="name-placeholder">Liam Hastings</div>
            <nav>
                <Link to="/">Posts</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Sidebar;
