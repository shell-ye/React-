import React from 'react'
import './index.scss'

import Button from 'Components/ui/Button'
import { Toast } from 'antd-mobile'

const MovieRow = props => {
    const clickHandler = () => {
        if ( props.type === 'hot' ) {
            props.push({
                pathname: '/details', 
                state: {
                    id: props.id
                }
            }) 
        } else {
            Toast.info('即将上映，敬请期待！')
        }
    }

    return (
        <li className="home-movies-row" onClick={ clickHandler }>
            <img src={ props.img.replace('w.h', '64.90') } alt={ props.nm } />
            <div>
                <p className="title">
                    <span>{ props.nm }</span>
                    <span 
                        className={ props.version.indexOf('3') !== -1 ? 'version three' : props.version.indexOf('2') !== -1 ? 'version two' : 'version' }
                    ></span>
                </p>
                <p>观众评<span className="sc">{ props.sc }</span></p>
                <p>主演：{ props.star }</p>
                <p>{ props.showInfo }</p>
                { props.type === 'hot' ? <Button>购票</Button> : <Button theme="orange">想看</Button> }
            </div>
        </li>
    )
}

export default MovieRow