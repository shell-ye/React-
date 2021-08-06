import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import _ from 'loadsh'
import Scroll from 'Utils/scroll'

import MovieRow from './movieRow'

class Comming extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }

    componentDidMount () {
        // 获取即将上映电影列表
        this.props.getCommingMovies()

        // 初始花下拉加载
        this.scroll = new Scroll({
            el: '.home-comming',
            scrollBottom: () => {
                this.pushCommingMovies()
            }
        })
    }

    pushCommingMovies = () => {
        // 数据分组：将一个一维数组以区块来区分，形成一个新的二维数组
        const { count } = this.state
        const movieIds = this.props.commingMovies && (this.props.commingMovies.movieIds.slice(10) || [])
        const ids = _.chunk(movieIds, 10)
        
        if ( count !== ids.length ) {
            this.props.pushCommingMovies(ids[count].join(','))
            this.setState({
                count: count + 1
            })
        }
    }

    renderItems = () => {
        if ( this.props.commingMovies && this.props.commingMovies.coming ) {
            return this.props.commingMovies.coming.map(item => <MovieRow key={ item.id } { ...item } push={ this.props.history.push } type="comming" />)
        }
    }

    render() {
        return (
            <ul className="home-comming">
                { this.renderItems() }
                <li className="bottom">已经到低了哟~</li>
            </ul>
        )
    }
}

const mapStateFromProps = state => {
    return {
        commingMovies: state.home.commingMovies
    }
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('home'), dispatch)
}

export default connect(mapStateFromProps, mapDispatchFromProps)(Comming)