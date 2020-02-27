import React, { useState, useEffect } from 'react';

import Service from './Service'

import data from '../data'
import IService from '../types'
import observer from '../utils/observer'

const Services = () => {
    const [ isHrVisible, setHrVisibility ] = useState<boolean>(false)
    useEffect(() => {
        observer(setHrVisibility, 'servicesReference')
    }, [])
    return (
        <div className='services container--centered__col'>
            <div className='background services--background'></div>
            <h2 className='alt-heading' id='servicesReference'>
                Our Services
                <hr className={`scroll-in-hr ${(isHrVisible) ? 'scroll-in-hr__visible' : 'scroll-in-hr__not-visible'}`}/>
            </h2>
            <div className='services--service-container container--wrap'>
                {data.map((service: IService, i: number) => (
                    <Service
                        id={service.id}
                        title={service.title}
                        firstBulletpoint={service.firstBulletpoint}
                        secondBulletpoint={service.secondBulletpoint}
                        thirdBulletpoint={service.thirdBulletpoint}
                        icon={service.icon}
                        key={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;