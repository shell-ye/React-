import './index.scss'
import AdImage from 'Assets/img/ad.png'

const Ad = props => {
    const hideUrls = [
        '/search',
        '/download'
    ]

    const showReturn = hideUrls.indexOf(props.location.pathname) === -1

    if ( showReturn ) {
        return (
            <div id="ad" onClick={() => props.history.push('/download')}>
                <img src={ AdImage } alt="猫眼电影" />
                <p>
                    <span>发现最新最热电影</span>
                    <span>打开APP<i className="iconfont arrow-right"></i></span>
                </p>
            </div>
        )
    } else {
        return null
    }
}

export default Ad