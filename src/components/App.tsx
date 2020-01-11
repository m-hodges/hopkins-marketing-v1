import React from 'react'
import { hot } from 'react-hot-loader'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const App = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default hot(module)(App)