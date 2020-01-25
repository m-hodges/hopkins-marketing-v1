import React from 'react';

import Hero from './Hero'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'

type Props = {
    setHeaderVisibility: (arg: boolean) => void;
}

const Main = ( { setHeaderVisibility } : Props) => {
    return (
        <>
            <Hero setHeaderVisibility={setHeaderVisibility} />
            <About />
            <Services />
            <Clients />
            <Contact />
        </>
    );
};

export default Main;