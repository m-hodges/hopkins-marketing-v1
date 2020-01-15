import React from 'react'
import { hot } from 'react-hot-loader'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
    return (
        <>
            <HashRouter>
                <Header />
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
                            <Home />
                        </Route>
                    </Switch>
                <Footer />
            </HashRouter>
        </>
    )
}

export default hot(module)(App)