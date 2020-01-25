import React, { useEffect, useState } from 'react';

const About = () => {
    const [ isContentVisible, setContentVisibility ] = useState<boolean>(false)
    const [ isHrVisible, setHrVisibility ] = useState<boolean>(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setHrVisibility(entry.isIntersecting)
                if (entry.isIntersecting) {
                    setContentVisibility(true)
                }
            })
        })
        const target: any = document.querySelector('#aboutReference')
        observer.observe(target)
        return () => observer.unobserve(target)
    }, [])
    return (
        <div className='about container--centered__col' >
            <h2 id='aboutReference' >
                Lorem Ipsum
                <hr className={`about--hr scroll-in-hr ${(isHrVisible) ? 'scroll-in-hr__visible' : 'scroll-in-hr__not-visible'}`}/>
            </h2>
            <p className={`about--content ${(isContentVisible) ? 'fade-in fade-in--visible' : 'fade-in'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in, sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in, sollicitudin turpis.
            </p>
        </div>
    );
};

export default About;