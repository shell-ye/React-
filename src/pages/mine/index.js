import './index.scss'

import Button from 'Components/ui/Button'

const Mine = props => {
    return (
        <div id="mine" className="page-content">
            <p>额，说出来你可能不信，这个猫眼项目暂时没有计划写"我的"页面，下面有选项只是为了好看，哈哈哈哈哈哈~</p>
            <Button onClick={() => props.history.push('/home/hot')}>返回首页</Button>
        </div>
    )
}

export default Mine