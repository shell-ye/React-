import React, { Component } from 'react'
import './index.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '@/actions'

import Position from './Position'
import Movies from './Movies'
import ShowDate from './ShowDate'
import DiscountCard from './DiscountCard'
import TicketList from './TicketList'

class Cinemas extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            activeIndex: 0,
            dateIndex: 0
        }
    }
    

    componentDidMount () {
        this.props.getCinemasDetails(this.props.location.state.id)
    }

    // 选择不同电影
    changeMovieIndex = activeIndex => {
        this.setState({
            activeIndex
        })
    }

    // 选择日期
    changeDateIndex = dateIndex => {
        this.setState({
            dateIndex
        })
    }

    render() {
        const { details } = this.props
        const { activeIndex, dateIndex } = this.state
        console.log(details, activeIndex)
        if ( details ) {
            return (
                <div id="cinemas" className="page-content">
                    {/* 影院定位 */}
                    <Position addr={ this.props.location.state.addr } name={ details.cinemaName } />
    
                    {/* 电影选择 */}
                    <Movies movies={ details.movies } changeMovieIndex={ this.changeMovieIndex } activeIndex={ activeIndex } />
    
                    {/* 展示日期 */}
                    <ShowDate count={ details.movies[activeIndex].shows.length } dateIndex={ dateIndex } changeDateIndex={ this.changeDateIndex } />

                    {/* 折扣卡 */}
                    <DiscountCard />

                    {/* 购票列表 */}
                    <TicketList list={ details.movies[activeIndex].shows[dateIndex].plist } />
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateFromProps = state => {
    return state.cinemas
}

const mapDispatch = dispatch => {
    return bindActionCreators(actions('cinemas'), dispatch)
}

export default connect(mapStateFromProps, mapDispatch)(Cinemas)