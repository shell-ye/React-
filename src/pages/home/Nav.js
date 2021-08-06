import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div id="home-nav" className="nav">
                <span>南昌</span>
                <div>
                    <NavLink to="/home/hot">正在热映</NavLink>
                    <NavLink to="/home/comming">即将上映</NavLink>
                </div>
                <NavLink to="/search">
                    <i className="iconfont sousuo"></i>
                </NavLink>
            </div>
        )
    }
}
