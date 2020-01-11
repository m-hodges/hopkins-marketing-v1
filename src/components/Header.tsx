import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/'>Hopkins Marketing Group</Navbar.Brand>
            <Nav activeKey='/'>
                <Nav.Item>
                    <Nav.Link>
                        <NavLink to='/home' activeClassName='activeNavLink'>Home</NavLink>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <NavLink to='/about' activeClassName='activeNavLink'>About</NavLink>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/services'>Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/clients'>Clients</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default Header;