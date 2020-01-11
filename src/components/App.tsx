import React from 'react'
import { hot } from 'react-hot-loader'

import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

const App = () => {
    return (
        <>
            <Nav />
            <Main />
            <Footer />
        </>
    )
}

export default hot(module)(App)