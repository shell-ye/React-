import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import SearchCinemaRow from 'Components/SearchCinemaRow'

class CinemaList extends Component {
    renderCinemaList = () => {
        return this.props.cinemas.list.map(item => (
            <SearchCinemaRow
                key={ item.id } 
                nm={ item.nm }
                sellPrice={ item.sellPrice }
                addr={ item.addr }
                onClick={() => this.props.history.push({pathname: '/cinemas', state: {id: item.id}})} 
            />
        ))
    }

    render () {
        return (
            <ul id="cinema-list" className="page-content">{ this.renderCinemaList() }</ul>
        )
    }
}

const mapStateFromPoprs = state => {
    return state.search
}

const mapDispatchFromProps = dispatch => {
    return bindActionCreators(actions('search'), dispatch)
}

export default connect(mapStateFromPoprs, mapDispatchFromProps)(CinemaList)