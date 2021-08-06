import React, { Component } from 'react'
import "./index.scss"

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'
import Scroll from 'Utils/scroll'

import _ from 'loadsh'

import MovieRow from './movieRow'

class Hot extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    

    componentDidMount () {
        // 获取热门电影列表
        this.props.getHotMovies()

        // 初始花下拉加载
        this.scroll = new Scroll({
            el: '.home-hot',
            scrollBottom: () => {
                this.pushHotMovies()
            }
        })
    }

    pushHotMovies = () => {
        // 数据分组：将一个一维数组以区块来区分，形成一个新的二维数组
        const { count } = this.state
        const movieIds = this.props.hotMovies && (this.props.hotMovies.movieIds.slice(12) || [])
        const ids = _.chunk(movieIds, 10)
        if ( count !== ids.length ) {
            this.props.pushHotMovies(ids[count].join(','))
            this.setState({
                count: count + 1
            })
        }
    }

    renderMovies = () => {
        // 渲染电影列表
        if ( this.props.hotMovies && this.props.hotMovies.movieList ) {
            return this.props.hotMovies.movieList.map(item => <MovieRow key={ item.id } { ...item } push={ this.props.history.push } type="hot" />)
        }
    }

    render() {
        return (
            <ul className="home-hot">
                { this.renderMovies() }
                <li className="bottom">已经到低了哟~</li>
            </ul>
        )
    }
}

const mapStateFromProps = state => {
    return {
        hotMovies: state.home.hotMovies
    }
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('home'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Hot)