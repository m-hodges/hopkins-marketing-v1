import React, { useEffect, useState } from 'react';

const About = () => {
    const [ isHrVisible, setHrVisibility ] = useState<boolean>(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setHrVisibility(entry.isIntersecting)
            })
        })
        const target: any = document.querySelector('#hrReference')
        observer.observe(target)
        return () => observer.unobserve(target)
    }, [])
    return (
        <div className='about container--centered__col'>
            <h2>
                Lorem Ipsum
                <hr id='hrReference' 
                    className={`about--hr 
                        ${(isHrVisible) ? 'about--hr__visible' : 'about--hr__not-visible'}
                    `}
                />
            </h2>
            <p className='about--content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in, sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in, sollicitudin turpis.
            </p>
        </div>
    );
};

export default About;