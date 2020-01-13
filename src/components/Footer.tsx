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
                    <Col sm={12} md={4} className='footer--container__column'>
                        <img src="/images/hopkins_marketing_logo.png" alt="Hopkins Marketing Logo" />
                    </Col>
                    <Col sm={6} md={4} className='footer--container__column'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className='footer--icon'/>
                        </a>  
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon className='footer--icon'/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className='footer--icon'/>
                        </a>
                    </Col>
                    <Col sm={6} md={4} className='footer--container__column'>
                        <NavLink to='/home'>
                            Home
                        </NavLink>
                        <NavLink to='/contact'>
                            Contact Us
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;