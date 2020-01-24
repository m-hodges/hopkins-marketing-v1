import React from 'react';

import Service from './Service'

import data from '../data'
import IService from '../types'

const Services = () => {
    return (
        <div className='services container--full container--centered__col'>
            <div>
                <h2>Our Services</h2>
            </div>
            <div className='container--wrap'>
                {data.map((service: IService, i: number) => (
                    <Service 
                        title={service.title}
                        description={service.description}
                        key={i} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;