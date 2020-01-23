import React from 'react';

import Hero from './Hero'
import About from './About'
import Services from './Services'
import Clients from './Clients'

const Main = ( { setHeaderVisibility } : any) => {
    return (
        <>
            <Hero setHeaderVisibility={setHeaderVisibility} />
            <About />
            <Services />
            <Clients />
        </>
    );
};

export default Main;