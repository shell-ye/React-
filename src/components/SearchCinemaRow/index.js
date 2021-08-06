import './index.scss'

const SearchCinemaRow = props => {
    return (
        <li onClick={ props.onClick } className="search-cinema-row">
            <p className="title">
                <span>{ props.nm }</span>
                <span>{ props.sellPrice }</span>
                <span>元起</span>
            </p>
            <p className="addr">{ props.addr }</p>
            <p className="tags">
                <span style={{color: 'rgb(87, 157, 175)', borderColor: 'rgb(87, 157, 175)'}}>退</span>
                <span style={{color: 'rgb(87, 157, 175)', borderColor: 'rgb(87, 157, 175)'}}>改签</span>
                <span style={{color: 'rgb(255, 153, 0)', borderColor: 'rgb(255, 153, 0)'}}>小吃</span>
                <span style={{color: 'rgb(255, 153, 0)', borderColor: 'rgb(255, 153, 0)'}}>折扣卡</span>
            </p>
        </li>
    )
}

export default SearchCinemaRow