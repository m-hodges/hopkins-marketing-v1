import React from 'react';

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <Navbar bg='light' fixed='bottom' className='footer'>
            <Container>
            <Row>
                <Col></Col>
                <Col>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                </Col>
                <Col>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>
                                <NavLink to='/home'>
                                    Home
                                </NavLink>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <NavLink to='/home'>
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;