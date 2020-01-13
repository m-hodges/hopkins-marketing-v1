import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Row className='footer--row__main'>
                <Col sm={6} className='footer--column footer--column__centered'>
                    <img src="/images/hopkins_marketing_logo.jpg" alt="Hopkins Marketing Logo" className='footer--image' />
                </Col>
                <Col sm={3} className='footer--column'>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='footer--link'>
                        <FacebookIcon className='footer--icon'/>
                    </a>  
                    <a href="#" target="_blank" rel="noopener noreferrer" className='footer--link'>
                        <TwitterIcon className='footer--icon'/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='footer--link'>
                        <InstagramIcon className='footer--icon'/>
                    </a>
                </Col>
                <Col sm={3} className='footer--column'>
                    <p>Contact</p>
                    <p>Ph: 027312313123</p>
                    <p>Email: hopkinsmarketing@gmail.com</p>
                </Col>
            </Row>
            <Row className='footer--row__sub'>
                <Col className='footer--column footer--column__centered'>
                    <span className='border-top'>
                        Copyright © 2020 Hopkins Marketing Group | All Rights Reserved.
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;