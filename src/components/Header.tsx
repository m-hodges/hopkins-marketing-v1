import React from 'react';
import { NavLink } from 'react-router-dom'

type Props = {
    isHeaderVisible: boolean
}

const Header = ( { isHeaderVisible } : Props ) => {
    return (
        <>
            <div className='header'>
                <div className={(isHeaderVisible) ? 'header--background header--background__backgroundVisible' : 'header--background' }></div>
                {isHeaderVisible &&
                    <>
                        <a href="#" className='header--brand'>
                            <img 
                                src="/images/hopkins-marketing-logo.png" 
                                alt="Hopkins Marketing Group" 
                                className='header--brand__logo'
                            />
                            <span>
                                Hopkins Marketing Group
                            </span>
                        </a>
                    </>
                }
                <div className='header--linkContainer'>
                    <NavLink to='/' exact={true} activeClassName='activeNavLink' className='header--link'>Home</NavLink>
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