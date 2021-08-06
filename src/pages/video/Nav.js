const Nav = props => {
    const list = [{
        id: 0,
        text: '推荐'
    }, {
        id: 1331498,
        text: '热映'
    }, {
        id: 1067226,
        text: '预告'
    }, {
        id: 1074953,
        text: '说电影'
    }, {
        id: 1794454,
        text: '佳片'
    }, {
        id: 1871222,
        text: '热播剧'
    }]

    const renderNav = () => {
        return list.map(item => (
            <li 
                key={ item.id } 
                className={ props.selectVideoID === item.id ? 'active' : '' }
                onClick={() => props.changeVideoID(item.id)}
            >{ item.text }</li>
        ))
    }

    return (
        <ul className="nav">{ renderNav() }</ul>
    )
}

export default Nav