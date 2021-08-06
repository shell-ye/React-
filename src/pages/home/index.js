import React, { Component } from 'react'
import './index.scss'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Hot from './Hot'
import Comming from './Comming'

export default class Home extends Component {
    render() {
        return (
            <div className="page-content" id="home">
                <Nav />
                <Route path="/home/hot" component={ Hot } />
                <Route path="/home/comming" component={ Comming } />
            </div>
        )
    }
}
