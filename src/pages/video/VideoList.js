import React, { Component } from 'react'

import Scroll from 'Utils/scroll'

export default class VideoList extends Component {
    componentDidMount () {
        new Scroll({
            el: '.video-list',
            scrollBottom: () => {
                this.props.getVideoList()
            }
        })
    }

    renderVideo = () => {
        return this.props.list.map(item => (
            <li 
                key={ item.id } 
                onClick={() => this.props.push({pathname: '/videoplayer', state: {
                    img: item.video.imgUrl,
                    video: item.video.url,
                    username: item.user.nickName,
                    userhead: item.user.avatarurl,
                    title: item.title
                }})}
            >
                <div className="content">
                    <img src={ item.images[0].url } alt="" />
                    <p className="title">{ item.title }</p>
                </div>
                <div className="info">
                    <p className="user">
                        <img src={ item.user.avatarurl } alt="" />
                        <span>{ item.user.nickName }</span>
                    </p>
                    <p className="operation">
                        <span><i className="iconfont dianzan"></i>{ item.upCount }</span>
                        <span><i className="iconfont liuyan"></i>{ item.commentCount }</span>
                        <span><i className="iconfont fenxiang"></i></span>
                    </p>
                </div>
            </li>
        ))
    }

    render () {
        return (
            <ul className="video-list">{ this.renderVideo() }</ul>
        )
    }
}