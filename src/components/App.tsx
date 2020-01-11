import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
    return (
        <>
            <BrowserRouter>
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
                            <Main />
                        </Route>
                    </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default hot(module)(App)