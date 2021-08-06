// 头部仅仅用于展示，使用函数组件 
import React from 'react'
import './index.scss'

const Tab = props => {
    // 显示返回按键的路由
    const hideReturnList = [
        '/home/hot',
        '/home/comming',
        '/video',
        '/shortvideo',
        '/mine'
    ]
    
    // 不显示顶部栏的路由
    const hideUrls = [
        '/download'
    ]

    // 显示返回按钮的判断参数
    const showReturn = hideReturnList.indexOf(props.location.pathname) === -1
    // 不显示顶部栏的判断参数
    const hide = hideUrls.indexOf(props.location.pathname) !== -1

    if ( !hide ) {
        return (
            <header id="tab">
                { showReturn && <i className="iconfont jiantou-copy" onClick={() => { props.history.goBack() }}></i> }
                <h3>猫眼电影</h3>
            </header>
        )
    } else {
        return null
    }
}

export default Tab