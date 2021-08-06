import { dateFormat } from 'Utils'

const ShowDate = props => {
    const { count, dateIndex, changeDateIndex } = props

    const renderDate = () => {
        let arr = []
        if ( count === 1 ) {
            arr.push('今天' + dateFormat(new Date(), 'MM月dd日'))
        } else if ( count === 2 ) {
            arr.push('今天' + dateFormat(new Date(), 'MM月dd日'))
            arr.push('明天' + dateFormat(Date.parse(new Date()) + 1000 * 60 * 60 * 24, 'MM月dd日'))
        } else {
            arr.push('今天' + dateFormat(new Date(), 'MM月dd日'))
            arr.push('明天' + dateFormat(Date.parse(new Date()) + 1000 * 60 * 60 * 24, 'MM月dd日'))
            arr.push('后天' + dateFormat(Date.parse(new Date()) + 1000 * 60 * 60 * 24 * 2, 'MM月dd日'))
        }
        return arr.map((item, index) => (
            <li key={ item } onClick={() => changeDateIndex(index) } className={ index === dateIndex ? 'active' : '' }>{ item }</li>
        ))
    }

    return (
        <ul className="show-date">
            { renderDate() }
        </ul>
    )
}

export default ShowDate