import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar expand='sm' className='header'>
                <Navbar.Brand href='/'>Hopkins Marketing Group</Navbar.Brand>
                <Nav activeKey='/home' className='header--links'>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/home' activeClassName='activeNavLink'>
                                Home
                            </NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/about' activeClassName='activeNavLink'>About</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/services' activeClassName='activeNavLink'>Services</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/clients' activeClassName='activeNavLink'>Clients</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink to='/contact' activeClassName='activeNavLink'>Contact</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;