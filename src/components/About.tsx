import React, { useEffect, useState } from 'react';

const About = () => {
    const [ isContentVisible, setContentVisibility ] = useState<boolean>(false)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setContentVisibility(true)
                }
            })
        })
        const target: any = document.querySelector('#contentReference')
        observer.observe(target)
        return () => observer.unobserve(target)
    }, [])
    return (
        <div className='about container--centered__col' >
            <h2 id='contentReference'>
                Lorem Ipsum
                <hr className={`about--hr ${(isContentVisible) ? 'about--hr__visible' : 'about--hr__not-visible'}`}/>
            </h2>
            <p className={`about--content ${(isContentVisible) ? 'fade-in fade-in--visible' : 'fade-in'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in, sollicitudin turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lectus dapibus tristique volutpat. Maecenas pretium ipsum non ullamcorper elementum. Duis eu iaculis metus. Pellentesque at ligula euismod, feugiat nisi in, sollicitudin turpis.
            </p>
        </div>
    );
};

export default About;