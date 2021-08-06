import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default class TabBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            list: [{
                id: 1,
                text: '电影/影院',
                icon: 'dianying',
                path: '/home'
            }, {
                id: 2,
                text: '视频',
                icon: 'shipin',
                path: '/video'
            }, {
                id: 3,
                text: '短视频',
                icon: 'shipin-',
                path: '/shortvideo'
            }, {
                id: 4,
                text: '我的',
                icon: 'wode',
                path: '/mine'
            }]
        }
    }
    
    renderItem = () => {
        return this.state.list.map(item => {
            return (
                <li key={ item.id }>
                    <NavLink 
                        to={ item.path }
                    >
                        <i className={ 'iconfont ' + item.icon }></i>
                        <span>{ item.text }</span>
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        if ( this.props.location.pathname !== '/shortvideoplayer' ) {
            return (
                <ul id="tab-bar">
                    { this.renderItem() }
                </ul>
            )
        } else {
            return null
        }
    }
}
