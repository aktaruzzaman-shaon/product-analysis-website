import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav className="text-center fs-4 fw-bold">
                <NavLink to="/home" style={({ isActive }) => {
                    return { color: isActive ? "blue" : " " }
                }}>Home</NavLink>
                <NavLink to="/reviews" style={({ isActive }) => {
                    return { color: isActive ? "blue" : " " }
                }}>Reviews</NavLink>
                <NavLink to="/dashboard" style={({ isActive }) => {
                    return { color: isActive ? "blue" : " " }
                }}>Dashboard</NavLink>
                <NavLink to="/blogs" style={({ isActive }) => {
                    return { color: isActive ? "blue" : " " }
                }}>Blogs</NavLink>
                <NavLink to="/about" style={({ isActive }) => {
                    return { color: isActive ? "blue" : " " }
                }}>About</NavLink>
            </nav>
        </div>
    );
};

export default Header;