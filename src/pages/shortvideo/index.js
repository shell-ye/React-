import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import Scroll from 'Utils/scroll'

class ShortVideo extends Component {
    componentDidMount () {
        // 获取短视频列表
        this.props.getShortVideoList()

        this.scroll = new Scroll({
            el: '#short-video',
            scrollBottom: () => {
                this.props.getShortVideoList()
            }
        })
    }

    renderShortVideoList = () => {
        return this.props.list && this.props.list.feeds.map(item => (
            <li 
                key={ item.id } 
                style={{
                    backgroundImage: 'url(' + item.video.imgUrl + ')'
                }}
                onClick={() => this.props.history.push({pathname: '/shortvideoplayer', state: {
                    userhead: item.user.avatarurl,
                    title: item.title,
                    upCount: item.upCount,
                    background: item.video.imgUrl,
                    video: item.video.url
                }})}
            >
                <div className="user">
                    <p className="info">
                        <img src={ item.user.avatarurl } alt="" />
                        <span>{ item.user.nickName }</span>
                    </p>
                    <p className="fabulous">
                        <i className="iconfont dianzan"></i>
                        <span>{ item.upCount }</span>
                    </p>
                </div>
                <div className="title">{ item.title }</div>
            </li>
        ))
    }

    render() {
        const { list } = this.props
        return (
            <ul id="short-video" className="page-content">{ list && this.renderShortVideoList() }</ul>
        )
    }
}

const mapStateFromProps = state => {
    return state.shortvideo
}

const mapDispatchFormProps = dispatch => {
    return bindActionCreators(actions('shortvideo'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFormProps)(ShortVideo)