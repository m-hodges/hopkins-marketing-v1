import React, { useEffect, useState } from 'react';

import IService from '../types'

const Service = (props: IService) => {
    const reference = `${props.id}Reference`
    const [ isContentVisible, setContentVisibility ] = useState<boolean>(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setContentVisibility(true)
                }
            })
        })
        const target: any = document.getElementById(reference)
        observer.observe(target)
        return () => observer.unobserve(target)
    }, [])
    return (
        <div className='service' >
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