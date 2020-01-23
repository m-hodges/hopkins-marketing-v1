import React, { useEffect } from 'react';

const About = ( { setHeaderVisibility } : any ) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setHeaderVisibility(true)
                }
            })
        })
        const target: any = document.getElementById('headerReference')
        observer.observe(target)
    })
    return (
        <div id='headerReference'>
            
        </div>
    );
};

export default About;