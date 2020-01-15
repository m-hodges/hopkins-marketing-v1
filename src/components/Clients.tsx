import React from 'react';
import { Container, Row } from 'react-bootstrap'

const Clients = () => {
    return (
        <Container className='container--half'>
            <Row>
                <h2>Our Clients</h2>
            </Row>
            <Row>
                <p>map through clients</p>
            </Row>
        </Container>
    );
};

export default Clients;