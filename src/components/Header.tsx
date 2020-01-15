import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div>Hopkins Marketing Group</div>
                <div className='header--links'>
                    <NavLink to='/home' activeClassName='activeNavLink'>Home</NavLink>
                    <NavLink to='/about' activeClassName='activeNavLink'>About</NavLink>
                    <NavLink to='/services' activeClassName='activeNavLink'>Services</NavLink>
                    <NavLink to='/clients' activeClassName='activeNavLink'>Clients</NavLink>
                    <NavLink to='/contact' activeClassName='activeNavLink'>Contact</NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;