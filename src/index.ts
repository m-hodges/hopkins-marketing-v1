import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main'

import App from './components/App'

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)

