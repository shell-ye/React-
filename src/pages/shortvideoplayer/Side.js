const Side = props => {
    return (
        <div className="side">
            <img src={ props.userhead } alt="" />
            <div>
                <p>
                    <i className="iconfont dianzan"></i>
                </p>
                <span>{ props.upCount }</span>
            </div>
            <div>
                <p>
                    <i className="iconfont liuyan"></i>
                </p>
                <span>评论</span>
            </div>
            <div>
                <p>
                    <i className="iconfont fenxiang"></i>
                </p>
                <span>分享</span>
            </div>
        </div>
    )
}

export default Side