import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header--brand'>Hopkins Marketing Group</div>
                <div className='header--linkContainer'>
                    <NavLink to='/home' activeClassName='activeNavLink' className='header--link'>Home</NavLink>
                    <NavLink to='/about' activeClassName='activeNavLink' className='header--link'>About</NavLink>
                    <NavLink to='/services' activeClassName='activeNavLink' className='header--link'>Services</NavLink>
                    <NavLink to='/clients' activeClassName='activeNavLink' className='header--link'>Clients</NavLink>
                    <NavLink to='/contact' activeClassName='activeNavLink' className='header--link'>Contact</NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;