import React, { Component, Fragment } from 'react'
import './index.scss'

export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            player: false
        }
    }
    

    render() {
        const { img, title, userhead, username, video } = this.props.location.state
        const { player } = this.state
        return (
            <div id="video-player" className="page-content">
                <div className="video">
                    {
                        player 
                        ? <video src={ video } audioTracks controller controls autoPlay />
                        : <Fragment>
                            <img src={ img } alt={ title } />
                            <p><i className="iconfont play" onClick={() => this.setState({player: true})}></i></p>
                        </Fragment>
                    }
                </div>
                <div className="info">
                    <p className="title">{ title }</p>
                    <p className="user">
                        <img src={ userhead } alt={ username } />
                        <span>{ username }</span>
                    </p>
                </div>
            </div>
        )
    }
}