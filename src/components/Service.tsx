import React, { useEffect, useState, Suspense } from 'react';

import IService from '../types'

const Service = (props: IService) => {
    //create test component
    // import('./Svg')
    //import it - check if it needs to be async
    //test what i can do with an imported svg directly
    //map svg to test component
    // import(props.icon)
    const reference = `${props.id}Reference`
    const [ isContentVisible, setContentVisibility ] = useState<boolean>(false)
    const [ dynamicComponent, setDynamicComponent ] = useState<any>(null)
    // const importSvg = async () => {
    //     const importedSvg = await import('./Svg')
    //     setDynamicComponent(importedSvg.default)
    // }
    // importSvg()
    const dynamicSvg = React.lazy(() => import('./Svg'))
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
            <Suspense fallback={<div>Loading...</div>}>
                {/* <dynamicSvg /> */}
            </Suspense>
            {/* {dynamicComponent && <dynamicComponent />} */}
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