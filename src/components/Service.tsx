import React, { useEffect, useState, Suspense } from 'react';

import IService from '../types'
// import {contentObserver} from '../utils/observers'

const Service = (props: IService) => {
    const reference = `${props.id}Reference`
    const [ isContentVisible, setContentVisibility ] = useState(false)
    //testing dynamic imports, not actually neccessary here
    const Svg = React.lazy(() => import('./Svg'))
    useEffect(() => {
        // contentObserver(setContentVisibility, reference)
    }, [])
    return (
        <div className='service' >
            <Suspense fallback={<div>Loading...</div>}>
                <Svg path={props.icon}/>
            </Suspense>
            <img src={props.icon} alt={props.title} className='service--icon'/>
            <h3 className='service--title' >
                {props.title.toUpperCase()}
            </h3>
            <ul className={`${(isContentVisible) ? 'fade-in fade-in--visible' : 'fade-in'}`} id={reference}>
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