import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import Nav from './Nav'
import VideoList from './VideoList'

class Video extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectVideoID: 0
        }
    }

    componentDidMount () {
        this.props.getVideoList( this.state.selectVideoID )
    }

    // 改变视频类型
    changeVideoID = id => {
        this.setState({
            selectVideoID: id
        }, () => {
            this.props.getVideoList( this.state.selectVideoID )
        })
    }

    getVideoList = () => {
        this.props.getVideoList( this.state.selectVideoID )
    }
    

    render() {
        const { selectVideoID } = this.state
        const { list } = this.props
        return (
            <div id="video" className="page-content">
                {/* 子导航 */}
                <Nav changeVideoID={ this.changeVideoID } selectVideoID={ selectVideoID } />

                {/* 视频列表 */}
                { list && <VideoList list={ list.feeds } push={ this.props.history.push } getVideoList={ this.getVideoList } /> }
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return state.video
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('video'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Video)