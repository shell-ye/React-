import './index.scss'

import Button from 'Components/ui/Button'

import notFoundImage from 'Assets/img/404.png'

const NotFound = props => (
    <div id="not-found" className="page-content">
        <img src={ notFoundImage } alt="404" />
        <Button onClick={() => props.history.push('/home/hot')}>返回首页</Button>
    </div>
)

export default NotFound