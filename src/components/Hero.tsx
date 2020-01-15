import React from 'react';

const Hero = () => {
    return (
        <div className='hero container--centered'>
            <div className='hero--background'></div>
            <div>
                <h1 className='hero--logo'>H</h1>
            </div>
            <div className='hero--titleContainer'>
                <h2 className='hero--title'>Hopkins</h2>
                <h2 className='hero--title'>Marketing</h2>
                <h2 className='hero--title'>Group</h2>
            </div>
        </div>
    );
};

export default Hero;