const SearchInput = props => {
    const input = e => {
        props.changeKeyWords(e.target.value)
    }

    return (
        <div className="search-input">
            <i className="iconfont sousuo"></i>
            <input placeholder="搜电影、搜影院" onChange={ input } autoFocus />
            <span>取消</span>
        </div>
    )
}

export default SearchInput