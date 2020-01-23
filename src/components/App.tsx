import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'
import Footer from './Footer'
import Main from './Main'

const App = () => {
    const [ isHeaderVisible, setHeaderVisibility ] = useState(false)
    return (
        <>
            <HashRouter>
            <Header isHeaderVisible={isHeaderVisible} />
                <Switch>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Route path='/clients'>
                            <Clients />
                        </Route>
                        <Route path='/services'>
                            <Services />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/'>
                            <Main setHeaderVisibility={setHeaderVisibility} />
                        </Route>
                </Switch>
            </HashRouter>
        </>
    )
}

export default hot(module)(App)