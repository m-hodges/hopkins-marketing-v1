import React from 'react';

import Service from './Service'

import data from '../data'

import { IService } from '../data'

const Services = () => {
    return (
        <div className='services container--full'>
            <div>
                <h2>Our Services</h2>
            </div>
            <div>
                {data.map((service: IService, i: number) => (
                    <Service 
                    title={service.title}
                    description={service.description}
                    key={i} />
                ))}
            </div>
        </div>
    );
};

export default Services;