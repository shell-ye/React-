import React, { Component, Fragment } from 'react'
import './index.scss'

import Side from './Side'

export default class ShortVideoPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            player: false
        }
    }
    

    render() {
        const { title, userhead, upCount, background, video } = this.props.location.state
        const { player } = this.state
        console.log(this.props.location.state)
        return (
            <div id="short-video-player" className="page-content">
                {
                    player 
                    ? <video src={ video } autoPlay />
                    : <Fragment>
                        <img src={ background } alt="" />
                        <p><i className="iconfont play" onClick={() => this.setState({player: true})}></i></p>
                    </Fragment>
                }
                {/* 侧栏 */}
                <Side userhead={ userhead } upCount={ upCount } />
                <div className="title">{ title }</div>
            </div>
        )
    }
}
