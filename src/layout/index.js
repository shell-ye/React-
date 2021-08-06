import React, { Component } from 'react'
import './index.scss'

import Ad from 'Components/Ad'
import Tab from 'Components/Tab'
import TabBar from 'Components/Tabbar'
import RouterComponent from 'Router'

export default class LayOut extends Component {
    render() {
        return (
            <div id="layout">
                <Tab { ...this.props } />
                <Ad { ...this.props } />
                <RouterComponent />
                <TabBar { ...this.props } />
            </div>
        )
    }
}
