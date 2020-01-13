import React from 'react';

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => {
    return (
        <Navbar bg='dark' fixed='bottom' className='footer'>
            <Container fluid className='footer--container'>
                <Row>
                    <Col md={4}>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </Col>
                    <Col md={4}>
                        <NavLink to='/home'>
                            Home
                        </NavLink>
                    </Col>
                    <Col md={4}>
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