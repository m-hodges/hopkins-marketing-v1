import React from 'react';

import IService from '../types'

const Service = (props: IService) => {
    return (
        <div className='service'>
            <img src={props.icon} alt={props.title} className='service--icon'/>
            <h3>{props.title.toUpperCase()}</h3>
            <ul>
                <li>
                    {props.firstBulletpoint}
                </li>
                <li>
                    {props.secondBulletpoint}
                </li>
                <li>
                    {props.thirdBulletpoint}
                </li>
            </ul>
        </div>
    );
};

export default Service;