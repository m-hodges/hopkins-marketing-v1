import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'
import Footer from './Footer'

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
                        <Route path='/about' setHeaderVisibility={setHeaderVisibility}>
                            <About />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                <Footer />
            </HashRouter>
        </>
    )
}

export default hot(module)(App)