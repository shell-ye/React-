import cardImg from 'Assets/img/card.png'

const Cinema = props => {
    const renderTags = tags => {
        return tags.map(item => (
            <span
                style={{
                    color: item.color,
                    borderColor: item.color
                }}
                key={ item.name }
            >{ item.name }</span>
        ))
    }

    const renderCinema = () => {
        // 判断有无电影院，没有则渲染暂无数据
        if ( props.cinemas && props.cinemas.length ) {
            return props.cinemas && props.cinemas.map(item => (
                <li key={ item.id } onClick={() => props.push({pathname: '/cinemas', state: {id: item.id, addr: item.addr}}) }>
                    <p className="title">
                        <span>{ item.nm }</span>
                        <span>{ item.sellPrice + '元起' }</span>
                    </p>
                    <p className="addr">{ item.addr }</p>
                    <p className="tags">
                        { renderTags(item.labels) }
                    </p>
                    <p className="card">
                        <img src={ cardImg } alt='开卡优惠' />
                        <span>{ item.promotion.cardPromotionTag }</span>
                    </p>
                    <p className="show-times">{ '近期场次： ' + item.showTimes }</p>
                </li>
            ))
        } else {
            return <li className="no-data">暂无数据</li>
        }
    }

    return (
        <ul className="cinema">{ renderCinema() }</ul>
    )
}

export default Cinema