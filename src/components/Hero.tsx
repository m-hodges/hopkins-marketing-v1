import React from 'react';

const Hero = () => {
    return (
        <div className='hero container--centered'>
            <div className='hero--background'></div>
            <div className='hero--logo__container'>
                <img 
                    src="/images/HMG-Logo-Web.png" 
                    alt="Hopkins Marketing Group" 
                    className='hero--logo'
                />
            </div>
        </div>
    );
};

export default Hero;