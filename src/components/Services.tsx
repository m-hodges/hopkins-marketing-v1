import React from 'react';
import { Container }  from 'react-bootstrap'

import Service from './Service'

import data from '../data'

import { IService } from '../data'

const Services = () => {
    return (
        <Container className='services container--full'>
            <h2>Our Services</h2>
            <div>
                {data.map((service: IService, i: number) => (
                    <Service 
                    title={service.title}
                    description={service.description}
                    key={i} />
                ))}
            </div>
        </Container>
    );
};

export default Services;