import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import SearchInput from './SearchInput'
import MovieList from './MovieList'
import CinemaList from './CinemaList'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            keyWords: ''
        }
    }
    

    changeKeyWords = value => {
        this.setState({
            keyWords: value
        })
        if ( value ) {
            this.props.getSearchDatas(value)
        }
    }
    
    render() {
        const { movies, cinemas } = this.props
        const { keyWords } = this.state

        return (
            <div id="search" className="page-content">
                {/* 搜索框 */}
                <SearchInput changeKeyWords={ this.changeKeyWords } />
                
                {/* 列表 */}
                <div className="list">
                    { movies && <MovieList { ...movies } push={ this.props.history.push } keyWords={ keyWords } /> }
                    { cinemas && <CinemaList { ...cinemas } push={ this.props.history.push } keyWords={ keyWords } /> }
                </div>
            </div>
        )
    }
}

const mapStateFromPoprs = state => {
    return state.search
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('search'), dispatch)
}

export default connect(mapStateFromPoprs, mapDispatchFromProps)(Search)