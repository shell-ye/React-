import './index.scss'

import downloadImage from 'Assets/img/download.png'
import { Toast } from 'antd-mobile'

const Download = () => {
    return (
        <div id="download" className="page-content">
            <img src={ downloadImage } alt="下载猫眼电影" />
            <button onClick={() => Toast.info('嘿嘿，没有') }>下载猫眼电影客户端</button>
        </div>
    )
}

export default Download