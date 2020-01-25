import React from 'react';

import IService from '../types'

const Service = (props: IService) => {
    return (
        <div className='service'>
            <h3>{props.title}</h3>
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