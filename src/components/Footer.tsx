import React from 'react';

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'


const Footer = () => {
    return (
        <Navbar bg='dark' fixed='bottom' className='footer'>
            <Container>
            <Row>
                <Col>
                    <FacebookIcon />
                </Col>
                <Col>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to='/home'>
                        Home
                    </NavLink>
        
                    <NavLink to='/home'>
                        Contact
                    </NavLink>        
                </Col>
            </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;