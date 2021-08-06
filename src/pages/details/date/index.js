import React, { Component } from 'react'

import { dateFormat } from 'Utils'

class DateList extends Component {
    renderDate = () => {
        const { showDate, activeDate, changeShowDate } = this.props
        return showDate.map((item, index) => (
            <li 
                key={ item.date }
                className={ item.date === activeDate ? 'active' : '' }
                onClick={() => { changeShowDate(item.date) }}
            >
                { (index === 0 ? '今天' : index === 1 ? '明天' : index === 2 ? '后天' : '') + dateFormat(Date.parse(item.date), 'MM月dd日') }
            </li>
        ))
    }
    
    render () {
        return (
            <ul className="date">{ this.renderDate() }</ul>
        )
    }
}

export default DateList