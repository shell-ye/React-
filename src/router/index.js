import {
    Redirect,
    Switch,
    Route,
} from 'react-router-dom'

// 路由表
import table from './table'

import NotFound from 'Pages/notfound'

const pageRoute = () => table.map(item => <Route key={ item.path } path={ item.path } component={ item.component } />)

const RouterComponent = () => (
    <Switch>
        {/* 重定向 */}
        <Redirect from="/" to="/home/hot" exact></Redirect>
        <Redirect from="/home" to="/home/hot" exact></Redirect>

        {/* 页面组件 */}
        { pageRoute() }

        {/* 错误路由匹配 */}
        <Route component={ NotFound } />
    </Switch>
)

export default RouterComponent