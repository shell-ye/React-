const Position = props => {
    return (
        <div className="position">
            <p className="addr">
                <span>{ props.name }</span>
                <span>{ props.addr }</span>
            </p>
            <i className="iconfont dingwei"></i>
        </div>
    )
}

export default Position