import React from 'react';
import { Container, Row, Col }  from 'react-bootstrap'

import Service from './Service'

import data from '../data'

import { IService } from '../data'

const Services = () => {
    return (
        <Container className='services container--full'>
            <Row>
                <h2>Our Services</h2>
            </Row>
            <Row>
                {data.map((service: IService, i: number) => (
                    <Service 
                    title={service.title}
                    description={service.description}
                    key={i} />
                ))}
            </Row>
        </Container>
    );
};

export default Services;