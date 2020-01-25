import React from 'react';

import Service from './Service'

import data from '../data'
import IService from '../types'

const Services = () => {
    return (
        <div className='services container--full container--centered__col'>
            <div className='services--background'></div>
            <div>
                <h2 className='alt-heading'>Our Services</h2>
                <hr className='about--hr'/>
            </div>
            <div className='services--service-container container--wrap'>
                {data.map((service: IService, i: number) => (
                    <Service 
                        title={service.title}
                        firstBulletpoint={service.firstBulletpoint}
                        secondBulletpoint={service.secondBulletpoint}
                        thirdBulletpoint={service.thirdBulletpoint}
                        key={i} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;