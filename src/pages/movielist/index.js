import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import SearchMovieRow from 'Components/SearchMovieRow'
import { Toast } from 'antd-mobile'
import Scroll from 'Utils/scroll'

class MovieList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            offset: 20
        }
    }

    componentDidMount () {
        this.props.searchMovie(this.props.location.state.keyWords, this.state.offset)
        this.setState({
            offset: this.state.offset + 20
        })

        // 上拉加载
        this.scroll = new Scroll({
            el: '#movie-list',
            scrollBottom: () => {
                this.searchMovie()
            }
        })
    }

    clickHandler = item => {
        if ( item.sc ) {
            this.props.history.push({
                pathname: '/details',
                state: {
                    id: item.id
                }
            })
        } else {
            Toast.info('即将上映，敬请期待！')
        }
    }

    renderMovieList = () => {
        console.log(this.props)
        return this.props.movies.list.map(item => (
            <SearchMovieRow 
                id={ item.id }
                key={ item.id }
                nm={ item.nm  }
                img={ item.img }
                sc={ item.sc }
                wish={ item.wish }
                enm={ item.enm }
                cat={ item.cat }
                pubDesc={ item.pubDesc }
                onClick={() => this.clickHandler(item)}
            />
        ))
    }

    searchMovie = () => {
        this.props.searchMovie(this.props.location.state.keyWords, this.state.offset)
        this.setState({
            offset: this.state.offset + 20
        })
    }

    render () {
        return (
            <ul id="movie-list" className="page-content">{ this.renderMovieList() }</ul>
        )
    }
}

const mapStateFromPoprs = state => {
    return state.search
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('search'), dispatch)
}

export default connect(mapStateFromPoprs, mapDispatchFromProps)(MovieList)